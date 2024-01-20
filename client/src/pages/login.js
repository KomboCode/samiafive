import React, { useContext, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { UsersContext } from '../contexts/UsersContext';


const Login = () => {

    const navigate = useNavigate();

    const { handleLogin } = useContext(UsersContext);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    
    // useEffect(() => {
    //     const fetchWorkout = async () => {
    //         const response = await fetch('/workouts');
    //         const json = await response.json();

    //         if(response.ok) {
    //             console.log("from loanondesk login", json);
    //         }
    //     }

    //     fetchWorkout();
    // }, [])

//   "proxy": "http://localhost:4000",

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("login credential", email, password);

    const response = await fetch('/customers/login/' + email );
    const json = await response.json();

    if (response.ok) {
        console.log("Fetching of email", json.password);
        if ( json.password === password ) {
            console.log("login is true allow now");
            navigate("/");
            handleLogin();
        }
    }

  }

    return (
        <div className='login'>
            <div className='center'>
                <img alt='profile pic' src='./images/monkey.png'/>
                <form onSubmit={handleSubmit}>
                    <div className='spread'>
                        <h1>Sign In</h1>
                        <Link>Create Account <span>Instead</span></Link>
                    </div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required onChange={(e) => setEmail(e.target.value)}/>
                    
                    <label htmlFor='password'>Password</label>
                    <input type='password' required onChange={(e) => setPassword(e.target.value)}/>

                    <div className='spread chini'>
                        <div className='stay'>
                            <FontAwesomeIcon icon={faCheck} className='icon'/>
                            <p>Stay signed in</p>
                        </div>     
                        <Link >Forgot Password</Link>
                    </div>

                    <button type='submit'>Sign In</button>
                </form>

            </div>
        </div>
    )
}

export default Login;