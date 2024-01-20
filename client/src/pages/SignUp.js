import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const SignUp = () => {

    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(title, load, reps);
    // }

    const obj = { email, username, password };

    const handleSubmit = async (e) => {
        e.preventDefault();        

            const response = await fetch("/customers", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();

            if (response.ok) {
                console.log("new workout added", json);
            }
        
    };


    return (
        <div className="signup">
            <div className="center">
                <div className="ondesk">
                    <div>
                        <img alt='logo' src="./images/monkey.png"/>
                        {/* <h1>LOANONDESK</h1> */}
                    </div>
                    <h2>Why sign up?</h2>
                    <ul>
                        <li className="orga"><p>Organize all your API development
                        within Postman Workspaces</p></li>
                        <li><p>Sync your postman data across devices</p></li>
                        <li><p>Back up your data to the postman cloud</p></li>
                        <li><p>It's free!</p></li>
                    </ul>
                    <img alt='profile pic' src="./images/file.png" className="bank"/>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className='create'>
                        <h1>Create a free Account</h1>
                        <Link>Sign In <span>instead?</span></Link>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>

                    
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>


                    
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>


                    <p className='get'><input className='check' type='checkbox'/> 
                     Sign up to get product updates, news, and other
                     marketing communications.</p>

                     <div className='stay'>
                        <FontAwesomeIcon icon={faCheck} className='icon'/>
                        <p>Stay signed in for 30 days</p>
                     </div>

                     <h6>By creating an account, I agree to the <span>Terms </span>
                     and <span>Privacy Policy.</span></h6>

                    <button type="submit">Create free account</button>

                </form>

            </div>
          
        </div>
    )
}

export default SignUp;