import { useContext } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { authContext } from "./store/AuthContext";


const App = () => {
  const {isLoggedIn} = useContext(authContext)


  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Dashboard />}
    </>
  )
}

export default App;