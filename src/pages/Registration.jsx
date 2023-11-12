import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {

    const [data, setData] = useState({});

    const collectData = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
       console.log(data);

    }


    return (
        <section className="login-section">
           <h3>Register</h3>
           <form onSubmit={handleSubmit} >
                <input  onBlur={collectData} className='form-control p-3 mb-3' type="text" name="name" placeholder="Enter Your Name" required />
                <input onBlur={collectData} className='form-control p-3' type="email" name="email"  placeholder='Enter Your Email' required/>
                <input  onBlur={collectData}  className='form-control p-3 my-3' type="password" name="password" placeholder='Enter Your Password' required />
                <input onBlur={collectData} className='form-control p-3 my-3' type="tel" name="phone"  placeholder='Enter Your Phone Number' required/>
                <input className='btn btn-success w-100 p-3' type="submit" value="Login" />
           </form>
           <p className="mt-2">Already have an account? <span> <Link to ="/login">Login Now</Link></span></p>
            
        </section>
    );
};

export default Registration;