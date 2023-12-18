import { useRoutes } from "react-router-dom";
import { routes } from "./router";

function App() {
  const pages = useRoutes(routes);
  return <>{pages}</>;
}

export default App;
