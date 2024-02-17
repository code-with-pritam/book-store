import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashBoard from "../Dashboard/DashBoard";
import DashBoardLayout from "../Dashboard/DashBoardLayout";
import UploadBooks from "../Dashboard/UploadBooks";
import ManageBook from "../Dashboard/ManageBook";
import EditBooks from "../Dashboard/EditBooks";
import SignUp from "../components/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashBoardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <DashBoard />
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBooks />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBook />
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <EditBooks />,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        ]
    }, {
        path: "sign-up",
        element: <SignUp />
    }
]);

export default Router;