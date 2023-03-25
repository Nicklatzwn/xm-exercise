import { toast } from 'react-hot-toast';

const openSuccessNotification = (message: string): void => {
  toast.success(message);
};

const openErrorNotification = (message: string): void => {
  toast.error(message);
};

export const notificationController = {
  success: openSuccessNotification,
  error: openErrorNotification,
};
