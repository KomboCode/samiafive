import React from 'react';

const PenaltySetting = () => {
    return (
        <div className='penalty-setting'>
            <div className='current'>
                <p className='one'>This loan is currently using the <span> Business Loan </span>
                penalty settings. To add/edit penalty settings, you can do one of the 
                following:</p>
                <p className='hash'>1. Bussiness Loan Penalty:</p>
                <p className='what'><span className='blue'>Click here </span>if you would like to <span
                className='bold'>edit the Business Loan penalty settings.</span>
                In this case <span className='underline'>all loans in this loan product</span>
                will be affected.</p>

                <h3>OR</h3>

                <p className='hash'>2. Individual Penalty:</p>
                <p className='what'><span className='blue'>Click here </span>if you would like to 
                add penalty settings<span
                className='bold'> just for this loan </span> 
                <span className='underline'> Only this loan </span>
                will be affected.</p>
            </div>

            <div className='button'>Business Loan Penalty - System Generated</div>
            <div className='silver'>Late Repayment Penalty:</div>
            <h4  className='red'>Late Repayment Penalty is Disabled</h4>

            <div className='silver date'>After Maturity Date Penalty:</div>
            <h4  className='red'>After Maturity Date Penalty is Disabled</h4>



        </div>
    )
}

export default PenaltySetting;