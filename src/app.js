import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";


const AppLayout = () =>{
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
 { path: "/",
   element: <AppLayout />,
   children: [{
    path: "/",
    element: <Body />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element:<Contact />,
  },{
    path: "/restaurants/:resId",
    element:<RestaurantsMenu />,
  }],

   errorElement: <Error />,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
