import React from 'react'
import {PieChart} from 'react-minimal-pie-chart'

function LoadingCircleReact () {


    return (
      <div>
        <PieChart
         data={[{ value:60, key: 1, color: '#4bd6e9' }]}
        lineWidth={15}
        background="#3c3c3c"
        startAngle={270}
        lengthAngle={360}
        reveal={60}
        label={({ dataEntry }) => dataEntry.value +'%'}
        labelStyle={{
        fontSize: '15px',
        fontFamily: 'sans-serif',
        fill: '#E38627',
      }}
      
      labelPosition={0}
        animate
        radius={30}
        />
      </div>
    )
  }


export default LoadingCircleReact
