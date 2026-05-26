import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

const App = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes isLoggedIn={isLoggedIn}>
              <HomePage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;