import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MoviesList from "./components/MoviesList";
import Pages from "./components/Pages";
import TvList from "./components/TvList";
import Login from './components/Login';
import Movie from "./components/items/Movie";
import Tv from "./components/items/Tv";
import SinglePage from "./components/SinglePage";
import Profile from "./components/Profile";
import HeaderSlider from "./components/HeaderSlider";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import Header from "./components/Header";


const router = createBrowserRouter (
    [
        {
            
            element : <App />,
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
              
                // {
                //     path :'/login',
                //     element : <Login />
                // },
                {
                    path :'/singlePage/:id',
                    element : <SinglePage />
                },
                {
                    path :'/profile',
                    element : <Profile />
                }

            ]
        }
    ]
)

            
   


export default router