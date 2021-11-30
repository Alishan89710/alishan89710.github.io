import { Routes } from 'react-router-dom';
import './App.css';
import  Login from './components/Login';
import {Switch ,Route} from 'react-router-dom'
import HorizontalLoginForm from './components/Signup'
// import Routes from './router/route'

function App() {
  return (
    <>
    <Container maxWidth="md">
    <div className="App">
       {/* <Login /> */}
       <Switch>
<Route path="../components/Signup" exact component={signup}/>
<Route path="../components/Login" exact component={Login}/>

       </Switch>
       {/* <Routes /> */}

    </div>
    </Container>
    </>

  );
}

export default App;
