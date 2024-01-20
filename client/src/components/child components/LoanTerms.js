import React from 'react';
// import { RiArrowDownSFill } from 'react-icons/ri';


const LoanTerms = ({ person }) => {

    
    const { unique,
     principal, release, number, cycle, duration, method,
         disbursed, product, interest 
    } = person;


    return (
        <div className='loan-terms'>
            <div className='buttons'>
                <div className='state'>
                   <h4>Loan Statement</h4>
                   {/* <RiArrowDownSFill/> */}
                </div>

                <div className='app'>
                    <h4>Loan Applications/Agreements</h4>
                </div>

                <div className='restr'>
                   <h4>Restructure Loan on</h4>
                   {/* <RiArrowDownSFill/> */}
                </div>

                <div className='edit-loan'>Edit Loan</div>
                <div className='delete'>Delete Loan</div>

            </div>

            <div className='chini'>
                <div>
                    <h4>Loan Status</h4>
                    <h4>Due Today</h4>
                </div>

                <div>
                    <h4>Loan Application ID</h4>
                    <h4>{unique}</h4>
                </div>

                <div>
                    <h4>Loan Product</h4>
                    <h4>{product}</h4>
                </div>

                <div>
                    <h4>Loan Remember</h4>
                    <h4>None</h4>
                </div>
            </div>

            <div className='bg'>Loan Terms</div>

            <div className='chini'>
                <div>
                    <h4>Disbursed By</h4>
                    <h4>{disbursed}</h4>
                </div>

                <div>
                    <h4>Principal Amount</h4>
                    <h4>TZS {principal}</h4>
                </div>

                <div>
                    <h4>Loan Release Date</h4>
                    <h4>{release}</h4>
                </div>

                <div>
                    <h4>Loan Interest Method</h4>
                    <h4>{method}</h4>
                </div>


                <div>
                    <h4>Loan Interest</h4>
                    <h4>{interest}%Loan(Nominal APR:0%)</h4>
                </div>

                
                <div>
                    <h4>Loan Duration</h4>
                    <h4>{duration} Days</h4>
                </div>

                
                <div>
                    <h4>Repayment Cycle</h4>
                    <h4>{cycle}</h4>
                </div>

                
                <div>
                    <h4>Number of Repayment</h4>
                    <h4>{number}</h4>
                </div>

                
                <div>
                    <h4>Decimal Places</h4>
                    <h4>Round Off to 2 Decimal Places</h4>
                </div>

                
                <div>
                    <h4>Interest Start Date</h4>
                    <h4>{release}</h4>
                </div>

                
                <div>
                    <h4>Interest Schedule</h4>
                    <h4>Include interest normally as per interest Method</h4>
                </div>

                
                <div>
                    <h4>Principal Schedule</h4>
                    <h4>Include principal normally as per interest Method</h4>
                </div>    

            </div>

            <div className='bg'>Automatic Payments</div>

            <div className='chini'>
                <div>
                    <h4>Automatic Payments</h4>
                    <h4>Yes</h4>
                </div>

                <div>
                    <h4>Posting Period</h4>
                    <h4>04.01pm - 08.00pm</h4>
                </div>

                <div>
                    <h4>Cash/Bank</h4>
                    <h4>Cash</h4>
                </div>

            </div>

            <div className='bg'>Description</div>
            <p className='none'>None</p>
            <div className='bg'>Accounting</div>

            <div className='chini'>
                <div>
                    <h4>Source of Principal Amount</h4>
                    <h4>Cash</h4>
                </div>

            </div>

            <div className='bg'>Loan Status History</div>

            
            <div className='chini'>
                <div>
                    <h4>Open</h4>
                    <h4>{release} 12:00 AM</h4>
                </div>

            </div>



            

        </div>
    )
}

export default LoanTerms;