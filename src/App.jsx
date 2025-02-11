import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
}from "react-router-dom"
import Main from "./Layout/Main"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import Contect from "./Pages/Contect"
import SignIn from "./Login/SignIn"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/blog" element = {<Blog/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contect/>}/>
          <Route path="/signin" element = {<SignIn/>}/>
        </Route>

      </Route>
    )
  )

  return (
     <RouterProvider
      router={router}
     />
  )
}

export default App
