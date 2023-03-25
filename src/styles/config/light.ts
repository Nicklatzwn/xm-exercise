import { common } from './common';
import { Theme } from './ITheme';

const light: Theme = {
  colors: {
    ...common.colors,
    background: '#f8fbff',
    headerBorder: '#f1f1f1',
    headerBg: '#ffffff',
    CardBg: '#ffffff',
    textColor: '##13264d',
  },
  sizes: {
    ...common.sizes,
  },
};

export { light };
