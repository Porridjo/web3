import StatisticLine from "components/Statistics/StatisticLine"

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total == 0) return <p>No feedback given</p>

  const average = total == 0 ? 0 : (good - bad) / total

  const positive = total == 0 ? 0 : good / total * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />  
        <StatisticLine text="neutral" value={neutral} /> 
        <StatisticLine text="bad" value={bad} />   
        <StatisticLine text="all" value={total} />   
        <StatisticLine text="average" value={average} />    
        <StatisticLine text="positive" value={positive} />   
      </tbody>
    </table>
  )
}

export default Statistics