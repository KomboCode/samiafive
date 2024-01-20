import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BorrowersContext } from '../contexts/BorrowersContext';
import Repayment from '../components/child components/Repayments';
import LoanTerm from '../components/child components/LoanTerms';
import LoanSchedule from '../components/child components/LoanSchedule';
import moment from 'moment';
import PendingDues from '../components/child components/PendingDues';
import PenaltySetting from '../components/child components/PenaltySettings';
import LoanCollateral from '../components/child components/LoanCollateral';
import Expenses from '../components/child components/Expenses';
import OtherIncome from '../components/child components/OtherIncome';
import LoanFiles from '../components/child components/LoanFiles';
import LoanComments from '../components/child components/LoanComments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
 

const SingleLoan = () => {

    const navigate = useNavigate();

    const { person, lsuccess, addKopa } = useContext(BorrowersContext);    

    const [ repay, setRepay ] = useState(true);
    const [ terms, setTerms ] = useState(false);
    const [ schedule, setSchedule ] = useState(false);
    const [ dues, setDues ] = useState(false);
    const [ penalty, setPenalty ] = useState(false);
    const [ collateral, setCollateral ] = useState(false);
    const [ expenses, setExpenses ] = useState(false);
    const [ income, setIncome ] = useState(false);
    const [ files, setFiles ] = useState(false);
    const [ comments, setComments ] = useState(false);
    const [ spread, setSpread ] = useState(false);
    
    const {  first, last, mobile, unique,
        city, birth, work, zipcode, state,
     address,  
    
      principal, release, interest, duration
    } = person;

    var day = moment(release).add(duration, "day").format("DD/MM/YYYY");

    const handleKopa = (value1, value2) => {
        navigate("/addloan");
        addKopa(value1, value2);
    }

    const handleSpread = () => {
        if ( principal === "") {
            navigate("/addloan");
        } else {
            setSpread(!spread);
        }
    }


    const handleNavigate = (value) => {

        if ( value === "repay") {
            setTerms(false);
            setRepay(true);   
            setSchedule(false);
            setDues(false);
            setPenalty(false);
            setCollateral(false);
            setExpenses(false);
            setIncome(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "terms") {
            setTerms(true);
            setRepay(false);
            setSchedule(false);
            setDues(false);
            setPenalty(false);
            setCollateral(false);
            setExpenses(false);
            setIncome(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "schedule") {
            setTerms(false);
            setRepay(false);
            setDues(false);
            setSchedule(true);
            setPenalty(false);
            setCollateral(false);
            setExpenses(false);
            setIncome(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "dues") {
            setDues(true);
            setTerms(false);
            setRepay(false);
            setSchedule(false);
            setPenalty(false);
            setCollateral(false);
            setExpenses(false);
            setIncome(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "penalty") {
            setPenalty(true);
            setDues(false);
            setTerms(false);
            setRepay(false);
            setSchedule(false);
            setCollateral(false);
            setExpenses(false);
            setIncome(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "collateral") {
            setCollateral(true);
            setPenalty(false);
            setDues(false);
            setTerms(false);
            setRepay(false);
            setSchedule(false);
            setExpenses(false);
            setIncome(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "expenses") {
            setExpenses(true);
            setCollateral(false);
            setPenalty(false);
            setDues(false);
            setTerms(false);
            setRepay(false);
            setSchedule(false);
            setIncome(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "income" ) {
            setIncome(true);
            setExpenses(false);
            setCollateral(false);
            setPenalty(false);
            setDues(false);
            setTerms(false);
            setRepay(false);
            setSchedule(false);
            setFiles(false);
            setComments(false);
        } else if ( value === "files" ) {
            setFiles(true);
            setIncome(false);
            setExpenses(false);
            setCollateral(false);
            setPenalty(false);
            setDues(false);
            setTerms(false);
            setRepay(false);
            setSchedule(false);
            setComments(false);
        } else if ( value === "comments") {
            setComments(true);
            setFiles(false);
            setIncome(false);
            setExpenses(false);
            setCollateral(false);
            setPenalty(false);
            setDues(false);
            setTerms(false);
            setRepay(false);
            setSchedule(false);
        }

    }

    return (
        <section className='view-detail single-loan'>
           <h1>View Loan Details</h1>

           <div  
              className='loan-added'
              style={ lsuccess ? { 
                display: "flex"
               } : null }
              >
              <FontAwesomeIcon icon={faCheck} className='tik'/>
              <h4>Loan has been added.</h4>
           </div>  
           <div className='person'>
                <div className='add-loans'>
                    <div className='f-pic'>
                    <div className='photo'>
                            <img alt='profile dumbell' src='./images/dp.png'/>
                        </div>

                        <div className='name'>
                            <h3>{first} {last}</h3>
                            <h5>{unique}</h5>
                        </div>
                    </div>
                      

                        <div className='add-view'>
                        <div 
                           className='add'
                           onClick={() => handleKopa(first, last)}
                           >
                            <h4>Add Loan</h4>
                        </div>

                        <div className='view'>
                            <h4>View All Loans</h4>
                        </div>
                        </div>

                        <div className='state'>
                            <h4>Borrower Loans Statement</h4>
                            {/* <RiArrowDownSFill className='icon'/> */}
                        </div>
                    </div>

                    <div className='edit'>
                            <div className='delete'>
                                <div>
                                    <h4>Edit</h4>
                                    <h4> | </h4>
                                    <h4>Delete</h4>
                                </div>
                                <h4>Move Borrower to Another Branch</h4>
                                <p>Create Date: 07/09/2023</p>
                                <p>{work}</p>
                                <p>{birth}</p>

                            </div>

                            <div className='middle'>
                                <h4>Address: <span>{address}</span></h4>
                                <h4>City: <span>{city}</span></h4>
                                <h4>Province: <span>{state}</span></h4>
                                <h4>Zipcode: <span>{zipcode}</span></h4>
                            </div>

                            <div className='sms'>
                                <h4>Mobile: <span>{mobile}</span></h4>
                                <div>Send SMS</div>
                            </div>
                        </div>

                        <div className='show'>
                            <div>+ Show More</div>
                        </div>
           </div>

           <div className='rest'>Add/Edit Restriction on Borrower</div>

           <div  
             className='info'
             style = { principal === "" ?
               {
                display: "none"
               } 
             : null }
             >
             <div 
                 className='header'
                 >
                <h4>View</h4>
                <h4>Loan#</h4>
                <h4>Released</h4>
                <h4>Maturity</h4>
                <h4>Principal</h4>
                <h4>Interest Rate</h4>
                <h4>Interest</h4>
                <h4>Fees</h4>
                <h4>Penalty</h4>
                <h4>Due</h4>
                <h4>Paid</h4>
                <h4>Balance</h4>
                <h4>Status</h4>
             </div>

             <div className='data'>
                <div className='edicon'>
                    {/* <MdModeEditOutline 
                      className='edita'
                      /> */}
                      <FontAwesomeIcon 
                         icon={faPen} 
                         className='edita'
                        onClick={handleSpread}
                         />
                    {/* <BsChatText className='chat'/> */}
                    <FontAwesomeIcon icon={faCommentDots} className='edita'/>

                </div>
                <h4 className='uniq'>{unique}</h4>
                <h4 className='release'>{release}</h4>
                <h4 className='day'>{day}</h4>
                <h4 className='principal'>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                <h4 className='interes'>{interest}%/Month</h4>
                <h4 className='interest'>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                <h4 className='fees'>0</h4>
                <h4 className='penalty'>0</h4>
                <h4 className='dur'>0</h4>
                <h4 className='paid'>{Intl.NumberFormat("en-US").format( interest * principal/100 + parseInt(principal))}.00</h4>
                <h4 className='balance'>{Intl.NumberFormat("en-US").format( interest * principal/100 + parseInt(principal))}.00</h4>
                <div className='current'>Current</div>
             </div>

             <div className='over'>
                <h5>Overide</h5>
                <h5 className='adjust'>Adjust in middle</h5>
                <h5 className='overide'>Overide</h5>
                <h5 className='make'>Make it zero</h5>
             </div>
           </div>

        { spread ? 


            <div className='down-info'>         
                <div className='black'>
                        <div 
                           onClick={() => handleNavigate("repay")}
                           style={ repay ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                           >
                            Repayments
                        </div>

                        <div   
                           onClick={() => handleNavigate("terms")}
                           style={ terms ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                           >
                            Loan Terms
                        </div>

                        <div  
                            onClick={() => handleNavigate("schedule")}
                            style={ schedule ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                            >
                            Loan Schedule
                        </div>
                        <div
                            onClick={() => handleNavigate("dues")}
                            style={ dues ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                        >
                            Pending Dues
                        </div>

                        <div
                          onClick={() => handleNavigate("penalty")}
                            style={ penalty ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                        >
                            Penalty Settings
                        </div>

                        
                        <div
                          onClick={() => handleNavigate("collateral")}
                            style={ collateral ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                        >
                            Loan Collateral
                        </div>
                        
                        <div
                            onClick={() => handleNavigate("expenses")}
                            style={ expenses ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                        >
                            Expenses
                        </div>
                        
                        <div
                          onClick={() => handleNavigate("income")}
                            style={ income ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                        >
                            Other Income
                        </div>
                        
                        
                        <div
                          onClick={() => handleNavigate("files")}
                            style={ files ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                        >
                            Loan Files
                        </div>

                        
                        
                        <div
                          onClick={() => handleNavigate("comments")}
                            style={ comments ? {
                            background: "#ffff",
                            color: "black"
                           } : null }
                        >
                            Loan Comments
                        </div>
                </div>

                <div className='content'>

                   
                    { repay ? <Repayment
                        person={person}
                    /> : null} 

                    { terms ? <LoanTerm
                        person={person}
                    /> : null}
                    { schedule ? <LoanSchedule
                        person={person}
                    /> : null }

                    { dues ? <PendingDues
                        person={person}
                    /> : null }

                    { penalty ? <PenaltySetting/> : null }

                    { collateral ? <LoanCollateral/> : null }

                    { expenses ? <Expenses/> : null }

                    { income ? <OtherIncome/> : null }

                    { files ? <LoanFiles/> : null }

                    { comments ? <LoanComments/> : null }


                </div>
        
           </div>


        : null}


        </section>
    )
}

export default SingleLoan;