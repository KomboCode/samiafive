import React, { useContext } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';


const ViewDetail = () => {

    const { person, lsuccess } = useContext(BorrowersContext);
    
    const { first, last, mobile, unique,
        city, zipcode, 
    
      principal, release,  interest
    
    } = person;

    return (
        <section className='view-detail'>
           <h1>View Loan Details</h1>

           <div  
              className='loan-added'
              style={ lsuccess ? { 
                display: "flex"
               } : null }
              >
              <h4>Loan has been added.</h4>
           </div>  
           <div className='person'>
                <div className='add-loans'>
                        <div className='photo'>
                            <img alt='profile ring' src='./images/dp.png'/>
                        </div>

                        <div className='name'>
                            <h3>{first} {last}</h3>
                            <h5>{unique}</h5>
                        </div>

                        <div className='add-view'>
                        <div className='add'>
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
                            </div>

                            <div className='middle'>
                                <h4>City: <span>{city}</span></h4>
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

           <div className='info'>
             <div className='header'>
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
                <h4>{unique}</h4>
                <h4>{release}</h4>
                <h4>{release}</h4>
                <h4>{principal}.00</h4>
                <h4>{interest}/Month</h4>
                <h4 className='interest'>{
                    interest * principal/100
                }.00</h4>
                <h4 className='fees'>0</h4>
                <h4 className='penalty'>0</h4>
                <h4>0</h4>
                <h4 className='balance'>{
                    interest * principal/100 + parseInt(principal)
                }.00</h4>
                <h4 className='balance'>{
                    interest * principal/100 + parseInt(principal)
                }.00</h4>
                <div className='current'>Current</div>
             </div>

             <div className='over'>
                <h5>Overide</h5>
                <h5 className='adjust'>Adjust in middle</h5>
                <h5 className='overide'>Overide</h5>
                <h5 className='make'>Make it zero</h5>
             </div>
           </div>
        

        </section>
    )
}

export default ViewDetail;