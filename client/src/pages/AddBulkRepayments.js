import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddBulkRepayments = () => {

    var myList = [];

    for ( var i = 1; i <= 30; i++ ) {
        myList.push(i);
    } 


    return (
        <div className="add-bulk">
            <h1>Add Bulk Repayments</h1>
            <div className="bulk">
                <p className="click">You can use this page to add bulk repayments.
                 Please be carefully that you select the right loan. 
                 You can enter as many rows as you like
                 To make this page fullscreen, <span>Click here.</span></p>

                 <div className="data">
                    <div className='header'>
                        <h4>Row</h4>
                        <h4>Loan</h4>
                        <h4>Amount</h4>
                        <h4>Method</h4>
                        <h4>Collection Date</h4>
                        <h4>Collection By</h4>
                        <h4>Description (optional)</h4>
                        <h4>Accounting: Cash/Bank</h4>
                    </div>
                    {myList.map((item, index) => {
                        return (
                            <div className="choose" key={index}>
                                <h4 className='count'>{item}</h4>
                                <div className="or">
                                    <h4>Choose Loan or Search by Borrower Name</h4>
                                    <FontAwesomeIcon icon={faSortDown} className='down' />
                                </div>
                                <input className='amount' placeholder="Amount"/>
                                <select className='cash'>
                                    <option>Cash</option>
                                    <option>ATM</option>
                                    <option>Cheque</option>
                                    <option>Paypal</option>
                                    <option>Online Transfer</option>
                                </select>
                                <input className='date' type="date"/>
                                <select className='name'>
                                    <option>Issa Kombo  </option>
                                </select>
                                <input className='desc' placeholder="Description"/>
                                <select>
                                    <option>Cash</option>
                                </select>
                            </div>
                        )
                    })}
                 </div>
            </div>



        </div>
    )
}

export default AddBulkRepayments;