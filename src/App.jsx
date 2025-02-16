import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
}from "react-router-dom";
import Main from "./Layout/Main";
import SignIn from "./Login/SignIn";
import Signup from "./Login/Signup";
import Homepage from "./Pages/Homepage/Homepage";
import Contactpage from "./Pages/Contactpage/Contactpage";
import Blogpage from "./Pages/Blogpage/Blogpage";
import Aboutpage from "./Pages/Aboutpage/Aboutpage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/blog" element = {<Blogpage/>}/>
          <Route path="/about" element = {<Aboutpage/>}/>
          <Route path="/contact" element = {<Contactpage/>}/>
          <Route path="/signin" element = {<SignIn/>}/>
          <Route path="/signup" element = {<Signup/>}/>
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
