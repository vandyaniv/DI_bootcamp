/*

https://v6.exchangerate-api.com/v6/5ce8920764df26d7e61d39a4/latest/USD

*/

const apiUrl = 'https://v6.exchangerate-api.com/v6/5ce8920764df26d7e61d39a4/latest/USD';

async function fetchCurrencies() {
  try { 
    const response = await fetch(apiUrl);

    if (!response.ok){
      throw new Error('ERROR ' + response.status);
    }

    const data = await response.json();

    const CurrencyB = document.getElementById('CurrencyBase');
    const BaseOption = document.createElement('option');
    BaseOption.value = data.base_code;
    BaseOption.text = data.base_code;
    CurrencyB.appendChild(BaseOption);

    // part 2 of the function separe

    const SelectElement = document.getElementById('CurrencySelect');
    const CurrencyCodes = Object.keys(data.conversion_rates);

    for (const code of CurrencyCodes) {
      const option = document.createElement('option');
      option.value = code;
      option.text = code;
      SelectElement.appendChild(option);
    }

    console.log(data.conversion_rates);

  } catch(error){
    console.error(error);
  }
}

fetchCurrencies();

// parte 3 of the function :  convert

document.getElementById('Convert_BTN').addEventListener('click', () => {
  const amount = document.getElementById('AmountInput').value;
  const TargetCurrency = document.getElementById('CurrencySelect').value;

  if (amount && TargetCurrency) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const ConversionRate = data.conversion_rates[TargetCurrency];
        const ConvertAmount = amount * ConversionRate;

        document.getElementById('ConversionResult').textContent = `${amount} ${data.base_code} = ${ConvertAmount.toFixed(2)} ${TargetCurrency}`;
      })
      .catch(error => console.error('ERROR during conversion: ' + error));
  }
});

console.log('tesssttttfffffffuu')