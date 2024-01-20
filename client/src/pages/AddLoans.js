import React, { useState, useContext, useEffect} from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { Link, useNavigate } from 'react-router-dom';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AddLoan = () => {

    const navigate = useNavigate();


    const { 
           handleAddLoan, 
           suggest, 
           handleSuggest,
           handleDetails,
           loanSuccess,
           kopa
        } = useContext(BorrowersContext);

        
    useEffect(() => {
        setName(kopa.name1 + " " + kopa.name2);
        setFirst(kopa.name1);
    }, [kopa.name1, kopa.name2]);

    const [ name, setName ] = useState("Choose Borrower or Search by name");
    const [ show, setShow ] = useState(false);
    const [ guarant, setGuarant ] = useState(false);


    // Contraints za add loan 

    const [ product, setProduct ] = useState("Business Loan");
    const [ loan, setLoan ] = useState("");
    const [ interest, setInterest ] = useState("");
    const [ disbursed, setDisbursed ] = useState("Cash");
    const [ principal, setPrincipal ] = useState("");
    const [ release, setRelease ] = useState("");
    const [ method, setMethod ] = useState("Flat rate");
    const [ type, setType ] = useState("Percentage % Based Interest");
    const [ perday, setPerday ] = useState("");
    const [ duration, setDuration ] = useState(1);
    const [ dutime, setDutime ] = useState("");
    const [ cycle, setCycle ] = useState("");
    const [ number, setNumber ] = useState(1);
    const [ status, setStatus ] = useState("");
    const [ loanTitle, setLoanTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ first, setFirst ] = useState("");
    const [ cash, setCash ] = useState("Cash");

    
    const handleName = (one, two) => {
        setFirst(one);
        setName((name) => {
            const newName = one + " " + two;
            return newName;
        })
        setShow(!show);
    }



    // console.log(product);

    const person = { loan, principal, release, first, desc, 
    loanTitle, status, number, cycle, duration, dutime, perday, method,
    type, disbursed, product, cash, interest };


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(borrower);
        handleAddLoan(person);
        handleDetails(first);
        navigate("/singleloan")
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
        
        setTimeout(() => {
            document.location.reload();            
        }, 100 );
        loanSuccess();
    }


    const handleCycle = (value) => {

        var days = 0;
        setCycle(value);

        if ( dutime === "Days") {
             days = duration * 1;
        } else if ( dutime === "Weeks") {
            days = duration * 7;
        } else if ( dutime === "Months") {
            days = duration * 30
        } else if ( dutime === "Years") {
            days = duration * 360;
        }

        console.log("Number of days", days);

        var numPay = 0;

        if ( value === "Daily") {
            setNumber((number) => {
                numPay = days / 1;
                return numPay;
            })
        }


        
        if ( value === "Weekly") {
            setNumber((number) => {
                numPay = days / 7;
                return numPay;
            })
        }

        
        if ( value === "Biweekly") {
            setNumber((number) => {
                numPay = days / 14;
                return numPay;
            })
        }

        
        if ( value === "Monthly") {
            setNumber((number) => {
                numPay = days / 30;
                return numPay;
            })
        }

        
        if ( value === "Bimonthly") {
            setNumber((number) => {
                numPay = days / 60;
                return numPay;
            })
        }


        
        if ( value === "Quarterly") {
            setNumber((number) => {
                numPay = days / 90;
                return numPay;
            })
        }

        
        
        if ( value === "Every 4 Months") {
            setNumber((number) => {
                numPay = days / 120;
                return numPay;
            })
        }

        
        
        if ( value === "Semi-Annual") {
            setNumber((number) => {
                numPay = days / 120;
                return numPay;
            })
        }

        
        
        if ( value === "Semi-Annual") {
            setNumber((number) => {
                numPay = days / 180;
                return numPay;
            })
        }

        
        if ( value === "Every 9 Months") {
            setNumber((number) => {
                numPay = days / 270;
                return numPay;
            })
        }

        
        if ( value === "Yearly") {
            setNumber((number) => {
                numPay = days / 360;
                return numPay;
            })
        }





    }

    return (
        <section 
           className='addBorrower add-loan'
           >
            <h1>Add Loan<span>Help</span></h1>
            <form 
              onSubmit={handleSubmit}
            //   onClick={() => setShow(false)}
            >
                {/* <div className='box'>
                    <h4>Required Fields:</h4>
                </div> */}
             
        
                <div className='field country'>
                    <label>Loan Product</label>
                    <select onChange={(e) => setProduct(e.target.value)}>
                        <option>Business Loan</option>
                        <option>Overseas Worker Loan</option>
                        <option>Pensioner Loan</option>
                        <option>Personal Loan</option>
                        <option>Student Loan</option>
                    </select>
                </div>
                
                <div 
                   className='field country'
                   onClick={() => setShow(!show)}
                   >
                    <div className='parallel'>
                        <label>Borrower</label>
                        <div>
                           <h4>
                            {name}
                           </h4>
                        </div>
                    </div>
                    {/* <RiArrowDownSFill className='down'/> */}
                    <FontAwesomeIcon icon={faSortDown} className='down' />
                </div>

                <div 
                   className='borrowers'
                   style={ show ? {
                    display: "block"
                   } : null}
                   >
                
                <input  
                        placeholder=''
                        onChange={(e) => handleSuggest(e.target.value)}
                        />
                   { suggest.map((item) => {
                    const { first, last, id  } = item;
                    return (
                        <div key={id}>
                            <h4  
                               className='suggest'
                               onClick={() =>handleName(first, last) }
                               >{first} {last}</h4>
                        </div>
                    )
                   }) }
                </div>

                <div className='field country'>
                    <label>Loan#</label>
                    <input  
                        value={loan}
                        placeholder='1000075'
                        onChange={(e) => setLoan(e.target.value)}
                        />
                </div>
                
              
              
              
                <div className='box'>
                    <h4>Loan Terms (required fields):</h4>
                </div>




                <p className='red'>Principal:</p>



                <div className='field country'>
                    <label>Disbursed by</label>
                    <select
                      onChange = { (e) => setDisbursed(e.target.value)} 
                    >
                        <option>Cash</option>
                        <option>Cheque</option>
                        <option>Wire Transfer</option>
                        <option>Online Transfer</option>
                    </select>
                </div>

                <div className='field'>
                    <label>Principal Amount</label>
                    <input 
                      type='number'
                      placeholder='Principal Amount'
                      onChange={(e) => setPrincipal(e.target.value)}
                      />
                </div>

                <div className='field'>
                    <label>Loan Release Date</label>
                    <input 
                    type='date'
                    placeholder='dd/mm/yy'
                    onChange={(e) => setRelease(e.target.value)}
                    />
                </div>

                <p className='red'>Interest:</p>



                <div className='field country'>
                    <label>Interest Method</label>
                    <select 
                      onChange={ (e) => setMethod(e.target.value) }
                    >
                        <option>Flat rate</option>
                        {/* <option>Reducing Balance-Equal Installments</option> */}
                        {/* <option>Reducing Balance-Equal Principal</option> */}
                        {/* <option>Interest-Only</option> */}
                        {/* <option>Compound Interest</option> */}
                    </select>
                </div>

                

                <div className='field select'>
                    <label>Interest Type</label>
                    <select 
                      onChange={ (e) => setType(e.target.value)}
                    >
                        <option>Percentage % Based Interest</option>
                        {/* <option>Fixed Amount Per Cycle Interest</option> */}
                    </select>
                    <select 
                      className='per-day'
                      onChange={(e) => setPerday(e.target.value)}
                      >
                        {/* <option>Per day</option> */}
                        {/* <option>Per Week</option> */}
                        {/* <option>Per Month</option> */}
                        {/* <option>Per Year</option> */}
                        <option>Per Loan</option>
                    </select>
                </div>

                
                <div className='field'>
                    <label>Loan Interest %</label>
                    <input 
                    type='number'
                    placeholder='%'
                    onChange={(e) => setInterest((interest) => {
                        return e.target.value;
                    })}
                    />
                </div>

                <p className='red'>Duration:</p>
                

                <div className='field counter'>
                    <label>Loan Duration</label>
                    <div className='count'>
                        <div 
                           className='plus'
                           onClick={() => setDuration((duration) => {
                            duration = duration + 1;
                            return duration;
                           })}
                           >+</div>
                        <div>{duration}</div>
                        <div 
                            className='plus'
                            onClick={() => setDuration((duration) => {
                            duration = duration - 1;
                            return duration;
                           })}
                            >-</div>
                    </div>

                    <select 
                       className='per-day'
                       onClick={(e) => setDutime(e.target.value)}
                       >
                        <option></option>
                        <option>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                        <option>Years</option>
                    </select>
                </div>

                <p className='red'>Repayment Cycle:</p>
                
                
                <div className='field country'>
                    <label>Repayment Cycle</label>
                    <select onChange={(e) => handleCycle(e.target.value)}>
                        <option></option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Biweekly</option>
                        <option>Monthly</option>
                        <option>Bimonthly</option>
                        <option>Quarterly</option>
                        <option>Every 4 Months</option>
                        <option>Semi-Annual</option>
                        <option>Every 9 Months</option>
                        <option>Yearly</option>
                        <option>Lump Sum</option>

                    </select>
                </div>

                
                <div className='field counter repay'>
                    <label>Number of Repayments</label>
                    <div className='count'>
                        <div 
                           className='plus'
                           onClick={() => setNumber((number) => {
                            number = number + 1;
                            return number;
                           })}
                           >+</div>
                        <div>{number}</div>
                        <div 
                            className='plus'
                            onClick={() => setNumber((number) => {
                            number = number - 1;
                            return number;
                           })}
                            >-</div>
                    </div>

                </div>

                
              
                <div className='box advance'>
                    <h4>Advanced Setting: <span>Show</span> </h4>
                </div>

                
              
                <div className='box advance'>
                    <h4>Automatic Payments: <span>Show</span> </h4>
                </div>

                
              
                <div className='box advance'>
                    <h4>Loan Fees:</h4>
                </div>

                

                <p className='no-fees'>Thre are no fees in your account. To add fees,
                please <Link>Click here</Link></p>


                <div className='mstari'></div>


              
              
                <div className='box advance'>
                    <h4>Extend Loan After Maturity Untill Fully Paid: <span>Show</span> </h4>
                </div>  

                
              
                <div className='box advance'>
                    <h4>Loan Status:</h4>
                </div>

                

                <div className='field '>
                    <label>Loan Status</label>
                
                    <select 
                       className='per-day'
                       onChange={(e) => setStatus(e.target.value)}
                       >
                        <option>Processing</option>
                        <option>Open</option>
                        <option>Defaulted</option>
                        <option>----Credit Counseling</option>
                        <option>----Collection Agency</option>
                        <option>----Sequenstrate</option>
                        <option>----Debt Review</option>
                        <option>----Fraud</option>
                        <option>----Investigation</option>
                        <option>----Legal</option>
                        <option>----Write-Off</option>
                        <option>Denied</option>
                        <option>Not Taken Up</option>
                    </select>
                </div>


              
                <div className='box advance'>
                    <h4>Other (optional):</h4>
                </div>                

                <Link to="/viewguarantors">
                    <h4 className='add-g'>Add/Edit Guarantors</h4>
                </Link>
               
                
                <div 
                   className='field country'
                   onClick={() => setGuarant(!guarant)}
                   >
                    <div className='parallel guant'>
                        <label>Guarantors</label>
                        <div>
                           <h4>
                            {name}
                           </h4>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faSortDown} className='down g-down' />
                    {/* <RiArrowDownSFill className='down g-down'/> */}
                </div>

                <div 
                   className='borrowers guarant'
                   style={ guarant ? {
                    display: "block"
                   } : null}
                   >
                
                <input  
                        placeholder=''
                        onChange={(e) => handleSuggest(e.target.value)}
                        />
                   { suggest.map((item) => {
                    const { first, last, id  } = item;
                    return (
                        <div key={id}>
                            <h4  
                               className='suggest'
                               onClick={() =>handleName(first, last) }
                               >{first} {last}</h4>
                        </div>
                    )
                   }) }
                </div>      

                
                <div className='release'>
                    <label>Loan File</label>
                    <p className='after'>After you add the loan, you will see the
                    <span>View Loan Details</span>
                    page fot this loan. There, please click on the <span>Loan Files</span>
                    tab to add loan files</p>
                </div>          
              
                <div className='field title'>
                    <label>Loan Title</label>
                    <input  
                        onChange={(e) => setLoanTitle(e.target.value)}
                        />
                </div>
                <p className='after investors'>This is useful if you have investors for
                this loan. The investors can login into their portal and search and 
                identify loans by typing the loan title.</p>

                
                <div className='field desc'>
                    <label>Description</label>
                    <textarea onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>

                
              
                <div className='box advance'>
                    <h4>Accounting: Select financial account for
                    journal entry</h4>
                </div>                


              
                <div className='box journal'>
                    <h4>Select the source of the <span>Principal Amount</span>
                    (above) that will be disbursed to the borrower. This will only
                    show in<span>Accounting</span> if the <span>Loan Status</span>
                    (above) is set to <span>Open, Defaulted, </span>or <span>Fully Paid</span>
                    which means that the funds have been disbursed.</h4>
                </div>                



                <div className='field cash'>
                    <label>Cash/Bank</label>
                    <select onChange={(e) => setCash(e.target.value)}>
                        <option>Cash</option>
                    </select>
                </div>
                

                <button type='submit'>Submit</button>
                
            </form>
        </section>
    )
}

export default AddLoan;