import ThemeName from './ThemeName'

const primaryColor = '#000000'
const secondaryColor = '#000000'
const navBarBackgroundColor = '#ffffff'
const navBarTextColor: any = 'black'
const pageColor = '#ECEFF6'

const defaultColor = '#000000'
const defaultTextColor = '#333333'

export default {
  name: ThemeName.Black,
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
  tabbarHeight: 30,
  tabbarBackgroundColor: '#FAFAFA',
  tabbarPadding: '20rpx 0',
  tabbarBorderTopVisible: true,
  tabbarBorderTopColor: '#ECECEC',
  tabbarTextVisible: false,

  /** 首页 */
  homeBgLinearColor1: navBarBackgroundColor,
  homeBgLinearColor2: navBarBackgroundColor,
  homeBgColor: '#fff',
  homeMeterScaleColor: '#E5E5E5', // 咪表浅色
  homeManualUploadBtnColor: '#666666', // 上传按钮颜色
  homeManualUploadBtnBorderColor: '#979797', // 上传按钮边线颜色

  /** 分析报告页 */
  triBgColor: '#666666', // 三角形背景颜色
  triBgLinearColor1: '#F1F1F1',
  triBgLinearColor2: '#F1F1F1',

  /** 历史记录页 */
  historyItemColor: '#264484', // 默认
  historyItemAddColor: '#F0BF31', // 大于
  historyItemReduceColor: '#D54A4A' // 小于
}
