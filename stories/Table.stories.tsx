import React, { useState } from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { Table } from '../src/atomic/atoms/Table';
import { TableColumn } from 'react-data-table-component';

const meta: Meta = {
  title: 'Atoms/Table',
  component: Table,
  argTypes: {
    numberOfOption: { type: 'number', defaultValue: 5 },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Transaction {
  backendTime: number;
  dalTime: number;
  name: string;
}

const Template = ({ numberOfOption, ...args }) => {
  const columns: TableColumn<Transaction>[] = [
    {
      name: 'nombre',
      selector: (row) => row.name,
      grow: 1,
    },
    {
      name: 'backendTime',
      selector: (row) => row.backendTime,
      right: true,
      grow: 0.2,
    },
    {
      name: 'dalTime',
      selector: (row) => row.dalTime,
      right: true,
      grow: 0,
    },
  ];

  const data = [...Array(numberOfOption).keys()].map((n) => ({
    name: `name ${n + 1}`,
    backendTime: n + 1,
    dalTime: n + 1,
  }));

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {};
