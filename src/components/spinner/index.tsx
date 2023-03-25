import React from 'react';
import { HashLoader } from 'react-spinners';

// eslint-disable-next-line prettier/prettier
const Spinner: React.FC<{size: number}> = ({size}) => <HashLoader color="#36d7b7" loading size={size} />

export default Spinner;
