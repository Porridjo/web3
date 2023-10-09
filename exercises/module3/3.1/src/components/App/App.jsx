import { useState } from 'react'
import Button from 'components/Button/Button'
import Statistics from 'components/Statistics/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const changeCount = (e) => {
    if (e.target.className === "good") setGood(good + 1)
    else if (e.target.className === "neutral") setNeutral(neutral + 1)
    else setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={changeCount} text="good" />
      <Button onClick={changeCount} text="neutral" />
      <Button onClick={changeCount} text="bad" />
      <h2>statistics</h2>
      <Statistics {...{ good, neutral, bad }} />
    </div>
  )
}

export default App