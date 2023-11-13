import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
      <div className='wrapper'>
        <div className='container main'>
          <div className='row'>
            <div className='col-md-6 side-image'>
            </div>
            
            <div className='col-md-6 right'>

              <div className='input-box'>
                <div className='port4lio-text'>PORT4LIO</div>
                <div className='welcome-text'>Welcome back, User!</div>
                <div className='input-field'>
                  <input type='text' className='input' id='email-input-login' required autoComplete='off'></input>
                  <label for="email-input-login">Email</label> 
                </div>
                <div className='input-field'>
                  <input type='password' className='input' id='password-input-login' required></input>
                  <label for="password-input-login">Password</label> 
                </div>
                <div className='input-field'>
                  <input type='submit' className='submit-btn-login' value='Login'></input>
                </div>
                <div className='signin-btn'>
                  <span className='span-login'>Don't have an account? <a href='#'>Sign up here</a></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  