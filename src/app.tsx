import "@tarojs/async-await";
import "taro-ui/dist/style/index.scss";
import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import "./styles/common.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {};

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/Home/index" // 首页
    ],
    subPackages: [
      // {
      //   root: 'packageA/',
      //   pages: [
      //     'relationship/index',
      //   ]
      // },
      // {
      //   root: 'packageB/',
      //   pages: [
      //     'relationship/index',
      //   ]
      // },
    ],
    window: {
      // backgroundTextStyle: 'light',
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#465BE5",
      navigationBarTitleText: "test",
      navigationBarTextStyle: "white"
      // navigationStyle: "custom" // 自定义导航栏
    },
    // tabBar: {
    //   custom: true, // 使用自定义的tabbar
    //   borderStyle: "white",
    //   backgroundColor: "#ffffff",
    //   color: "#A7A7A7",
    //   selectedColor: "#1E9FFF",
    //   list: []
    // },
    plugins: {
      // granlink: {
      //   version: '1.0.1',
      //   provider: 'wxdb00188ae0f6fa0d'
      // }
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store} />;
  }
}

Taro.render(<App />, document.getElementById("app"));
