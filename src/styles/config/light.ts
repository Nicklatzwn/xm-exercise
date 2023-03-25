import { common } from './common';
import { Theme } from './ITheme';

const light: Theme = {
  colors: {
    ...common.colors,
    background: '#f8fbff',
    headerBorder: '#ffffff',
    headerBg: '#ffffff',
    loginCardBg: '#ffffff',
    textColor: '##13264d',
  },
};

export { light };
