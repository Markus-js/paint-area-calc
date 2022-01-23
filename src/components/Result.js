import { useContext } from "react";
import { AppContext } from "../context/states";

const Result = () => {
  const { result } = useContext(AppContext);
  return (
    <div className="result-container">
      <p>result:</p>
      <h2>{result}㎡</h2>
    </div>
  );
};

export default Result;
