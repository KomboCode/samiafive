import { useContext } from "react";
import { BorrowersContext } from "../contexts/BorrowersContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';


const MissedRepayments = () => {

    const { borrowers } = useContext(BorrowersContext);

    borrowers.forEach((borrower) => {
       if ( borrower.repayments.length === 0 ) {
        console.log(borrower);
       }
    })



    return (
        <div className="missed-repayments">
           <h1>Missed Repayments</h1>
           <p className="phrase">Loans that are overdue and have not received any payment
           for the last collection date. If you enter a part-payment for the 
           last collection date for a loan, it will be marked as <span>Arrears</span>
            status instead.</p>
            <h4 className="click">Advanced Search: <span>Click here to Show</span></h4>
            <div className="jeans">
                <h4>Days between today and last installment that was 
                not partly paid</h4>
                <select>
                    <option>1 day</option>
                    <option>5 day</option>
                    <option>1 week</option>
                    <option>1 Month</option>
                </select>

                <div>
                    <button>Search</button>
                    <button>Reset</button>
                </div>
            </div>

            <div className="export">
                <h4>Export Data</h4>
                <h4>Show/Hide Columns</h4>
            </div>

            <div className="big-data">
                <div className="sort">
                    <input placeholder="Search loans"/>
                    <div className="show">
                        <h4>Show</h4>
                        <div>
                            <h5>20</h5>
                            <FontAwesomeIcon icon={faAngleDown} className="icon"/>
                        </div>
                        <h4>entries</h4>
                    </div>
                </div>

                <div className="view">

                    <div>
                        <h4>View</h4>
                        <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    </div>

                    
                    <div>
                        <h4>Name</h4>
                        <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    </div>

                    
                    <div>
                        <h4>Loan#</h4>
                        <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    </div>

                    
                    <div>
                        <h4>Principal</h4>
                        <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    </div>

                    
                    <div>
                        <h4>Due</h4>
                        <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    </div>

                    <div>
                        <h4>Paid</h4>
                        <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    </div>

                    <h4>PastDue</h4>
                    <h4>Amortization</h4>
                    <h4>PendingDue</h4>
                    <h4>DaysPast</h4>
                    <h4>Last Payment</h4>
                    <h4>Status</h4>

                </div>

                <p>No data found. No loan found</p>

                <div className="view zero">
                    <h4>0.00</h4>
                    <h4>0.00</h4>
                    <h4>0.00</h4>
                    <h4>0.00</h4>
                    <h4>0.00</h4>
                    <h4>0.00</h4>
                </div>
            </div>

        </div>
    )
}

export default MissedRepayments;