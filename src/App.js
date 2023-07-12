import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyProvider from "./MyContext";
import Login from "./Components/Authentication/Login/Login";
import Footer from "./Components/Footer";
import Mainpage from "./Components/Dashboard/Mainpage";
import Loginvalidation from "./Components/Authentication/Login/Loginvalidation";
import Profile from "./Components/Dashboard/Profile";
import MRNList from "./Components/Dashboard/MRNList/MRNList";
import Changepassword from "./Components/Authentication/Changepassword/Changepassword";
import WHIGPSList from "./Components/Dashboard/WHIGPSList";
import CivilMRN from "./Components/Dashboard/MRNList/CivilMRN";
import ElectricalMRN from "./Components/Dashboard/MRNList/ElectricalMRN";
import MechanicalMRN from "./Components/Dashboard/MRNList/MechanicalMRN";
import TechnicalMRN from "./Components/Dashboard/MRNList/TechnicalMRN";
import UserList from "./Components/Dashboard/UserManagement/UserList";
import EmpList from "./Components/Dashboard/UserManagement/EmpList";
import CreateUser from "./Components/Dashboard/UserManagement//CreateUser";
import ModifyUser from "./Components/Dashboard/UserManagement/ModifyUser";

function App() {
  return (
    <MyProvider>
      {" "}
      <Routes>
        <Route exact path="/" element={<Loginvalidation Component={Login} />} />
        <Route
          path="/dashboard"
          element={<Loginvalidation Component={Mainpage} />}
        />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/change-password" element={<Changepassword />} />
        <Route path="/dashboard/MRN-List" element={<MRNList />} />
        <Route path="/dashboard/MRN-List/civil" element={<CivilMRN />} />
        <Route
          path="/dashboard/MRN-List/electrical"
          element={<ElectricalMRN />}
        />
        <Route
          path="/dashboard/MRN-List/mechanical"
          element={<MechanicalMRN />}
        />
        <Route
          path="/dashboard/MRN-List/technical"
          element={<TechnicalMRN />}
        />

        <Route path="/dashboard/WHIGPS-List" element={<WHIGPSList />} />

        <Route path="/dashboard/Emp-List" element={<EmpList />} />

        <Route path="/dashboard/User-List" element={<UserList />} />

        <Route path="/dashboard/new-user" element={<CreateUser />} />

        <Route path="/dashboard/edit-user" element={<ModifyUser />} />
      </Routes>
      <Footer />
    </MyProvider>
  );
}

export default App;
