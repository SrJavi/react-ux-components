import React, { useState } from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { Dropdown, IOptions } from '../src/atomic/atoms/Dropdown';

const meta: Meta = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  argTypes: {
    numberOfOption: { type: 'number', defaultValue: 5 },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const DropdownWrapper = ({ selectedItems, options, ...props }) => {
  const [selected, setSelected] = useState<IOptions[]>(selectedItems);

  console.log('selected', selected);

  return (
    <div style={{ height: '350px' }}>
      <Dropdown
        selectedItems={selected}
        setSelectedItems={setSelected}
        options={options}
        {...props}
      />
    </div>
  );
};
DropdownWrapper.displayName = 'Dropdown';

const Template: ComponentStory<typeof DropdownWrapper> = ({
  numberOfOption,
  ...args
}) => (
  <DropdownWrapper
    options={[...Array(numberOfOption).keys()].map((n) => ({
      label: `Option ${n + 1}`,
      value: `${n + 1}`,
    }))}
    selectedItems={[]}
    {...args}
  />
);

export const Default = Template.bind({});

export const Multiple = Template.bind({});

Multiple.args = {
  isMultiple: true,
};

export const DefaultValue = Template.bind({});

DefaultValue.args = {
  isMultiple: true,
  selectedItems: [{ value: '4' }, { value: '2' }, { value: '10' }],
};
