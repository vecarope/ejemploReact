import React from 'react';
import Select from 'react-select'

const options = [
  { value: 'css', label: 'Css' },
  { value: 'html', label: 'Html' },
  { value: 'react', label: 'React' }
]

const SelectHability = () => (
  <Select options={options} />
)
export default SelectHability;