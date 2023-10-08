import { useState } from 'react'
import Button from '../Button/Button'
import Display from '../Display/Display'

const App = () => {
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))
  console.log('rendering with counter value', counter)

  const changeCount = (delta) => {
    const newCounter = counter + delta
    setCounter(newCounter)
    localStorage.setItem("counter", JSON.stringify(newCounter))
  }

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} text="plus" delta={1} />
      <Button changeCount={changeCount} text="zero" delta={-counter}/>
      <Button changeCount={changeCount} text="minus" delta={-1} />
    </div>
  )
} 

export default App
