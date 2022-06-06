/* eslint-disable react/jsx-pascal-case */
import React from 'react';
// import { Navigate } from 'react-router-dom';
// import Users from '../views/Users/List';
// import Home from '../containers/Home';

import Propertibir from '../components/Properties/Properties.jsx'
import Properties from '../components/Muhammadrasul/Page1/index'
import Propertiestwo from '../components/Muhammadrasul/Page2/index'
import Propertiesthree from '../components/Muhammadrasul/Page3/index'
import Propertiesfour from '../components/Muhammadrasul/Page4/index'
import PropertiyUch from '../components/Property3/Property3.jsx'
import Properti_ikki from '../components/Property2/Property2.jsx'
// import Contact from '../components/contact/index'

import Edit from '../components/Acount/index'
import EditAccount from '../components/Edit/index'

///////
import Notification from '../components/Notifications/Notifications'
/////
import Reservations from '../components/Reservations/Index'
///
import Wishlist from '../components/Wishlists/Wishlists'
////
import Messages from '../components/AllMassages/AllMassages'

import Search from '../components/search/index'

import Home from '../components/Home/index'

import Details from '../components/details/index'
import Stor from '../components/reservetion_form/index'

import Hojitwo from '../components/htwo/index'

export const routes = [
  {
    // element: <Home />,
    children: [
      
      {index: true, element : <Home/>},
      { path: '/properties', element: <Hojitwo /> },
      { path: '/properties1', element: <Propertibir /> },
      { path: '/Propertibir', element: <Properties /> },
      { path: '/pro-ikki', element: <Properti_ikki /> }, 
      { path: '/pro-tort', element: <PropertiyUch/> }, 
      { path: '/propertiyuch', element: <Propertiestwo /> },
      { path: '/pro-uch', element: <Propertiesthree /> },
      { path: '/pro-tortikki', element: <Propertiesfour /> },
      // { path: '*', element: <Navigate to='/' /> },
      {path: '/editProfile', element: <Edit/>},
      {path: '/edit', element: <EditAccount/>},
      // ////////////////////
      {path: 'notification', element: <Notification/>},
      /////
      {path: '/reserver', element : <Reservations/>},
      ////
      {path: '/wishlist', element : <Wishlist/>},
      {path: '/messages', element : <Messages/>},
      {path: '/search', element : <Search/>},
      {path: '/home', element : <Home/>},
      {path: '/details', element: <Details/>},
      {path: '/story', element: <Stor/>}
    ],
  },
];
