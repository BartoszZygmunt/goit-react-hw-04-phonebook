import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
`;

const Filter = ({ filter, onFilterChange }) => (
  <Input
    type="text"
    value={filter}
    onChange={e => onFilterChange(e.target.value)}
    placeholder="Search contacts..."
  />
);

export default Filter;
