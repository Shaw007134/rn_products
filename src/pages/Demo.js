import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, SafeAreaView} from 'react-native';
import Chart from '../components/Chart';

class Index extends Component {
  initChart = () => {
    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneMinute = 60 * 1000;
    var value = parseInt(Math.random() * 99);

    function randomData() {
      now = new Date(+now + oneMinute);
      value = Math.random() * 99;
      return {
        name: 'O2',
        value: parseInt(value),
      };
    }

    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    var option = {
      title: {
        text: 'Dynamic Chart',
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

    this.chart.setOption(option);
    const instance = this.chart;

    setInterval(() => {
      // for (var i = 0; i < 5; i++) {
      var curr = data[0];
      data.shift();
      data.push(randomData());
      // }

      instance.setOption({
        series: [
          {
            data: [curr],
          },
        ],
      });
    }, 1000);
  };

  render() {
    return <Chart onPress={this.initChart} />;
  }
}

export default Index;
