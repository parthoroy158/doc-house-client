import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/Sign Up/SignUp";

import PrivateRoute from "../Share/Private Route/PrivateRoute";
import ViewAllDoctors from "../Pages/ViewAllDoctors/ViewAllDoctors";
import Secret from "../Pages/Secrate/Secret";
import ViewDoctorDetails from "../Pages/ViewAllDoctors/DoctorCard/ViewDoctorDetails/ViewDoctorDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>404 error</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: '/viewAllDoctors',
                element: <PrivateRoute><ViewAllDoctors></ViewAllDoctors></PrivateRoute>
            },
            {
                path: '/doctors/:id',
                element: <PrivateRoute><ViewDoctorDetails></ViewDoctorDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctors/${params.id}`)
            }
        ]
    },
]);

export default router;