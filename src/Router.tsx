
import { createBrowserRouter } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import AppLayout from "./components/AppLayout"

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        errorElement: <h1>error</h1>,
        children: [
            { path: '/', element: <Home/>},
            { path: 'about', element: <About /> }
        ]
    }
])

