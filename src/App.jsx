import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/home/Home";
import Orders from './pages/orders/Orders';
import MyGigs from './pages/myGigs/MyGigs';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import "./app.scss";


function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/gig",
          element: <Gig />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },

      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
