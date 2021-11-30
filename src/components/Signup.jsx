import React from 'react';
import 'App.css';
import {TextField} from'@material-ui/core'
import { Divider } from 'antd';
import {link} from 'react-router-dom'

const Signup = () => {
  return (
    <div>
<div className="icon">
  <div className="icon_class"></div>
  <div className="text">SignUp</div>
</div>
<div className="row m-2">
  <div className="col-6 p-2">
    <TextField id="firstName" type="text" variant ="outline" label ="Enter First Name" fullWidth/>
  </div>
  <div className="col-6  p-2">
  <TextField id="LastName" type="text" variant ="outline" label ="Enter Last Name" fullWidth/>
  </div>

</div>

<div className="row m-2">
<TextField id="email" className="p-2" type="text" variant ="outline" label ="Enter Email Name" fullWidth/>
<TextField id="password" className type="text" variant ="outline" label ="Enter Password Name" fullWidth/>
<button variant="contained" color="primary" > create Account </button>
</div>    
<Divider variant="meddle"/>
<p className="text-center" >
<link to="/login" className="text-black-50">
<h5>  Already ave an Account? </h5>
</link>
</p>
</div>
  )
}

export default Signup;
