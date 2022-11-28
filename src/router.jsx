import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MoviesList from "./components/MoviesList";

import TvList from "./components/TvList";
import Login from './components/Login';
import Movie from "./components/items/Movie";
import Tv from "./components/items/Tv";
import SinglePage from "./components/SinglePage";
import Profile from "./components/Profile";
import HeaderSlider from "./components/HeaderSlider";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import UserProvider from "./components/UserContext";



const router = createBrowserRouter (
    [
        {
            
          element: (
            <UserProvider>
              <App />
            </UserProvider>
          ),
            children :  [

              {
                path: "/",
                element: [
                  <>
                     <HeaderSlider />    
                     <MoviesList /> 
                     <TvList />  
                  </>,
                ]
              },
              {
                path: "/login",
                element: [
                  <>
                     <HeaderSlider />    
                     <Login />
                  </>,
                ]
              },
                {
                    path :'/singlePage/:id',
                    element : <SinglePage />
                },
                {
                    path :'/profile',
                    element : [
                      <>
                          <HeaderSlider /> 
                          <Profile />
                      </> 
                    ]
                }

            ]
        }
    ]
)

            
   


export default router