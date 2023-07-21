import { Route, Routes } from "react-router-dom";
import Loginvalidation from "./Components/Authentication/Login/Loginvalidation";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Loginvalidation Component={Login} />} />
        <Route
          path="/dashboard"
          element={<Loginvalidation Component={Mainpage} />}
        />
      </Routes>
    </>
  );
}

export default App;
    