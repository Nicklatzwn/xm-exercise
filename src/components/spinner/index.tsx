import React from 'react';
import { HashLoader } from 'react-spinners';
import { SpinnerContainer } from './spinner';

const SPINNER_COLOR = '#36d7b7';
const Spinner: React.FC<{ size: number; overlay?: boolean }> = ({ size, overlay = false }) => (
  <SpinnerContainer $overlay={overlay}>
    <HashLoader color={SPINNER_COLOR} loading size={size} />
  </SpinnerContainer>
);

export default Spinner;
