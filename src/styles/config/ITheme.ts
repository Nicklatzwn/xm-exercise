interface ThemeColorCommon {
  transparent: string;
  white: string;
  logout: string;
  logoutHover: string;
  login: string;
  loginHover: string;
  inputFocus: string;
  errorText: string;
  borderColor: string;
  counterHover: string;
  scrollerBgColor: string;
  scrollerColorHover: string;
}

interface ThemeWidthsCommon {
  cardWidth: number;
}

interface ThemeColorRest {
  background: string;
  headerBg: string;
  headerBorder: string;
  CardBg: string;
  textColor: string;
}

interface ThemeColors extends ThemeColorCommon, ThemeColorRest {}

export interface ThemeCommon {
  colors: ThemeColorCommon;
  sizes: ThemeWidthsCommon;
}

export interface Theme {
  colors: ThemeColors;
  sizes: ThemeWidthsCommon;
}
