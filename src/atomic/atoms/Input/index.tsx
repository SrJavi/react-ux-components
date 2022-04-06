import React from 'react';

import { StyledInput } from './styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
    return <StyledInput {...props} />;
};

export default Input;
