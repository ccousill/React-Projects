import React, {useState} from 'react'

const SavingsForm = (props) => {
 const [currentSavings, setCurrentSavings] = useState('');
 const [yearlySavings, setYearlySavings] = useState('');
 const [expectedInterest, setExpectedInterest] = useState('');
 const [investmentDuration, setInvestmentDuration] = useState('');

    const handleReset = () =>{
        setCurrentSavings('');
        setYearlySavings('');
        setExpectedInterest('');
        setInvestmentDuration('');
    }

    const handleData = (e) =>{
        e.preventDefault();
        const data = {
            savings:+currentSavings,
            yearly:+yearlySavings,
            expectedReturn:+expectedInterest,
            duration:+investmentDuration
        }
        props.calculateHandler(data);

    }

    return(
        <form className="form" onSubmit={handleData}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlySavings}  onChange={(e) => setYearlySavings(e.target.value)}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedInterest}  onChange={(e) => setExpectedInterest(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={investmentDuration}  onChange={(e) => setInvestmentDuration(e.target.value)}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}

export default SavingsForm;