
export const OPTION = {
  dataset: {
    source: [
      ["Commodity", "Owned", "Financed"],
      ["Commodity 1", 4, 1],
      ["Commodity 2", 2, 4],
      ["Commodity 3", 3, 6],
      ["Commodity 4", 5, 3],
    ],
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Owned", "Financed"],
  },
  grid: {
    left: "10%",
    right: "0%",
    top: "20%",
    bottom: "20%",
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
  },
  series: [
    {
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
    },
    {
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
    },
  ],
}
export const OPTION2 = {
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
      type: 'line',
      smooth: true
    }
  ]
};
export const OPTION3 = {
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line'
    }
  ]
};
