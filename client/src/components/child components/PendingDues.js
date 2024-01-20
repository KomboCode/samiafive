import React from 'react';

const PendingDues = ({person}) => {

    const { due, principal, interest } = person;



    return (
        <div className='pending-dues'>
            <p className='banga'>Here you can see the pending due amounts for all-time, untill today, and pro-rata basis</p>
            <div className='base'>
            
                <div className='terms'>
                    <div className='header'>
                        <h4>Based on Loan Terms:</h4>
                        <h4 className='principal'>Principal</h4>
                        <h4>Interest</h4>
                        <h4>Fees</h4>
                        <h4>Penalty</h4>
                        <h4>Total</h4>
                    </div>

                    <div className='second'>
                        <div className='red'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>

                    <div className='second'>
                        <div className='red green'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>


                    <div className='second'>
                        <div className='red silver'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>


                </div>

                <div className='terms schedule'>
                    <div className='header'>
                        <h4>Based on Loan Schedule:</h4>
                    </div>

                    <div className='second'>
                        <div className='red'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>

                    <div className='second'>
                        <div className='red green'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>


                    <div className='second'>
                        <div className='red silver'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>

                </div>



                <div className='terms schedule'>
                    <div className='header'>
                        <h4>Based on Loan Schedule:</h4>
                    </div>

                    <div className='second'>
                        <div className='red'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>

                    <div className='second'>
                        <div className='red green'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>


                    <div className='second'>
                        <div className='red silver'>Total Due</div>
                        <h4>{Intl.NumberFormat("en-US").format(principal)}.00</h4>
                        <h4>{Intl.NumberFormat("en-US").format(interest * principal/100)}.00</h4>
                        <h4 className='fees'>0</h4>
                        <h4>0</h4>
                        <h4>{Intl.NumberFormat("en-US").format(due)}.00</h4>
                    </div>


                </div>


            </div>
            
        </div>
    )
}

export default PendingDues;