import ThemeName from './ThemeName'

const primaryColor = '#26B3FF'
const secondaryColor = '#19a5ff'
const navBarBackgroundColor = '#465BE5'
const navBarTextColor: any = 'white'
const pageColor = '#ECEFF6'

const defaultColor = '#ffffff'
const defaultTextColor = '#333333'

export default {
  name: ThemeName.Default,
  // General
  primaryColor,
  secondaryColor,
  pageColor,
  defaultColor,
  defaultTextColor,
  navBarBackgroundColor,
  navBarTextColor,

  // Label - color
  labelTextColor: primaryColor,
  labelTextTitleColor: '#000000',
  labelTextDetailColor: '#989898',
  labelTextDangerColor: '#a94442',
  // Label - font size
  labelFontSizeXL: 26,
  labelFontSizeLG: 20,
  labelFontSizeMD: 14,
  labelFontSizeSM: 10,
  labelFontSizeXS: 8,

  // Button
  btnDisabledColor: '#C1C1C1',
  btnDisabledOpacity: 0.4,

  // border
  borderColor: '#E1E1E1',

  /** tabbar */
  tabbarHeight: 45,
  tabbarBackgroundColor: '#fff',
  tabbarPadding: '15rpx 0',
  tabbarBorderTopVisible: true,
  tabbarBorderTopColor: 'rgba(226, 226, 226, 1)',
  tabbarTextVisible: true,

  /** 首页背景色 */
  homeBgLinearColor1: secondaryColor,
  homeBgLinearColor2: primaryColor,
  homeBgColor: 'transparent',
  homeMeterScaleColor: '#73BFF9', // 首页咪表浅色
  homeManualUploadBtnColor: primaryColor, // 首页上传按钮颜色
  homeManualUploadBtnBorderColor: primaryColor, // 首页上传按钮边线颜色

  /** 分析报告页 */
  triBgColor: '#fff', // 三角形背景颜色
  triBgLinearColor1: secondaryColor,
  triBgLinearColor2: primaryColor,

  /** 历史记录页 */
  historyItemColor: 'rgba(81, 81, 81, 1)', // 默认
  historyItemAddColor: '#ff6c00', // 大于
  historyItemReduceColor: '#24acff' // 小于
}
