import {Routes as AppRoutes , Route , Link} from 'react-router-dom';
import Login from "../components/Login";
import Signup from "../components/Signup";

const Routes  = () => {

    return(
   <AppRoutes>
   < Route path ="/" element = {<Login/>} />
   < Route path ="/" element = {<Signup/>} />
  
   </AppRoutes>
    )
}
export default Routes ;