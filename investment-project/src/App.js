import logo from './assets/investment-calculator-logo.png';
import React, {useState} from 'react';
import SavingsForm from './components/SavingsForm';
import YearlyTable from './components/YearlyTable';
function App() {
  const [tableData,setTableData] = useState([])
  let tableHtml = <p className="no-data-text">No data to Show</p>

  
  const calculateHandler = (userInput) => {
    
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.savings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearly; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setTableData(yearlyData);
  };


  if(tableData.length > 0){
    tableHtml =<YearlyTable data={tableData}/>
  }

  return (

    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <SavingsForm calculateHandler={calculateHandler}/>
      {tableHtml}
    </div>
  );
}

export default App;
