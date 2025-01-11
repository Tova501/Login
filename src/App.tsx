import { useEffect, useReducer, useState } from "react"
import Login from "./components/Login"
import userReducer, { UserContext } from "./components/userReducer"
import SideMenu from "./components/SideMenu"
import { Outlet, RouterProvider } from "react-router"
import { router } from "./Router"
import NavBar from "./components/NavBar"
import AppLayout from "./components/AppLayout"


function App(){
  const [user, userDispatch] = useReducer(userReducer, { fullName: '', email: '', password: '', address: '', phone: '' })
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (user.email?.length)
      setIsUser(true);
    else setIsUser(false);
  }, [user])

  return(
    <>
      <UserContext.Provider value={{ user, userDispatch }}>
        {!isUser ? 
          <Login /> : 
         <div>
            <SideMenu/>
            <RouterProvider router={router}/>
         </div>
        }
      </UserContext.Provider>
    </>
  )
}

export default App
