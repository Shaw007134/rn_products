import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';

export default class App extends Component {
  // state = {
  //   data: [],
  // };
  constructor() {
    super();
    var lineData = [];
    var gaugeData = [];
    var oneSecond = 1000;
    // this.now = new Date(2020, 12, 20);
    var now = new Date().getTime() - 20 * 1000; //获取当前时间戳
    var times;
    console.log('constructor...');

    for (var i = 0; i < 20; i++) {
      times = now + i * 1000;
      var temp = {
        name: 'O2',
        value: [times, 0],
      };
      lineData.push(temp);
    }
    this.now = times;
    this.lineData = lineData;
    this.lineOption = {
      title: {
        text: 'Line',
      },
      xAxis: {
        type: 'time',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // [5, 6, 7, 8, 4, 6, 5]
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: lineData,
          type: 'line',
        },
      ],
    };

    this.gaugeOption = {
      title: {
        text: 'Gauge',
      },
      tooltip: {
        // formatter: '{a} <br/> {b}: {c}%',
        // trigger: "axis",
        formatter: function (params) {
          params = params[0];
          return params.name + ':' + parseInt(params.value[1]);
        },
      },
      series: [
        {
          name: 'O2',
          type: 'gauge',
          // details: {formatter: '{value}%'},
          // data: [{value: 45, name: 'percentage'}],
          data: [{value: 0, name: 'O2'}],
        },
      ],
    };
  }

  componentDidMount() {
    console.log('did mount');
    var lineData = this.lineData;
    var gaugeData = this.gaugeData;
    // var now = this.now;
    setInterval(() => {
      var curr = Math.round(Math.random() * 9);
      this.now = this.now + 1000;

      lineData.shift();
      lineData.push([this.now, curr]);
      this.lineData = lineData;
      this.lineChart.setOption({
        series: [
          {
            data: lineData,
          },
        ],
      });

      this.gaugeChart.setOption({
        series: [
          {
            data: [{name: 'O2', value: curr}],
          },
        ],
      });
    }, 1000);
  }

  lineRef = (ref) => {
    if (ref) {
      this.lineChart = ref;
    }
  };

  gaugeRef = (ref) => {
    if (ref) {
      this.gaugeChart = ref;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <ECharts
          ref={this.gaugeRef}
          option={this.gaugeOption}
          onLoadEnd={() => {
            this.gaugeChart.setBackgroundColor('rgba(93, 169, 81, 0.3)');
          }}
        />
        <ECharts
          ref={this.lineRef}
          option={this.lineOption}
          onLoadEnd={() => {
            this.lineChart.setBackgroundColor('rgba(93, 169, 81, 0.1)');
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

// const styles = StyleSheet.create({
//   chartContainer: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// });

// var data = [];
// var now = +new Date(1997, 9, 3);
// var oneMinute = 60 * 1000;
// var value = parseInt(Math.random() * 99);

// function randomData() {
//   now = new Date(+now + oneMinute);
//   value = Math.random() * 99;
//   return {
//     name: 'O2',
//     value: parseInt(value),
//   };
// }

// for (var i = 0; i < 1000; i++) {
//   data.push(randomData());
// }

// var option = {
//   title: {
//     text: 'Dynamic Chart',
//   },
//   tooltip: {
//     // formatter: '{a} <br/> {b}: {c}%',
//     // trigger: "axis",
//     formatter: function (params) {
//       params = params[0];
//       return params.name + ':' + parseInt(params.value[1]);
//     },
//   },
//   series: [
//     {
//       name: 'O2',
//       type: 'gauge',
//       // details: {formatter: '{value}%'},
//       // data: [{value: 45, name: 'percentage'}],
//       data: [{ value: 0, name: 'O2' }],
//     },
//   ],
// };

// this.lineChart.setOption(option);
// // const instance = this.lineChart;

// setInterval(() => {
//   // for (var i = 0; i < 5; i++) {
//   var curr = data[0];
//   data.shift();
//   data.push(randomData());
//   // }

//   this.lineChart.setOption({
//     series: [
//       {
//         data: [curr],
//       },
//     ],
//   });
// }, 1000);
//   };
