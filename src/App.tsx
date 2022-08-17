import { FC } from "react";

import ShowsList from "./Components/Headings/ShowsList";

type AppProps = {};

const App: FC<AppProps> = () => {
  return (
    <div className="bg-gray-300">
      <ShowsList></ShowsList>
    </div>
  );
};

App.defaultProps = {};
export default App;
