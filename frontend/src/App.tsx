import { Navigate, Outlet, Route, Routes} from "react-router-dom"
import HomePage from "./pages/Home-page"
import LoginPage from "./pages/Login-page"
import RegisterPage from "./pages/register-page"
import FollowsPage from "./pages/Follows-page"
import SearchPage from "./pages/Search-page"
import { useEffect, useState } from "react"
import { api } from "./libs/api"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { SET_USER } from "./redux/slices/auth"
import PostPage from "./pages/posts"
import { useToast } from '@chakra-ui/react'
import MyProfilePage from "./pages/Myprofile-page"
import ForgotPasswordPage from "./pages/forgotpassword-page"
import ResetPasswordPage from "./pages/resetpassword-page"


function App() {
  // const theme = extendTheme({
  //   styles : {
  //     global : {
  //       body : {
  //         bg : "#242424",
  //         color : "white"
  //       }
  //     }
  //   }
  // })

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const toast = useToast();

  const PrivateRoute = () => {
    if(!isLoading){

      if(currentUser.email) return <Outlet />;
  
      return <Navigate to={"/auth/login"}/>;
    }
  };

  async function authCheck(){
    try{
      const token = localStorage.token;
      const response = await api.post(
        "/auth/check", 
        {}, 
        {
        headers : {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      dispatch(SET_USER(response.data));
      setIsLoading(false);
    } catch(error){
      localStorage.removeItem("token");
      setIsLoading(false);
      toast({
        title: 'user not authenticated',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    const token = localStorage.token;
    if (token) authCheck();
    
  }, []);

  return (
      <Routes>
        <Route path="/auth/login" element={<LoginPage/>} />
        <Route path="/auth/register" element={<RegisterPage/>}/>
        <Route path="/posts" element={<PostPage/>}/>
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path="/auth/reset-password" element={<ResetPasswordPage/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/follows" element={<FollowsPage/>} />
          <Route path="/myprofile" element={<MyProfilePage/>} />
        </Route>
      </Routes>
  )
}

export default App
