import { useEffect, useReducer, useState } from "react"
import Login from "./components/Login"
import userReducer, { UserContext } from "./components/userReducer"
import SideMenu from "./components/SideMenu"


function App() {
  const [user, userDispatch] = useReducer(userReducer, { fullName: '', email: '', password: '', address: '', phone: '' })
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (user.email?.length)
      setIsUser(true);
    else setIsUser(false);
  }, [user])

  return (
    <>
      <UserContext.Provider value={{ user, userDispatch }}>
        {!isUser ? <Login /> : <SideMenu />}
      </UserContext.Provider>
    </>
  )
}

export default App
