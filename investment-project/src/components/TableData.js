
const TableData = (props) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return (
            <tr>
                <td>{props.item.year}</td>
                <td>{formatter.format(props.item.savingsEndOfYear)}</td>
                <td>{Math.round((props.item.yearlyInterest + Number.EPSILON)*100)/100}</td>
                <td>{formatter.format(props.item.yearlyContribution)}</td>
                <td>{formatter.format(props.item.savingsEndOfYear + props.item.yearlyContribution)}</td>
            </tr>
    )
}

export default TableData;