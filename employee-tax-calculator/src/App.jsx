import { useState } from 'react'
import './App.css'

function App() {
  const [basicPay, setBasicPay] = useState('')
  const [da, setDA] = useState(0)
  const [hra, setHRA] = useState(0)
  const [specialAllowance, setSpecialAllowance] = useState(0)
  const [totalSalary, setTotalSalary] = useState(0)
  const [grade, setGrade] = useState('')
  const [bonus, setBonus] = useState(0)

  // Calculate salary components when basic pay changes
  const handleBasicPayChange = (e) => {
    const value = parseFloat(e.target.value) || 0
    setBasicPay(value)
    
    // Calculate DA (30% of BasicPay)
    const calculatedDA = value * 0.30
    setDA(calculatedDA)
    
    // Calculate HRA (10% of BasicPay)
    const calculatedHRA = value * 0.10
    setHRA(calculatedHRA)
    
    // Calculate Special Allowance (5% of BasicPay)
    const calculatedSpecialAllowance = value * 0.05
    setSpecialAllowance(calculatedSpecialAllowance)
    
    // Calculate Total Salary
    const total = value + calculatedDA + calculatedHRA + calculatedSpecialAllowance
    setTotalSalary(total)
    
    // Reset grade and bonus when basic pay changes
    setGrade('')
    setBonus(0)
  }

  // Check and display grade based on total salary
  const checkGrade = () => {
    let employeeGrade = ''
    if (totalSalary >= 10000 && totalSalary <= 20000) {
      employeeGrade = 'A'
    } else if (totalSalary >= 20001 && totalSalary <= 30000) {
      employeeGrade = 'B'
    } else if (totalSalary >= 30001 && totalSalary <= 40000) {
      employeeGrade = 'C'
    } else if (totalSalary > 40000) {
      employeeGrade = 'EXC'
    }
    setGrade(employeeGrade)
  }

  // Calculate and display bonus based on grade
  const checkBonus = () => {
    let calculatedBonus = 0
    const basic = parseFloat(basicPay) || 0
    
    if (grade === 'A') {
      calculatedBonus = basic * 0.15
    } else if (grade === 'B') {
      calculatedBonus = basic * 0.12
    } else if (grade === 'C') {
      calculatedBonus = basic * 0.06
    } else if (grade === 'EXC') {
      calculatedBonus = basic * 0.05
    }
    
    setBonus(calculatedBonus)
  }

  return (
    <div className="app-container">
      <h1>Employee Tax Calculator</h1>
      <div className="calculator-card">
        <div className="input-section">
          <label htmlFor="basicPay">
            <strong>Enter Basic Pay:</strong>
          </label>
          <input
            type="number"
            id="basicPay"
            value={basicPay}
            onChange={handleBasicPayChange}
            placeholder="Enter basic pay amount"
            className="input-field"
          />
        </div>

        <div className="results-section">
          <h2>Salary Breakdown</h2>
          <div className="result-item">
            <span className="label">Basic Pay:</span>
            <span className="value">₹ {basicPay || 0}</span>
          </div>
          <div className="result-item">
            <span className="label">DA (30%):</span>
            <span className="value">₹ {da.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span className="label">HRA (10%):</span>
            <span className="value">₹ {hra.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span className="label">Special Allowance (5%):</span>
            <span className="value">₹ {specialAllowance.toFixed(2)}</span>
          </div>
          <div className="result-item total">
            <span className="label"><strong>Total Salary:</strong></span>
            <span className="value"><strong>₹ {totalSalary.toFixed(2)}</strong></span>
          </div>
        </div>

        <div className="button-section">
          <button 
            onClick={checkGrade} 
            className="btn btn-grade"
            disabled={!basicPay || totalSalary === 0}
          >
            Check Grade
          </button>
          <button 
            onClick={checkBonus} 
            className="btn btn-bonus"
            disabled={!grade}
          >
            Check Bonus
          </button>
        </div>

        {grade && (
          <div className="grade-section">
            <h3>Employee Grade: <span className="grade-badge">{grade}</span></h3>
          </div>
        )}

        {bonus > 0 && (
          <div className="bonus-section">
            <h3>Bonus Amount: <span className="bonus-value">₹ {bonus.toFixed(2)}</span></h3>
          </div>
        )}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a 
          href="theory-answers.html" 
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          View Theory Answers (Questions 2-6) →
        </a>
      </div>
    </div>
  )
}

export default App
