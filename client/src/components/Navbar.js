import React, { useState } from 'react';
// import { BorrowersContext } from '../contexts/BorrowersContext'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faGear, faBell, faReceipt, faSortDown, faPerson, faEllipsisVertical, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    // const { borrowers } = useContext(BorrowersContext);
    const [ show, setShow ] = useState(false);



    // const handleLoan = (value) => {
    //     navigate("/singleloan");
    //     handlePerson(value);
    //     Cookies.set("morant", JSON.stringify(value));
    //     handleMorant(value);
    //     window.scrollTo({
    //         top: 0,
    //         bahavior: 'smooth' 
    //     })
    // }

    return (
        <nav className='navbar'>
            <div className='upper'>
              <div className='left'>

                <img className='leaf' alt='profile dp' src='./images/monkey.png'/>
                <h1 className='atlas'>Atlas</h1>
                <div 
                    className='mahela'
                    >
                    <div className='rece'>
                        <FontAwesomeIcon icon={faReceipt} className='max' />
                        <FontAwesomeIcon icon={faReceipt} className='min' />
                    </div>
                    <h3>mahelaPedia...</h3>
                    <FontAwesomeIcon icon={faSortDown} className='down' />
                </div>
                <FontAwesomeIcon icon={faGear} className='gear'/>


                <div className='access'>
                    <h4>Access Manager</h4>
                    <FontAwesomeIcon icon={faSortDown}  className='down'/>
                </div>
                <h4 className='billing'>Billing</h4>

              </div>

              <div className='right'>
                <h4>All Clusters</h4>
                <div>
                    <h4>Get Help</h4>
                    <FontAwesomeIcon icon={faSortDown}  className='down' />
                </div>
                <div className='account'>
                    <h4>mahelaPedia</h4>
                    <FontAwesomeIcon icon={faSortDown} className='down'  />
                </div>
              </div>
            
            </div>

            <div className='lower'>
                <div className='left'>
                    <div  
                     className='project'
                     onClick={() => setShow(!show)}
                     >
                            <FontAwesomeIcon icon={faPerson} className='person' />
                            <h4>Borrowers 0</h4>  
                            <FontAwesomeIcon icon={faSortDown} className='down'  />          
                    </div>


                    <div  
                            className='borrower-drop'
                            style={ show ? { 
                                width: "200px",
                                height: "260px",
                                opacity: "1"
                            } : null }
                            >
                            <div className='search-box'>
                                <FontAwesomeIcon icon={faSearch} className='search' />
                                <input placeholder='search...'/>
                            </div>
{/* 
                            { borrowers.map((borrower) => {
                                const { first, last } = borrower;

                                return (
                                    <div 
                                       className='za-chini'
                                       >
                                        <h3>{first} {last}</h3>
                                    </div>
                                )
                            })} */}

                    </div>

                    <FontAwesomeIcon icon={faEllipsisVertical} className='ellipsis' />

                    <div className='data'>
                        <h4>Data Services</h4>
                        <h4>App Services</h4>
                        <h4>Charts</h4>
                    </div>
                
                </div>

                <div className='right'>
                    <FontAwesomeIcon icon={faUserPlus} className='plus' />
                    {/* <FontAwesomeIcon icon={faFolderPlus}  className='plus' /> */}
                    <FontAwesomeIcon icon={faCalendarPlus}  className='plus' />
                    {/* <FontAwesomeIcon icon={faSquarePlus}  className='plus' /> */}
                    <FontAwesomeIcon icon={faBell}  className='plus' />
                </div>

              
            </div>
        </nav>
    )
}

export default Navbar;