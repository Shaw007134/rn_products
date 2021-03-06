import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView,Image } from 'react-native';
import THNav from "../../../../components/THNav";
import { pxToDp } from '../../../../utils/stylesKits';
import { BASE_URI } from '../../../../utils/pathMap';
import THButton from "../../../../components/THButton";
class Index extends Component {
  render() {
    console.log(this.props.route.params);
    const params = this.props.route.params;

    return (
      <ImageBackground
        style={{ flex: 1, width: "100%" }}
        source={require("../../../../res/qabg.png")}
      >
        <THNav title="测试结果" />
        <ImageBackground
          style={{ flex: 1, width: "100%", position: 'relative' }}
          resizeMode="stretch"
          source={require("../../../../res/result.png")}
        >

          <Text style={{
            position: 'absolute', top: "1%", left: "6%", color: "#ffffff9a", letterSpacing: pxToDp(7)
          }}>灵魂基因鉴定单</Text>

          {/* 用户的名称 */}
          <View style={{
            flexDirection: "row", justifyContent: "space-between",
            width: "47%", position: "absolute", top: "6%", right: "5%"
          }}>
            <Text style={{ color: "#fff", fontSize: pxToDp(16) }} >[</Text>
            <Text style={{ color: "#fff", fontSize: pxToDp(16) }} >{params.currentUser.nick_name}</Text>
            <Text style={{ color: "#fff", fontSize: pxToDp(16) }} >]</Text>
          </View>
          {/* 测试结果 */}
          <ScrollView
            style={{
              width: "47%",
              position: "absolute", right: "5%", top: "12%",
              height: "26%"
            }}
          >
            <Text style={{ color: "#fff" }}>{params.content}</Text>
          </ScrollView>

          <View style={{ position: "absolute", left: "5%", top: "43%" }}>
            <Text style={{ color: "#ffffff9a" }} >外向</Text>
            <Text style={{ color: "#ffffff9a" }} >{params.extroversion}%</Text>
          </View>
          <View style={{ position: "absolute", left: "5%", top: "49%" }}>
            <Text style={{ color: "#ffffff9a" }} >判断</Text>
            <Text style={{ color: "#ffffff9a" }} >{params.judgment}%</Text>
          </View>
          <View style={{ position: "absolute", left: "5%", top: "56%" }}>
            <Text style={{ color: "#ffffff9a" }} >抽象</Text>
            <Text style={{ color: "#ffffff9a" }} >{params.abstract}%</Text>
          </View>
          <View style={{ position: "absolute", right: "5%", top: "43%" }}>
            <Text style={{ color: "#ffffff9a" }} >理性</Text>
            <Text style={{ color: "#ffffff9a" }} >{params.rational}%</Text>
          </View>

          <Text style={{
            color: "#ffffff9a", position: "absolute", left: "5%",
            top: "69%"
          }} >与你相似</Text>

          <ScrollView
          horizontal={true}
          contentContainerStyle={{flexDirection:"row",alignItems:'center'}}
          style={{position:'absolute',width:"96%",height:"11%",left:"2%",top:"72%"}}
          >
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
            <Image 
            style={{ marginLeft:pxToDp(5), width:pxToDp(50),height:pxToDp(50),borderRadius:pxToDp(25)}}
            source={{uri:BASE_URI+params.currentUser.header}} />
          </ScrollView>

          <THButton 
          onPress={()=>this.props.navigation.navigate("TestSoul")}
          style={{width:"96%",height:pxToDp(40),
          position:"absolute",top:"90%",alignSelf:"center"
        }} >继续测试</THButton>
        </ImageBackground>
      </ImageBackground>
    );
  }
}
export default Index;