import React from "react"

import { ResponsiveScatterPlot } from "@nivo/scatterplot"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CompanyScatterChart = ({ data /* see data tab */ }) => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 120,
      legend: "date",
      legendOffset: 75,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "price",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    colors={{ scheme: "dark2" }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    theme={{
      axis: {
        legend: {
          text: {
            fill: "#ffffff",
          },
        },
        ticks: {
          text: {
            fill: "#ffffff",
          },
        },
      },
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: "left-to-right",
        itemTextColor: "#ffffff",
        symbolSize: 12,
        symbolShape: "square",
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

export default CompanyScatterChart
