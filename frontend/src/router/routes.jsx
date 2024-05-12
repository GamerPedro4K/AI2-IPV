/* eslint-disable no-unused-vars */
import React from 'react';
import {createBrowserRouter, RouterProvider, redirect} from 'react-router-dom';

import NavbarC from '../components/Navbar';
import Home from '../views/Home';
import AddFilme from '../views/AddFilme';
import PageNotFound from '../views/PageNotFound';
import EditFilme from '../views/EditFilme';
import Generos from '../views/Generos';

let router = createBrowserRouter([
    {
        path: '/',
        Component: NavbarC,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'add',
                Component: AddFilme,
            },
            {
                path: 'edit',
                Component: EditFilme,
            },
            {
                path: 'Generos',
                Component: Generos,
            },
            {
                path: '*',
                Component: PageNotFound,
            },
        ],
    },
    
]);




export default function RoutesPage() {
    return <RouterProvider router={router} fallbackElement={<></>} />;
}