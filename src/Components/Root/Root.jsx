import React from 'react';
import {Outlet} from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../Auth/AuthProvider';

import { useContext } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Root = () => {
   const {user} = useContext(AuthContext);
   return (
      <>
         <Navbar/>
         <Outlet/>
         <Footer/>
      </>
   );
};

export default Root;