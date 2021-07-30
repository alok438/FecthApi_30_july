import React from "react";
import FetchApi from "./components/FetchApi";
import { useSelector } from "react-redux";
import { selectUser } from "../src/action/userSlice";
function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      <FetchApi />
    </div>
  );
}

export default App;
