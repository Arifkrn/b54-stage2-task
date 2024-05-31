import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home-page"
import LoginPage from "./pages/Login-page"
import RegisterPage from "./pages/register-page"
import { useState } from "react"


function App() {
  const theme = extendTheme({
    styles : {
      global : {
        body : {
          bg : "#242424",
          color : "white"
        }
      }
    }
  })
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const PrivateRoute = () =>{
    if(isLogin) return <Outlet/>

    return <Navigate to={"/login"}/>
  }

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/home" element={<HomePage/>} />
        </Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    </ChakraProvider>
  )
}

export default App
