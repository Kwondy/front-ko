export const optionsPerCurrency = {
  // 'KRW': {
  //   symbol: '₩',
  //   initialValue: 1000000
  // },
  'USD': {
    symbol: '$',
    initialValue: 1000
  },
  'BTC': {
    symbol: 'Ƀ',
    initialValue: 1
  }
}

export const initialCurrencies = [
  // {
  //   name: 'KRW',
  //   symbol: '₩'
  // },
  {
    name: 'USD',
    symbol: '$'
  },
  {
    name: 'BTC',
    symbol: 'Ƀ'
  }
];

export const chartTypes = [
  {
    name: 'day',
    text: 'day',
    unit: '5minute'
  },
  {
    name: 'week',
    text: 'week',
    unit: '30minute'
  },
  {
    name: 'month',
    text: 'month',
    unit: '2hour'
  },
  {
    name: 'year',
    text: 'year',
    unit: 'day'
  },
  {
    name: 'all',
    text: 'all',
    unit: 'day'
  }
];

export const coinsInHome = [
  'BTC',
  'BCH',
  'ETH',
  'ETC',
  'LTC',
  'XRP',
  'DASH',
  'XMR'
];