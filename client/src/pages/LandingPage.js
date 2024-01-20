import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBuildingColumns, faChartArea, faGears,  faScrewdriverWrench, faSearch  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';




const LandingPage = () => {
    return (
        <section className="landing-page">
            <nav className='landing-nav'>
                <ul>
                    <li className='logo'>
                        <img alt='profile pic' src="./images/monkey.png"/>
                    </li>
                    <li>
                        <h4>Product</h4>
                        <FontAwesomeIcon icon={faAngleDown} className='down' />
                    </li>

                    <li>
                        <h4>Pricing</h4>
                    </li>

                    
                    <li>
                        <h4>Enterprise</h4>
                    </li>

                    
                    <li>
                        <h4>Resources and Support</h4>
                        <FontAwesomeIcon icon={faAngleDown} className='down' />
                    </li>

                    <li>
                        <h4>Public API Network</h4>
                    </li>

                </ul>


                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} className='sear' />
                        <input type='text' placeholder='Search Postman'/>
                    </div>
                    
                    <div className='account'>
                            <Link>
                                <h4>Contact Sales</h4>
                            </Link>

                            
                            <Link to="/login">
                                <h4>Sign In</h4>
                            </Link>


                            <Link to="/signup" className='s-free'>
                                <h4>Sign up for free</h4>
                            </Link>

                    </div>

            </nav>


            <div className='hero'>
                <div className='word'>
                    <h1>Build</h1>
                    <h3>APIs together</h3>
                    <p>Over 30 million developers use Postman. Get started
                    by signing up or downloading the desktop app.</p>
                    <div className='trial'>
                        <input placeholder='jsmith@example.com'/>
                        <h5>Sign Up for Free</h5>
                    </div>

                    <h5 className='download'>Download the desktop app for</h5>

                    <div className='windows'>
                        <FontAwesomeIcon icon={faWindows} className='window' />
                        <FontAwesomeIcon icon={faApple} className='window' />
                        <FontAwesomeIcon icon={faLinux} className='window' />
                    </div>
                </div>

                <img alt='profile pic' src='./images/white.png'/>
            </div>

            
            <div className='half'></div>

            <div className='middle'>
                <div className='what'>
                        <div className='info'>
                            <h1>What is Loanondesk?</h1>
                            <p>Loanondesk is an API platform for building and using
                            APIs. Loanondesk simplifies each step of the APIs 
                            lifecycle and streamlines collaboration so you can 
                            create better APIs--faster</p>
                        </div>
                        <img alt='profile pic' src='./images/loan.png'/>  
                </div>

                <div className='boxes'>
                    <div className='tools'>
                        <FontAwesomeIcon icon={faScrewdriverWrench} className='gear' />
                        <h3>Loan Calculator</h3>
                        <p>A comprehensive set of tools that help accelerate 
                        the API Lifecycle - from design, testing, documentation
                        and mocking to discovery.</p>
                    </div>

                    <div className='tools'>
                        <FontAwesomeIcon icon={faGears} className='gear' />
                        <h3>Bulk SMS</h3>
                        <p>Easily store, iterate and collaborate around all your API 
                        artifacts on one central platform used across teams.</p>
                    </div>

                    <div className='tools'>
                        <FontAwesomeIcon icon={faChartArea} className='gear' />
                        <h3>Credit Bureau</h3>
                        <p>Organize your API work and collaborate with teammates
                         accross your organization or stakeholders across the world.</p>
                    </div>

                    <div className='tools'>
                        <FontAwesomeIcon icon={faBuildingColumns} className='gear' />
                        <h3>Organize Data</h3>
                        {/* <h3>Data Storage</h3> */}
                        <p>Improve the quality of APIs with governance rules that
                        ensure APIs are designed, built, tested and distributed 
                        meeting organization standards.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default LandingPage;