import React, { useContext } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import Payments from '../components/payments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';


const ViewRepayment = () => {

    const { borrowers } = useContext(BorrowersContext);

    const myList  = [];

    for (var a = 0; a < borrowers.length; a++ ) {
        myList.push(borrowers[a].repayments);
    }


    return (
        <div className='view-repayment'>
           
           <h1 className='view'>View Repayments <span>Help</span></h1>

           <h3 className='yellow'>Advanced Search: <span>Click here to Show</span></h3>

           <div className='export'>
              <div className='for'>Export Data for this page</div>
              <div className='pages'>
                <div>Export Data for all pages</div>
                <div>Bulk Delete</div>
                <div>Show/Hide Columns</div>
              </div>
           </div>

            <div className='action'>
                <div className='search'>
                    <input placeholder='search repayments'/>
                    <div>
                        <h4>Show</h4>
                        <div>20
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <h4>entries</h4>
                    </div>
                </div>

                <div className='payment act'>

                        <h4>Action</h4>

                        <div className='wide collect'>
                            <FontAwesomeIcon icon={faArrowUpWideShort}/>
                            <h4>Collection Date</h4>
                        </div>

                        
                        <div className='wide'>
                            <FontAwesomeIcon icon={faArrowUpWideShort}/>
                            <h4>Name</h4>
                        </div>

                        
                        <div className='wide'>
                            <FontAwesomeIcon icon={faArrowUpWideShort}/>
                            <h4>Loan#</h4>
                        </div>

                        
                        <div className='wide'>
                            <FontAwesomeIcon icon={faArrowUpWideShort}/>
                            <h4>Collected By</h4>
                        </div>

                        
                        
                        <div className='wide'>
                            <FontAwesomeIcon icon={faArrowUpWideShort}/>
                            <h4>Method</h4>
                        </div>

                        
                        
                        <div className='wide'>
                            <FontAwesomeIcon icon={faArrowUpWideShort}/>
                            <h4>Amount</h4>
                        </div>

                        
                        
                        <div className='wide'>
                            <FontAwesomeIcon icon={faArrowUpWideShort}/>
                            <h4>Receipt</h4>
                        </div>
                        
                    </div>
                { myList.map((item, index) => {
                    return (
                        <Payments item={item}/>
                    )
                })}
            </div>
         
        </div>
    )
}

export default ViewRepayment;