import { ProviderWrapper as OpinionProviderWrapper } from "contexts/opinionContext";
import App from "components/App/App";


const AppLoader = () => {
  return (
    <OpinionProviderWrapper>
      <App />
    </OpinionProviderWrapper>
  )
}

export default AppLoader