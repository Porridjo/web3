import BadButton from "components/Button/BadButton";
import GoodButton from "components/Button/GoodButton";
import OkButton from "components/Button/OkButton";
import ResetButton from "components/Button/ResetButton";
import { Context as CounterContext } from 'contexts/countersContext'
import { useContext } from "react";

const App = () => {
  const { goodCounter, badCounter, okCounter } = useContext(CounterContext)
  return (
    <div>
      <ul>
        <li>
          <span>{goodCounter}</span> <GoodButton />
        </li>
        <li>
          <span>{okCounter}</span><OkButton />
        </li>
        <li>
          <span>{badCounter}</span><BadButton />
        </li>
      </ul>
     <ResetButton />
    </div>
  );
};

export default App;
