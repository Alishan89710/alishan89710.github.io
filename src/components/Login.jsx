import {React }from 'react';
import 'App.css';
import { TextField } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlackIcon from '@material-ui/core/CheckBoxOutlineBlackIcon'
import CheckBoxIcon from '@material-ui/core/CheckBoxIcon'
import FormControlLabel from '@material-ui/core/FormControlLabel'


const Login = () => {
  return (
    <div>
      <div className="icon">
        <div className="icon_class"> 
        <ParsonIcon fontSize="large"/> 
        </div>
        <div className="text">LogIn</div>
      </div>


      <div className="row">
        <TextField id="email" className="p-2" type="text" variant="outline" label="Enter Email Name" fullWidth />
        <TextField id="password" className="p-2" type="text" variant="outline" label="Enter Password Name" fullWidth />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlackIcon fontSize="small" />
              }
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name = "CheckedI"
            />
          }
          label= "remember me "
        />

        <button variant="contained" color="primary" > Login </button>
      </div>



      <p className="text-center" >
<link to="Signup" className="text-black-50">
<h5>  create Account</h5>
</link>
</p>



      {/* <div className="base-container">
        <div className="header">LogIn</div>
        <div className="content">
          <div className="image"></div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
      <div className="footer">
        <button type ="button" className="btn">
          Login
        </button>
      </div>
      </div>       */}


    </div>
  )
}

export default Login
