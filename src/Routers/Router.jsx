import { createBrowserRouter } from "react-router-dom";
import Home from "../Componetns/Home";
import AddingItem from "../Componetns/AddingItem";
import DetailsItem from "../Componetns/DetailsItem";

export const OurRouter = createBrowserRouter([
   {path: "/" , element: <Home/> },
   {path : "/adding", element: <AddingItem/> },
   {path : "/contects/:postId", element: <DetailsItem/> },

]);

