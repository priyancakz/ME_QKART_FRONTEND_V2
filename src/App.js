import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";

export const config = {
  endpoint: `https://qkart-backend-1ok7.onrender.com/api/v1`,
};

function App() {
  return (
    <div className="App">
          <Register />
    </div>
  );
}

export default App;
