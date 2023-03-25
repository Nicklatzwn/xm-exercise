import React from 'react';
import { Toaster } from 'react-hot-toast';

const NotificationToaster: React.FC = () => {
  return <Toaster containerClassName="toaster-container" reverseOrder={false} />;
};

export default NotificationToaster;
