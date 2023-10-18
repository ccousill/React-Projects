import React from 'react'
import TableData from './TableData'
// Todo: Show below table conditionally (only once result data is available)
// Show fallback text if no data is available
const YearlyTable = (props) => {
    console.log(props.data)
        

    return(
      <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
            <TableData item={item}/>
        ))}
      </tbody>
    </table>
    )
}

export default YearlyTable;