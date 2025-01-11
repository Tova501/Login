import { Link } from "react-router"

const NavBar=()=>{

    return(
        <>
            <Link to={'/'}>Home</Link>
             | 
            <Link to={'/about'}>About</Link>
        </>
    )
}

export default NavBar