import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { BorrowersContext } from '../../contexts/BorrowersContext';
import Updue from './updue';


const DueLoans = () => {

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
        <section className="due-laons">
            <h1>Due Loans</h1>
            <p className="phrase">Open loans tha have due schedule dates between selected dates.
            You can use this page to see loans due today.</p>

            <div className="range">
                <h2>Date Range</h2>
                <div className="date">
                    <input type="date"/>
                    <h4>to</h4>
                    <input type="date"/>
                </div>
                <div className="check">
                    <input type="checkbox" />
                    <p>Include due laons with zero pending due amounts</p>
                </div>

                <div className="check">
                    <input type="checkbox" />
                    <p>Include loans where system generated penalty is added between the above dates</p>
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
                    <h3>NextDue</h3>
                    <h3>Last Payment</h3>
                    <h3>Status</h3>
                    
                    </div>
            

                  { myList.map((item) => {
                    return (
                        <Updue item={item}/>
                    )
                  })}
                  
                </div>
        

            </div>

        </section>
    )
}

export default DueLoans;