'use client';
import React from 'react';
import { ListingsLatestData } from '@/types/listings';
import { formatPrice } from '@/action/formatPrice';
import { formatMcap } from '@/action/formatMcap';
import { formatVolume } from '@/action/formatVolume';
import { Table, Skeleton } from 'antd';
import { ColumnsType } from 'antd/es/table/InternalTable';
import { LuStar } from 'react-icons/lu';

const MarketTable = ({ cryptoList }: { cryptoList: ListingsLatestData[] }) => {
  const extendedColumns: ColumnsType<ListingsLatestData> = [
    {
      title: '#',
      dataIndex: 'cmc_rank',
      key: 'rank',
      width: 60,
      fixed: 'left',
      render: (_, record) => <span>{record.cmc_rank}</span>,
    },
    {
      title: '',
      key: 'favorite',
      width: 40,
      fixed: 'left',
      align: 'center',
      render: () => (
        <LuStar size={15} className='text-yellow-500 cursor-pointer' />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80,
      fixed: 'left',
      render: (_, record) => (
        <div className='flex gap-x-1'>
          <span className='font-xs hidden md:block text-[#121318] dark:text-white'>
            {record.name}
          </span>
          <div className='flex flex-col'>
            <span className='font-xs text-gray-500'>{record.symbol}</span>
            <span className='md:hidden'>
              {formatMcap(record.quote.USD.market_cap)}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: ['quote', 'USD', 'price'],
      align: 'right',
      key: 'price',
      width: 150,
      render: (_, record) => {
        return record.quote.USD.price < 0.001 ? (
          <span className='flex justify-end'>
            $ {record.quote.USD.price.toFixed(8)}
          </span>
        ) : (
          <span className='flex justify-end'>
            $ {formatPrice(record.quote.USD.price)}
          </span>
        );
      },
    },
    {
      title: '24h %',
      dataIndex: ['quote', 'USD', 'percent_change_24h'],
      key: 'change',
      width: 120,
      render: (_, record) => {
        const value = Number(record.quote.USD.percent_change_24h).toFixed(2);
        const color =
          record.quote.USD.percent_change_24h >= 0
            ? 'text-green-500'
            : 'text-red-500';
        return (
          <span className={color}>
            {record.quote.USD.percent_change_24h > 0 ? '+' : ''}
            {value}%
          </span>
        );
      },
    },
    {
      title: 'Market Cap',
      dataIndex: ['quote', 'USD', 'market_cap'],
      key: 'market_cap',
      width: 180,
      render: (_, record) => `$ ${formatMcap(record.quote.USD.market_cap)}`,
    },
    {
      title: 'Volume (24h)',
      dataIndex: ['quote', 'USD', 'volume_24h'],
      key: 'volume',
      width: 180,
      render: (_, record) => `$ ${formatVolume(record.quote.USD.volume_24h)}`,
    },
  ];

  const isLoading = !cryptoList || cryptoList.length === 0;

  return isLoading ? (
    <Skeleton active paragraph={{ rows: 8 }} />
  ) : (
    <Table<ListingsLatestData>
      columns={extendedColumns}
      dataSource={cryptoList.map((item) => ({
        ...item,
        key: item.id,
      }))}
      pagination={false}
      scroll={{ x: 800 }}
      sticky={{ offsetHeader: 0 }}
      rowClassName={() => 'bg-white hover:bg-gray-50 transition-colors'}
    />
  );
};

export default MarketTable;
