import GridLayout from 'react-grid-layout'
import ReactEcharts from "echarts-for-react";
import {OPTION, OPTION2, OPTION3 } from '../data/options.js'
const GridComponent = () => {
  const colWidth = 300;
  const cols = 1200 / colWidth;
  const rowHeight = 300;

  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 1 },
    { i: 'b', x: 1, y: 0, w: 1, h: 1, minW: 1, maxW: 1 },
    { i: 'c', x: 2, y: 0, w: 1, h: 1 }
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={cols}
      rowHeight={rowHeight}
      width={1200}
    >
      <div key="a"><ReactEcharts option={OPTION} /></div>
      <div key="b"><ReactEcharts option={OPTION2} /></div>
      <div key="c"><ReactEcharts option={OPTION3} /></div>
    </GridLayout>
  );
}

export default GridComponent;