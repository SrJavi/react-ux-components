export const defaultTheme = {
  name: 'DEFAULT',
  fontSize: '13px',
  fontSizeButtons: '15px',
  borderRadius: '2px',
  inputsHeight: '36px',
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
  bgMenu: '#333',

  hover: '#6666',

  white: '#ffffff',
  green: '#00b351',
  danger: '#ff3300',

  scrollbarThumbBg: '#888',
  scrollbarThumbHover: '#555',
  scrollbarTrack: '#f1f1f1',
};

const darkTheme = {
  name: 'DARK',
  fontSize: '13px',
  fontSizeButtons: '15px',
  borderRadius: '2px',
  inputsHeight: '36px',
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
  bgMenu: '#333',

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
