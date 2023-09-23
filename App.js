import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Home } from "./Home";
import { SignUp } from "./SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { WPage } from "./WPage";



function App() {
  return (
    <>
    
    <UserAuthContextProvider>
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="/login" element= {<Login/>}></Route>
      <Route path="/login/signup" element= {<SignUp/>}></Route>
      <Route path="/home" element= {<WPage/>}></Route> 
    </Routes>
    </UserAuthContextProvider>

    </>
  );
}

export default App;
