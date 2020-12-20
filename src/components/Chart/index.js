import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';

export default class App extends Component {
  constructor() {
    super();
    this.option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    };
  }

  componentDidMount() {
    var data = [820, 932, 901, 934, 1290, 1330, 1320];
    setInterval(() => {
      data.shift()
      data.push()
    });
  }

  onRef = (ref) => {
    if (ref) {
      this.chart = ref;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <ECharts
          ref={this.onRef}
          option={this.option}
          onLoadEnd={() => {
            this.chart.setBackgroundColor('rgba(93, 169, 81, 0.1)');
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

// this.chart.setOption(option);
// // const instance = this.chart;

// setInterval(() => {
//   // for (var i = 0; i < 5; i++) {
//   var curr = data[0];
//   data.shift();
//   data.push(randomData());
//   // }

//   this.chart.setOption({
//     series: [
//       {
//         data: [curr],
//       },
//     ],
//   });
// }, 1000);
//   };
