import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPen } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';



const NooRepayments = () => {

    const { borrowers } = useContext(BorrowersContext);
    console.log(borrowers);

    var myList = [];

    for (var a = 0; a < borrowers.length; a++ ) {
        myList.push(borrowers[a].number);
        var myObj = {
            one: borrowers[a].number,
            two: borrowers[a].release,
            three: borrowers[a].principal,
            four: borrowers[a].unique,
            five: borrowers[a].due,
            six: borrowers[a].repayments,
            seven: borrowers[a].first,
            eight: borrowers[a].last,
            nine: borrowers[a].duration,
            ten: borrowers[a].interest
        }
        myList.push(myObj);
    }


    return (
        <section className="due-laons no-repayments">
            <h1>No Repayments</h1>
            <p className="phrase">Loans that have not received any payments 
            since the start of the loan. You can also search for no payments
            made in the dates selected below</p>

            <div className="range">
                <h2>Date Range</h2>
                <div className="date">
                    <input placeholder='From Date' type="date"/>
                    <h4>to</h4>
                    <input placeholder='To Date' type="date"/>
                </div>

                <div className="date twoo">
                    <input placeholder='All Loans Status' type="text"/>
                    <input placeholder='All Loan Officers' type="text"/>
                </div>
             

                <div className="search">
                    <button>Search!</button>
                    <button>Reset!</button>
                </div>
            </div>

            <div className="export">
                <button>Export Data</button>
                <button>Show/Hide Columns</button>
            </div>

            <div className="view">
                <div className="show">
                    <input placeholder="Search loans"/>
                    <div className="entries">
                        <h4>Show</h4>
                        <div>
                            <h5>20</h5>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <h4>entries</h4>
                    </div>
                </div>

                <div className='bigdata'>
                  
                  {/* <div className='dingi'></div> */}

                  <div className='dingi'>
                    <h3>View</h3>
                    <h3 className='name'>Name</h3>
                    <h3>Loan#</h3>
                    <h3>Principal</h3>
                    <h3>Due</h3>
                    <h3>Paid</h3>
                    <h3>PastDue</h3>
                    <h3>Amortization</h3>
                    <h3>PendingDue</h3>
                    <h3>Status</h3>
                    
                    </div>
            

                  { borrowers.map((borrower) => {
                    
                    const {
                        first,
                        last,
                        principal,
                        unique,
                        interest,
                        repayments
                    } = borrower;

                    var inte = interest * principal/100;

                    var due = inte + parseInt(principal);

                    var ukwaju = 0;

                    if ( repayments === null  ) {

                    } else {
                        repayments.forEach((repay) => {
                            ukwaju = ukwaju + repay.amount
                        })
                    }
                    

                    console.log("NooooRepayment", due);
                    if ( borrower.repayments.length === 0 ) {
                            
                        return (
                            <div className='grid'>
                                <div>
                                    <FontAwesomeIcon icon={faPen} className='edit'/>
                                    <FontAwesomeIcon icon={faCommentDots} className='dots'/>
                                </div>
                                <h3 className='name'>{first} {last}</h3>
                                <h3>{unique}</h3>
                                <h3>{principal}</h3>
                                <h3>{due}</h3>
                                <h3>{ukwaju}</h3>
                                <h3>0</h3>
                                <h3>0</h3>
                                <h3>0</h3>
                                <h3 className='current'>Current</h3>
                            </div>
                        )

                    }

                  })}
                  
                </div>
        

            </div>

        </section>
    )
}

export default NooRepayments;