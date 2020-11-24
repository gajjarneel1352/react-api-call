import React from 'react';
import { Input } from 'antd';

type Props = {
  value: string;
  onInputChange?: (event: React.SyntheticEvent) => void;
};

const SearchInput: React.FC<Props> = ({ value, onInputChange }) => {
  return (
    <>
      <Input.Search style={{ width: '80%', marginTop: '20px' }} onChange={onInputChange} value={value} />
    </>
  );
};

export default SearchInput;
