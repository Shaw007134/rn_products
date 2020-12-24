import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Svg from 'react-native-svg-uri';
import Chart from './pages/Demo';
import {
  product,
  rate,
  order,
  friend,
  selectedFriend,
  group,
  selectedGroup,
  message,
  selectedMessage,
  my,
  selectedMy,
} from './res/fonts/iconSvg';
import Friend from './pages/friend/home';
import Product from './pages/product/home';
import Group from './pages/group/home';
import Message from './pages/message/home';
import My from './pages/my/home';
import request from './utils/request';
import {MY_INFO} from './utils/pathMap';
import {inject, observer} from 'mobx-react';
import JMessage from './utils/JMessage';
@inject('UserStore')
@observer
class Index extends Component {
  async componentDidMount() {
    // 1 发送请求获取当前的用户信息
    const res = await request.privateGet(MY_INFO);
    // console.log(res);
    // 2 用户信息 存入到mobx中
    this.props.UserStore.setUser(res.data);

    // 3 进行极光登录
    await JMessage.login(res.data.guid, res.data.mobile);
  }
  state = {
    pages: [
      {
        selected: 'product',
        title: '产品',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={product} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={product} />
        ),
        onPress: () => this.setState({selectedTab: 'product'}),
        component: <Product />,
      },
      {
        selected: 'group',
        title: '工单',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={friend} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectFriend} />
        ),
        onPress: () => this.setState({selectedTab: 'order'}),
        component: <Group />,
      },
      {
        selected: 'message',
        title: '消息',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={message} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectedMessage} />
        ),
        onPress: () => this.setState({selectedTab: 'message'}),
        component: <Message />,
      },
      {
        selected: 'my',
        title: '我的',
        renderIcon: () => <Svg width="20" height="20" svgXmlData={my} />,
        renderSelectedIcon: () => (
          <Svg width="20" height="20" svgXmlData={selectedMy} />
        ),
        onPress: () => this.setState({selectedTab: 'my'}),
        component: <My />,
      },
    ],
  };
  constructor(props) {
    super(props);
    // selectedTab: "group",
    let selectedTab = 'product';
    if (this.props.route.params && this.props.route.params.pagename) {
      selectedTab = this.props.route.params.pagename;
    }
    this.state.selectedTab = selectedTab;
  }
  render() {
    const {selectedTab, pages} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TabNavigator>
          {pages.map((v, i) => (
            <TabNavigator.Item
              key={i}
              selected={selectedTab === v.selected}
              title={v.title}
              renderIcon={v.renderIcon}
              renderSelectedIcon={v.renderSelectedIcon}
              onPress={v.onPress}
              selectedTitleStyle={{color: '#c863b5'}}
              tabStyle={{
                backgroundColor: '#eee',
                justifyContent: 'center',
              }}>
              {v.component}
            </TabNavigator.Item>
          ))}
        </TabNavigator>
      </View>
    );
  }
}
export default Index;
