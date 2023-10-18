import React, {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const expenses = [
  { id: "e1", title: 'Car ', amount: 294, date: new Date(2022, 5, 28) },
  { id: "e2", title: 'Car thing', amount: 249, date: new Date(2022, 7, 28) },
  { id: "e3", title: 'Car yaga', amount: 267, date: new Date(2022, 1, 28) },
  { id: "e4", title: 'Car dyogo', amount: 4.67, date: new Date(2022, 9, 28) },
    ]

const App = () => {
  const [thisData,setThisData] = useState(expenses);
  
  const getData = (data) =>{
        setThisData((prevItem) =>{
          return [data,...prevItem];
        });
  }

  return (
    <div className="App">
      <NewExpense getTheData={getData}/>
      <Expenses props={thisData}/>
    </div>
  );
}

export default App;
