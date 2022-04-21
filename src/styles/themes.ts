export interface ThemeType {
  name: string;
  fontSize: string;
  fontSizeButtons: string;
  fontSizeTitle1: string;
  borderRadius: string;
  inputsHeight: string;
  headerHeight: string;
  scrollbarWidth: string;
  scrollbarThumbRadius: string;
  text: string;
  text2: string;
  textLight: string;
  textNeutralLighter: string;
  textHighlight: string;
  primary: string;
  primaryHover: string;
  primaryClick: string;
  secondary: string;
  secondaryHover: string;
  secondaryClick: string;
  default: string;
  defaultHover: string;
  defaultClick: string;
  header: string;
  headerHover: string;
  headerClick: string;
  disabled: string;
  disabledInput: string;
  tab: string;
  tabHover: string;
  tabClick: string;
  tabActive: string;
  tabDisabled: string;
  panel: string;
  border: string;
  borderButtonDisabled: string;
  borderFocusVisible: string;
  bg: string;
  menuBg: string;
  menuHover: string;
  hover: string;
  white: string;
  green: string;
  danger: string;
  scrollbarThumbBg: string;
  scrollbarThumbHover: string;
  scrollbarTrack: string;
}

export const defaultTheme: ThemeType = {
  name: 'DEFAULT',
  fontSize: '13px',
  fontSizeButtons: '15px',
  fontSizeTitle1: '20px',
  borderRadius: '2px',
  inputsHeight: '36px',
  headerHeight: '48px',
  scrollbarWidth: '8px',
  scrollbarThumbRadius: '3px',
  //${(props) => props.theme.textNeutralLighter}
  text: '#666666',
  text2: '#999',
  textLight: '#ffffff',
  textNeutralLighter: '#d3d3d3',
  textHighlight: '#ff9900',

  primary: '#01688a',
  primaryHover: '#00437e',
  primaryClick: '#003366',

  secondary: '#ff9900',
  secondaryHover: '#f38200',
  secondaryClick: '#e17800',

  default: '#ffffff',
  defaultHover: '#f2f2f2',
  defaultClick: '#d3d3d3',

  header: '#ff9900',
  headerHover: '#f38200',
  headerClick: '#e17800',

  disabled: '#d3d3d3',
  disabledInput: '#dddddd',

  tab: '#d3d3d3',
  tabHover: '#C2C2C2',
  tabClick: '#ADADAD',
  tabActive: '#666666',
  tabDisabled: '#9d9d9d',

  panel: '#ffffff',

  border: '#dfdfdf',
  borderButtonDisabled: '#bababa',
  borderFocusVisible: '#666666',

  bg: '#f2f2f2',
  menuBg: '#333',
  menuHover: '#474749',

  hover: '#6666',

  white: '#ffffff',
  green: '#00b351',
  danger: '#ff3300',

  scrollbarThumbBg: '#888',
  scrollbarThumbHover: '#555',
  scrollbarTrack: '#f1f1f1',
};

const darkTheme: ThemeType = {
  name: 'DARK',
  fontSize: '13px',
  fontSizeButtons: '15px',
  fontSizeTitle1: '20px',
  borderRadius: '2px',
  inputsHeight: '36px',
  headerHeight: '48px',
  scrollbarWidth: '8px',
  scrollbarThumbRadius: '3px',

  text: '#666666',
  text2: '#999',
  textLight: '#ffffff',
  textNeutralLighter: '#d3d3d3',
  textHighlight: '#ff9900',

  primary: '#01688a',
  primaryHover: '#00437e',
  primaryClick: '#003366',

  secondary: '#ff9900',
  secondaryHover: '#f38200',
  secondaryClick: '#e17800',

  default: '#ffffff',
  defaultHover: '#f2f2f2',
  defaultClick: '#d3d3d3',

  header: '#ff9900',
  headerHover: '#f38200',
  headerClick: '#e17800',

  disabled: '#d3d3d3',
  disabledInput: '#dddddd',

  tab: '#d3d3d3',
  tabHover: '#C2C2C2',
  tabClick: '#ADADAD',
  tabActive: '#666666',
  tabDisabled: '#9d9d9d',

  panel: '#ffffff',

  border: '#dfdfdf',
  borderButtonDisabled: '#bababa',
  borderFocusVisible: '#666666',

  bg: '#f2f2f2',
  menuBg: '#333',
  menuHover: '#474749',

  hover: '#6666',

  white: '#ffffff',
  green: '#00b351',
  danger: '#ff3300',

  scrollbarThumbBg: '#888',
  scrollbarThumbHover: '#555',
  scrollbarTrack: '#f1f1f1',
};

export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};
