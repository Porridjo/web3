import { Context as OpinionContext } from "contexts/opinionContext"
import { useContext } from "react"
import Opinion from "components/OpinionsList/Opinion";

const OpinionsList = () => {
  const { sortedOpinions } = useContext(OpinionContext);

  return sortedOpinions.map((opinion) => <Opinion key={opinion.id} {...{ opinion }} />)

}

export default OpinionsList