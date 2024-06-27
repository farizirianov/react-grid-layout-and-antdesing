import ReactEcharts from "echarts-for-react";

const MonthChart = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [100, 200, 300, 80, 50, 210, 30],
        type: 'bar'
      }
    ]
  };

  return <ReactEcharts option={option} />;
}

export default MonthChart;