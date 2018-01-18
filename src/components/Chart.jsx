import React from 'react'
import PropTypes from 'prop-types'
import CustomXAxis from './CustomizedXAxis'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import { formatMoney } from '../utils/formatMoney'
import BarChart from './BarChart'

class Chart extends React.Component {
  render() {
    const newArr = this.props.graphData
    return (
      <div className="chartContainer">
          <ResponsiveContainer width={'75%'} height={'90%'}>
          <AreaChart
            data={ newArr }
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              margin={{ bottom: 100 }}
              padding={{ top: 20 }}
              interval={ 0 }
              tick={ <CustomXAxis {...this.props}/> }
              dataKey='age'
            />
            <YAxis
              tickFormatter={ money => '$' + formatMoney(+money, 0)}
              dataKey='savings'
            />
            <Area
              type="monotone"
              dataKey="savings"
              stroke='#0074D9'
              fill='#0074D9'
            />
            <Tooltip
              label={ 'savings' }
              labelFormatter={(age) => (`Age: ${age}`)}
              formatter={(money) => (`$${formatMoney(+money, 0)}`)}
            />
          </AreaChart>
        </ResponsiveContainer>
        <BarChart
          retireAmt={this.props.retireAmt}
          finalAmount={this.props.finalAmount}
        />
      </div>
    )
  }
}

Chart.proptypes = {
  graphData: PropTypes.string
}

export default Chart