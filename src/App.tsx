import { useEffect, useReducer, useState } from "react"
import Login from "./components/Login"
import SideMenu from "./components/SideMenu"
import { RouterProvider } from "react-router"
import { router } from "./Router"
import userReducer, { UserContext } from "./stores/userReducer"


function App(){
  const [user, userDispatch] = useReducer(userReducer, { firstName: '', lastName:'' , email: '', password: '', address: '', phone: '' })
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
