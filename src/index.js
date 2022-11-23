import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import router from './router';
import UserProvider from './components/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
            <RouterProvider router={router} />
    </UserProvider>
);

