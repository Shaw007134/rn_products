import {PermissionsAndroid, Platform} from 'react-native';
import {init, Geolocation} from 'react-native-amap-geolocation';
import axios from 'axios';
import Toast from './Toast';
class Geo {
  async initGeo() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
    }
    await init({
      // 来自于 高德地图中的第二个应用 android 应用key
      ios: '1abc4c69eee8453e2d88a907641f672f',
      android: '2680e344c545d9488d2a2b66184083a8',
    });
    return Promise.resolve();
  }
  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      console.log('开始定位');
      Geolocation.getCurrentPosition(({coords}) => {
        console.log(coords);
        resolve(coords);
      }, reject);
    });
  }
  async getCityByLocation() {
    Toast.showLoading('努力获取中');
    const {longitude, latitude} = await this.getCurrentPosition();
    console.log('定位结果： ' + longitude + latitude);
    const res = await axios.get('https://restapi.amap.com/v3/geocode/regeo', {
      // key  高德地图中第一个应用的key
      params: {
        location: `${longitude},${latitude}`,
        key: '8cf580b77474e1db4ca775d597ac7cf4',
      },
    });
    Toast.hideLoading();
    res.data.lng = longitude;
    res.data.lat = latitude;
    return Promise.resolve(res.data);
  }
}

export default new Geo();
