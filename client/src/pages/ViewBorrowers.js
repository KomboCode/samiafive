import React, { useContext } from 'react';
import Cookies from "js-cookie";
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';


const ViewBorrowers = () => {

    const navigate = useNavigate();

    const { 
             borrowers, 
             handlePerson,
             handleDelete, 
             bsuccess,
             handleMorant
             } = useContext(BorrowersContext);


    const handleSavings = (value) => {
        navigate("/viewdetail");
        handlePerson(value);
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }

    
    const handleLoan = (value) => {
        navigate("/singleloan");
        handlePerson(value);
        Cookies.set("morant", JSON.stringify(value));
        handleMorant(value);
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }

    return (
        <section className='view-borrowers'>
           <h1>View Borrowers<span>Help</span></h1>
           <div 
              className='borrower-added'
              style={ bsuccess ? {
                display: "flex"
              } : null }
              >
              {/* <TiTick className='icon'/> */}
              <FontAwesomeIcon icon={faCheck} className='icon'/>
              <h4>Borrower has been updated</h4>
           </div>  
           <div className='yellow'>
            <h4>Advanced Search: <span>Click here to show</span></h4>
           </div>
           <div className='export'>
            <div className='first'>
                <h4>Export Data for this page</h4>
            </div>
            <div className='two'>
                <div><h4>Export Data for all pages</h4></div>
                <div><h4>Show/Hide Columns</h4></div>
            </div>
           </div>
           <div className='people'>
            <div className='filter'>
                <input placeholder='Search borrowers'/>
                <div className='show'>
                    <h4>Show</h4>
                    <div>
                        <h5>20</h5>
                        {/* <MdKeyboardArrowDown/> */}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <h4>entries</h4>
                </div>
            </div>

            <div className='view'>
                <h4>View</h4>

                <div className='full-name'>
                    {/* <LuArrowDownWideNarrow className='icon'/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    <h4>Full Name</h4>
                </div>

                
                <div className='business'>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Business</h4>
                </div>

                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Unique#</h4>
                </div>

                
                <div>
                    {/* <IoIosText/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Mobile</h4>
                </div>

                
                <div>
                    {/* <BsChatText/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Email</h4>
                </div>

                
                
                <div>
                    {/* <LuSettings2/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Total Paid</h4>
                </div>

                
                <div>
                    {/* <LuSettings2/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Open Loans Balance</h4>
                </div>

                
                
                <div>
                    {/* <LuSettings2/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Status</h4>
                </div>

                
                
                <div className='action'>
                    <h4>Actions</h4>
                </div>

            </div>

            <div 
               className='no-found'
               style={ borrowers.length !== 0 ? {
                display: "none"
               } : null }
               >
                <div className='no-data'>
                    <h4>No data found </h4>
                    <Link to="/addborrower"> Click here to Add Borrower</Link>
                </div>
                <div className='silver'>
                    <div>
                        <h4>0.00</h4>
                        <h4>0.00</h4>
                    </div>
                </div>

                <h4 className='showing'>Showing 0 to 0 of 0 entries</h4>
            </div>


            { borrowers.map((borrower) => {
                const { first, last, mobile, unique, id } = borrower;
                return (
                    <div className='person' key={id}>
                        <div className='saving'>
                            <div 
                               className='loan green'
                               onClick={() =>handleLoan(borrower)}
                               >Loans</div>
                            <div 
                               className='loan blue'
                               onClick={() =>handleSavings(borrower)}

                               >Savings</div>
                        </div>

                        <h4 className='first-name'>{first} {last}</h4>
                        <h4 className='unique'>{unique}</h4>
                        <h4 className='mobile'>{mobile}</h4>
                        <h4 className='total'>0</h4>
                        <h4 className='open'>650,000.00</h4>
                        <h4 className='maturity'>Past Maturity</h4>
                        <div className='edit'>
                            <div>
                                {/* <MdModeEditOutline className="icon"/> */}
                                <FontAwesomeIcon icon={faPen} className='icon'/>
                            </div>
                            <div>
                              
                                <FontAwesomeIcon 
                                   icon={faXmark} 
                                   className='icon'
                                   onClick={() => handleDelete(id)}
                                   />

                            </div>
                        </div>

                    </div>
                )
            }).reverse()}

           </div>
        </section>
    )
}

export default ViewBorrowers;