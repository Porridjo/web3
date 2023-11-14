import { Context as CounterContext } from 'contexts/countersContext'
import { useContext } from 'react'

const OkButton = () => {
  const { increaseOk } = useContext(CounterContext);
  return (<button onClick={increaseOk}>Increase Ok</button>)
}

export default OkButton