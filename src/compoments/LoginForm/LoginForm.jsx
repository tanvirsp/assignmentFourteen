import { useState } from 'react';
import './LoginForm.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    
    const [loginData, setLoginData] = useState({});

    const collectDate = (e)=>{
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        })

    }


    const handleSubmit = (e)=>{
        e.preventDefault();
       console.log(loginData);

    }


    return (
        <section className="login-section">
           <h3>Login</h3>
           <form onSubmit={handleSubmit} >
                <input onBlur={collectDate} className='form-control p-3' type="email" name="email"  placeholder='Enter Your Email' required/>
                <input  onBlur={collectDate}  className='form-control p-3 my-3' type="password" name="password" placeholder='Enter Your Password' required />
                <input className='btn btn-success w-100 p-3' type="submit" value="Login" />
           </form>
           <p className="mt-2">Are you need? <span> <Link to ="/register">Register Now</Link></span></p>
            
        </section>
    );
};

export default LoginForm;