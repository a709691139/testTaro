import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.scss";
import { observer } from "@tarojs/mobx";

interface Props {}
interface State {
  [key: string]: any;
}
export default class Home extends Component<Props, State> {
  config: Config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: "test"
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      value1: 1,
      value2: 2
    };
  }

  sleep = async () => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(666);
      }, 1000);
    });
  };

  test = async () => {
    console.log("test");
    await this.sleep();
    this.setState(
      {
        value1: 222
      },
      () => {
        this.setState({
          value2: 333
        });
      }
    );
  };

  render() {
    const { value1, value2 } = this.state;
    return (
      <View>
        {value1},{value2}
        <Button onClick={this.test}>点击后卡死</Button>
      </View>
    );
  }
}
