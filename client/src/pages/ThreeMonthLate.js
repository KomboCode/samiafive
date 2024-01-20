import { useContext } from "react";
import { BorrowersContext } from "../contexts/BorrowersContext";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faPen } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';




const ThreeMonthLate = () => {    


    const { borrowers } = useContext(BorrowersContext);
    // var today = moment().format("YY-MM-DD");
    var date = new Date();

    var dv = new Date();
    dv.setDate(dv.getDate() + 5);
    var blist = [];


    borrowers.forEach((borrower) => {

        var d = new Date(borrower.release);
        d.setDate(d.getDate() + borrower.duration);

        // var maturity = moment(borrower.release).add(borrower.duration, "day").format("DD/MM/YYYY");
        var bure = moment(date).isAfter(d);

        if ( bure === true ) {
            blist.push(borrower);
        }

                 
    })


    return (
        <div className="missed-repayments past-maturity">

            <div>
                    <h1 className="head">3 Month Late Loans <span>Help</span></h1>
                    <p className="phrase">This shows loans overdue by 90 days or more.
                    This is calculated from the loan schedule for laons that are Missed Repayment,
                    Arrears, or Past Maturity. We look at the last loan schedule date 
                    where the balance was 0 and then calculate the number of days between that schedule date
                    and today</p>
                        <h4 className="click">Advanced Search: <span>Click here to Show</span></h4>
                        <div className="jeans">
                            <h4>Overdue By</h4>
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

                            <div className="view-past">

                                <div>
                                    <h4>View</h4>
                                    <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                                </div>

                                
                                <div className="name">
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

                            <div>
                                
                                { borrowers.map((borrower) => {
                                    const { first, last, principal, repayments, 
                                    interest, unique, release, number,
                                     duration, id } = borrower;
                                            
                                    var d = new Date(release);
                                    d.setDate(d.getDate() + duration);
                                    var bure = moment(date).isAfter(d);


                                    var timeD = Math.abs(d - date );
                                    const days = Math.ceil(timeD / (1000 * 60 * 60 * 24 ));


                                    var pSum = 0;

                                    repayments.forEach((pay) => {
                                        const { amount } = pay;
                                        pSum = (parseInt(amount)) + pSum;
                                    })

                                    var amo = ((interest * principal/100)/ number) + (principal/number);


                                    if ( bure === true && days > 90 ) {

                                        return (
                                            <div 
                                            key={id}
                                            className="matu-data"
                                            >   
                                                <div>
                                                    <FontAwesomeIcon icon={faPen} className='edit'/>
                                                    <FontAwesomeIcon icon={faCommentDots} className='dots'/>
                                                </div>
                                                <h4 className="namep">{first} {last}</h4>
                                                <h4>{unique}</h4>
                                                <h4>{principal}</h4>
                                                <h4>{(interest * principal/100) + parseInt(principal)}</h4>
                                                <h4>{pSum}</h4>
                                                <h4>{((interest * principal/100) + parseInt(principal)) - pSum}</h4>
                                                <h4>{amo}</h4>
                                                <h4>{((interest * principal/100) + parseInt(principal)) - pSum}</h4>
                                                <h4>{days}</h4>
                                                <h4>{pSum}</h4>
                                                <h4 className="pm">Past Maturity</h4>
                                            </div>
                                    )
                                    } 
                                    
                                })}
                                
                            </div>

                            {
                                blist.length === 0 ?
                                <div>
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
                                 : null
                            }
                          
                          
                        </div>

                    </div>
        

        </div>
    )
}

export default ThreeMonthLate;

