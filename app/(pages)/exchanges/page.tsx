'use client';
import React from 'react';

const exchanges = [
  {
    name: 'Binance',
    volume24h: '$24.5B',
    avgLiquidity: 909,
    weeklyVisits: '10,886,460',
    markets: '1911',
    coins: '478',
    fiatSupported: ['EUR', 'GBP', 'BRL', 'and +8 more'],
    trustScore: 9.8,
  },
  {
    name: 'OKX',
    volume24h: '$3.6B',
    avgLiquidity: 768,
    weeklyVisits: '5,234,183',
    markets: '1062',
    coins: '348',
    fiatSupported: ['AED', 'ARS', 'AUD', 'and +43 more'],
    trustScore: 9.3,
  },
  {
    name: 'Bybit',
    volume24h: '$2.8B',
    avgLiquidity: 699,
    weeklyVisits: '3,545,782',
    markets: '1179',
    coins: '710',
    fiatSupported: ['USD', 'EUR', 'GBP', 'and +3 more'],
    trustScore: 9.0,
  },
  {
    name: 'MEXC',
    volume24h: '$3.7B',
    avgLiquidity: 636,
    weeklyVisits: '6,235,456',
    markets: '3261',
    coins: '2312',
    fiatSupported: ['EUR', 'USD', 'GBP', 'and +12 more'],
    trustScore: 8.7,
  },
  {
    name: 'Bitget',
    volume24h: '$3.1B',
    avgLiquidity: 710,
    weeklyVisits: '4,710,117',
    markets: '1236',
    coins: '750',
    fiatSupported: ['EUR', 'USD', 'GBP', 'and +12 more'],
    trustScore: 8.3,
  },
  {
    name: 'KuCoin',
    volume24h: '$971.09M',
    avgLiquidity: 658,
    weeklyVisits: '651,500',
    markets: '1414',
    coins: '928',
    fiatSupported: ['USD', 'AED', 'ARS', 'and +45 more'],
    trustScore: 8.5,
  },
  {
    name: 'Gate.io',
    volume24h: '$3B',
    avgLiquidity: 577,
    weeklyVisits: '3,927,587',
    markets: '3555',
    coins: '2380',
    fiatSupported: ['EUR', 'USD', 'GBP', 'and +19 more'],
    trustScore: 8.6,
  },
  {
    name: 'Bitfinex',
    volume24h: '$200M',
    avgLiquidity: 698,
    weeklyVisits: '101,640',
    markets: '331',
    coins: '142',
    fiatSupported: ['USD', 'EUR', 'GBP', 'and +1 more'],
    trustScore: 8.4,
  },
  {
    name: 'Kraken',
    volume24h: '$920,6M',
    avgLiquidity: 778,
    weeklyVisits: '1,025,875',
    markets: '1268',
    coins: '396',
    fiatSupported: ['USD', 'EUR', 'GBP', 'and +4 more'],
    trustScore: 8.8,
  },
  {
    name: 'Coinbase',
    volume24h: '$2.8B',
    avgLiquidity: 760,
    weeklyVisits: '38,113',
    markets: '438',
    coins: '295',
    fiatSupported: ['USD', 'EUR', 'GBP'],
    trustScore: 9.2,
  },
];

const Exchanges = () => {
  return (
    <div className='container mx-auto py-10 px-4'>
      <h1 className='text-3xl font-bold dark:text-white text-[#121318] mb-6'>
        Crypto Exchange Statistics
      </h1>
      <p className='dark:text-gray-300 text-[#121318]/80 mb-8 max-w-3xl'>
        This table shows real time statistics of major cryptocurrency exchanges
        including their 24 hour trading volume and proof of reserves. Data is
        sourced from CoinMarketCap and official exchange reports.
      </p>

      <div className='overflow-x-auto p-4'>
        <table className='min-w-full text-sm text-left dark:text-gray-700 text-[#121318] border shadow-md rounded-md'>
          <thead className='bg-gray-100 dark:text-gray-900 text-[#121318] font-semibold'>
            <tr>
              <th className='px-4 py-3'>Exchange</th>
              <th className='px-4 py-3'>Trading volume(24h)</th>
              <th className='px-4 py-3'>Avg.Liquidity</th>
              <th className='px-4 py-3'>Weekly visits</th>
              <th className='px-4 py-3'>Fiat supported</th>
              <th className='px-4 py-3'># Markets</th>
              <th className='px-4 py-3'># Coins</th>
              <th className='px-4 py-3'>Trust score</th>
            </tr>
          </thead>
          <tbody>
            {exchanges.map((exchange, index) => (
              <tr
                key={index}
                className='border-b dark:hover:bg-slate-400/10 hover:bg-[#000]/10 transition dark:text-white text-[#121318]'
              >
                <td className='px-4 py-3 font-medium'>{exchange.name}</td>
                <td className='px-4 py-3'>{exchange.volume24h}</td>
                <td className='px-4 py-3'>{exchange.avgLiquidity}</td>
                <td className='px-4 py-3'>{exchange.weeklyVisits}</td>
                <td className='px-4 py-3'>
                  {exchange.fiatSupported.length > 0
                    ? exchange.fiatSupported.join(', ')
                    : 'N/A'}
                </td>
                <td className='px-4 py-3'>{exchange.markets}</td>
                <td className='px-4 py-3'>{exchange.coins}</td>
                <td className='px-4 py-3 font-semibold'>
                  {exchange.trustScore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exchanges;
