import React from 'react';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { LuArrowDownWideNarrow, LuArrowUpDown } from 'react-icons/lu';


const OtherIncome = () => {

    return (
        <div className='repayments'>
            <div className='buttons'>
                <div>Add Other Income</div>
                <div>Show/Hide Columns</div>
            </div>

            <div className='bean'>
                <input placeholder='Search borrowers'/>
                <div className='show'>
                    <h4>Show</h4>
                    <div >
                        <h5>20</h5>
                        {/* <MdKeyboardArrowDown/> */}
                    </div>
                    <h4>entries</h4>
                </div>
            </div>

            <div className='titles'>
                <h4>Date</h4>
                <div>
                  {/* <LuArrowDownWideNarrow/> */}
                  <h4>Type</h4>
                </div>

                <div>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Amount</h4>
                </div>

                
                <div>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Description</h4>
                </div>

                
                <div>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Files</h4>
                </div>

                <h4>Recurring</h4>

                <h4>Action</h4>

                <h4>Receipt</h4>

            </div>
         
        </div>
    )
}

export default OtherIncome;