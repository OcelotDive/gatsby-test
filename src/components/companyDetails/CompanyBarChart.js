import React from "react";

import { ResponsiveBar } from '@nivo/bar'
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CompanyBarChart = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'price', 'high', 'low']}
        indexBy="date"
        groupMode="grouped"
        margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'dark2' }}
        label="none"
      
     
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 120,
            legend: 'date',
            legendPosition: 'middle',
           
            legendOffset: 75
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        theme={{
            axis: {
            legend: {
                text: {
                    fill: "#ffffff",
                }
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
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                itemTextColor: '#ffffff',
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default CompanyBarChart;