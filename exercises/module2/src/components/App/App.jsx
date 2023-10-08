import { useState } from 'react'
import Button from '../Button/Button'
import Display from '../Display/Display'

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  const changeCount = (delta) => {
    setCounter(counter + delta)
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
