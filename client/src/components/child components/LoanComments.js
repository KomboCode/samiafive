import React from 'react';


const LoanComments = () => {
    return (
        <div className='loan-comments'>
            <div>
                <button className='add'>Add Comments</button>
                <button className='print'>
                Print Comments
                {/* <RiArrowDownSFill/> */}
                </button>
            </div>
            <p>No comment found</p>
        </div>
    )
}

export default LoanComments;