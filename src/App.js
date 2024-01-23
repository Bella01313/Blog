import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Delete from "./pages/delete/Delete";
function App() {
  const currentUser = true
  return (
    <>
    <Router>
      {/* <Topbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={ <Login />}></Route>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}></Route> */
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}></Route> */
        <Route path="/post/:id" element={<Single />}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Delete" element={<Delete/>}></Route>
      </Routes>
    </Router>
    </>
      
  );
}

export default App;