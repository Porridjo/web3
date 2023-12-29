import { Context as OpinionContext } from "contexts/opinionContext";
import OpinionsList from "components/OpinionsList/OpinionsList";
import AddOpinion from "components/AddOpinion/AddOpinion";

const App = () => {
  return (
    <div>
      <OpinionsList />
      <AddOpinion />
    </div>
  )
}

export default App