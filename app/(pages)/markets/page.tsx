'use client';
import React from 'react';

const coins = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 65682.25,
    volume: '32.5B',
    marketCap: '1.27T',
    change: 2.45,
  },
  {
    name: 'Aptos',
    symbol: 'APT',
    price: 9.28,
    volume: '2.18B',
    marketCap: '412.6B',
    change: 1.82,
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    price: 582.19,
    volume: '2.7B',
    marketCap: '89.3B',
    change: -0.52,
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 174.21,
    volume: '3.2B',
    marketCap: '78.5B',
    change: 4.73,
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.647,
    volume: '1.4B',
    marketCap: '35.6B',
    change: -1.28,
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.562,
    volume: '912M',
    marketCap: '19.8B',
    change: 0.83,
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.1825,
    volume: '2.3B',
    marketCap: '26.9B',
    change: 6.12,
  },
  {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    price: 0.00002856,
    volume: '1.1B',
    marketCap: '16.2B',
    change: -0.19,
  },
  {
    name: 'Toncoin',
    symbol: 'TON',
    price: 5.76,
    volume: '450M',
    marketCap: '19.4B',
    change: 1.94,
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 47.28,
    volume: '820M',
    marketCap: '17.3B',
    change: 3.68,
  },
];

const Markets = () => {
  return (
    <div className='container mx-auto mt-10 px-4 mb-10'>
      <h1 className='text-2xl font-semibold text-white mb-6'>Markets</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-[#111216] text-white rounded-xl overflow-hidden'>
          <thead>
            <tr className='text-left border-b border-gray-700 text-sm'>
              <th className='p-4'>#</th>
              <th className='p-4'>Name</th>
              <th className='p-4'>Price</th>
              <th className='p-4'>24h Volume</th>
              <th className='p-4'>Market Cap</th>
              <th className='p-4'>Change (24h)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr
                key={coin.symbol}
                className='hover:bg-[#1a1c20] border-b border-gray-800 transition'
              >
                <td className='p-4'>{index + 1}</td>
                <td className='p-4 flex items-center gap-2'>
                  <span className='font-medium'>{coin.name}</span>
                  <span className='text-gray-400 text-xs'>({coin.symbol})</span>
                </td>
                <td className='p-4'>${coin.price.toLocaleString()}</td>
                <td className='p-4'>{coin.volume}</td>
                <td className='p-4'>{coin.marketCap}</td>
                <td
                  className={`p-4 ${
                    coin.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {coin.change >= 0 ? '+' : ''}
                  {coin.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Markets;
