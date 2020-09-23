var config = {
  idealServer: '/ideal-issuer/api/v1/ideal/',
};

function insertBanksIntoForm(data, select) {
  // clear existing data ('Loading...')
  select.empty();
  select.append($('<option selected disabled hidden>'));

  // create a list of countries
  const countries = [];
  for (let country in data) {
    countries.push(country);
  }
  countries.sort();
  if (countries.indexOf('Nederland') >= 0) {
    // set Nederland as first country
    countries.splice(countries.indexOf('Nederland'), 1);
    countries.unshift('Nederland');
  }

  // insert each country with it's banks
  for (let country of countries) {
    const optgroup = $('<optgroup>');
    optgroup.attr('label', country);
    select.append(optgroup);
    for (let bank of data[country]) {
      const option = $('<option>');
      option.text(bank.issuerName);
      option.val(bank.issuerID);
      optgroup.append(option);
    }
  }
  if (sessionStorage.idx_input) {
    select.val(sessionStorage.idx_bank);
  }
}

function insertAmountsIntoForm(data, select) {
  // clear existing data ('Loading...')
  select.empty();
  select.append($('<option selected disabled hidden>'));

  // Load all amounts and make sure they are sorted
  const amounts = data.map(a => parseFloat(a).toFixed(2));
  amounts.sort(function(a,b) { return a - b;});

  // Insert other amounts (if present)
  for (let i=0; i < amounts.length; i++) {
    const option = $('<option>');
    option.html(`&euro; ${amounts[i]}`);
    option.val(amounts[i]);
    select.append(option);
  }
  if (sessionStorage.idx_input) {
    select.val(sessionStorage.idx_amount);
  }
}

// https://stackoverflow.com/a/8486188/559350
function parseURLParams() {
  const query = location.search.substr(1);
  const result = {};
  query.split("&").forEach(function(part) {
    const item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

// Start a transaction.
function startIDealTransaction(e) {
  e.preventDefault();
  $('#donation')[0].scrollIntoView();
  const selectedBank = $('#donation-select-bank');
  const selectedAmount = $('#donation-select-amount');

  const data = {
    bank: selectedBank.val(),
    amount: selectedAmount.val(),
  };

  if (!data.bank || !data.amount) {
    if (!data.bank) selectedBank.parent()
      .addClass('error')
      .parent().children().last().removeClass('hide');
    if (!data.amount) selectedAmount.parent()
      .addClass('error')
      .parent().children().last().removeClass('hide');
    return;
  }

  sessionStorage.idx_bank = data.bank;
  sessionStorage.idx_amount = data.amount;

  const submitButton = $('#donation-submit');
  const loadingPanel = $('#donation-loading');
  const failedPanel = $('#donation-alert');

  submitButton.prop('disabled', true);
  loadingPanel.removeClass('hide');
  failedPanel.addClass('hide');
  selectedBank.parent()
    .removeClass('error')
    .parent().children().last().addClass('hide');
  selectedAmount.parent()
    .removeClass('error')
    .parent().children().last().addClass('hide');
  $('#donation-cancelled').addClass('hide');
  $('#donation-success').addClass('hide');

  $.ajax({
    method: 'POST',
    url:    config.idealServer + 'start-donation',
    data:   data,
  }).done((redirect) => {
    location.href = redirect;
  }).fail(() => {
    failedPanel.removeClass('hide');
  }).always(() => {
    loadingPanel.addClass('hide');
  });
}

function finishIdealTransaction(params) {
  $('#donation')[0].scrollIntoView();
  const loadingPanel = $('#donation-loading');
  loadingPanel.removeClass('hide');

  $.ajax({
    method: 'POST',
    url: config.idealServer + 'return',
    data: {
      trxid: params['trxid'],
      ec: params['ec'],
    },
  }).done(() => {
    $('#donation-success').removeClass('hide');
  }).fail((xhr) => {
    if (xhr.responseText === 'error:transaction-open') {
      // TODO: Do we have to tell users this explicitly?
      $('#donation-success').removeClass('hide');
    } else if (xhr.responseText === 'error:transaction-cancelled') {
      $('#donation-cancelled').removeClass('hide');
      $('#donation-form').removeClass('hide');
    } else {
      $('#donation-failed').removeClass('hide');
      $('#donation-form').removeClass('hide');
    }
  }).always(() => {
    loadingPanel.addClass('hide');
  });
}

function init() {
  // Check whether user finished donation.
  const params = parseURLParams();
  if (params['trxid']) {
    history.replaceState(null, '', '?');
    finishIdealTransaction(params)
  } else {
    $('#donation-form').removeClass('hide');
  }

  // Fetch the list of banks
  const selectBank = $('#donation-select-bank');
  $.ajax({
    url: config.idealServer + 'banks',
  })
    .done(function (data) {
      insertBanksIntoForm(data, selectBank);
    })
    .fail(function () {
      selectBank.empty();
      selectBank.append($('<option selected disabled hidden>Fout bij het laden</option>'));
    });

  // Fetch the list of allowed payment amounts
  const selectAmount = $('#donation-select-amount');
  $.ajax({
    url: config.idealServer + 'amounts',
  })
    .done(function (data) {
      insertAmountsIntoForm(data, selectAmount);
    })
    .fail(function () {
      selectAmount.empty();
      selectAmount.append($('<option selected disabled hidden>Fout bij het laden</option>'));
    });

  // Assign click handlers
  $('#donation-submit').click(startIDealTransaction);
}

init();
