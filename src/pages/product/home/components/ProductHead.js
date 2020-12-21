import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg from 'react-native-svg-uri';
import {tanhua, near, testSoul} from '../../../../res/fonts/iconSvg';
import {pxToDp} from '../../../../utils/stylesKits';
import {NavigationContext} from '@react-navigation/native';
class Index extends Component {
  state = {
    O2: 0,
    CO2: 0,
    H: 0,
    T: 0,
    OTE: 0,
  };
  static contextType = NavigationContext;
  goPage = (page) => {
    // this.context === this.props.navigation
    this.context.navigate(page);
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({O2: Math.round(Math.random() * 30)});
      this.setState({CO2: Math.round(Math.random() * 30)});
      this.setState({H: Math.round(Math.random() * 20)});
      this.setState({T: Math.round(Math.random() * 40)});
      this.setState({OTE: Math.round(Math.random() * 20)});
    }, 1000);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: pxToDp(4),
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => this.goPage('Chart')}
          style={{alignItems: 'center'}}>
          <View
            style={{
              width: pxToDp(70),
              height: pxToDp(70),
              borderRadius: pxToDp(35),
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{this.state.O2 + '%'}</Text>
            {/* <Svg width="40" height="40" fill="#fff" svgXmlData={tanhua} /> */}
          </View>
          <Text
            style={{
              fontSize: pxToDp(12),
              marginTop: pxToDp(4),
              color: 'grey',
            }}>
            O2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goPage('Chart')}
          style={{alignItems: 'center'}}>
          <View
            style={{
              width: pxToDp(70),
              height: pxToDp(70),
              borderRadius: pxToDp(35),
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{this.state.CO2 + '%'}</Text>
            {/* <Svg width="40" height="40" fill="#fff" svgXmlData={tanhua} /> */}
          </View>
          <Text
            style={{
              fontSize: pxToDp(12),
              marginTop: pxToDp(4),
              color: 'grey',
            }}>
            CO2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goPage('Chart')}
          style={{alignItems: 'center'}}>
          <View
            style={{
              width: pxToDp(70),
              height: pxToDp(70),
              borderRadius: pxToDp(35),
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{this.state.H + '%'}</Text>
            {/* <Svg width="40" height="40" fill="#fff" svgXmlData={tanhua} /> */}
          </View>
          <Text
            style={{
              fontSize: pxToDp(12),
              marginTop: pxToDp(4),
              color: 'grey',
            }}>
            Humidity
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goPage('Chart')}
          style={{alignItems: 'center'}}>
          <View
            style={{
              width: pxToDp(70),
              height: pxToDp(70),
              borderRadius: pxToDp(35),
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{this.state.T + '℃'}</Text>
            {/* <Svg width="40" height="40" fill="#fff" svgXmlData={tanhua} /> */}
          </View>
          <Text
            style={{
              fontSize: pxToDp(12),
              marginTop: pxToDp(4),
              color: 'grey',
            }}>
            Temperature
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goPage('Chart')}
          style={{alignItems: 'center'}}>
          <View
            style={{
              width: pxToDp(70),
              height: pxToDp(70),
              borderRadius: pxToDp(35),
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{this.state.OTE + '%'}</Text>
            {/* <Svg width="40" height="40" fill="#fff" svgXmlData={tanhua} /> */}
          </View>
          <Text
            style={{
              fontSize: pxToDp(12),
              marginTop: pxToDp(4),
              color: 'grey',
            }}>
            OTE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Index;
