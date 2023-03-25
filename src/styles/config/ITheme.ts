interface ThemeColorCommon {
  transparent: string;
  white: string;
  logout: string;
  logoutHover: string;
  login: string;
  loginHover: string;
  inputFocus: string;
}

interface ThemeColorRest {
  background: string;
  headerBg: string;
  headerBorder: string;
  loginCardBg: string;
  textColor: string;
}

interface ThemeColors extends ThemeColorCommon, ThemeColorRest {}

export interface ThemeCommon {
  colors: ThemeColorCommon;
}

export interface Theme {
  colors: ThemeColors;
}
