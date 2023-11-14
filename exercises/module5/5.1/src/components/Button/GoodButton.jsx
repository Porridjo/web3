import { Context as CounterCountext } from "contexts/countersContext"
import { useContext } from "react"

const GoodButton = () => {
  const { increaseGood } = useContext(CounterCountext)
  return (
    <button onClick={increaseGood}>Increase good</button>
  )
}

export default GoodButton