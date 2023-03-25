import { common } from './common';
import { Theme } from './ITheme';

const dark: Theme = {
  colors: {
    ...common.colors,
    background: '#1e2142',
    headerBorder: '#FFFFFF',
    headerBg: '#1e2142',
    CardBg: '#25284B',
    textColor: '#ffffff',
  },
  sizes: {
    ...common.sizes,
  },
};

export { dark };
