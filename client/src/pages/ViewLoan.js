import React, { useContext } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
 

const ViewLoans = () => {

    const { borrowers } = useContext(BorrowersContext);

    var baka = borrowers.reverse();

    return (
        <section className='view-borrowers view-loans'>
           <h1>View All Loans<span>Help</span></h1>
           <div className='yellow'>
            <h4>Advanced Search: <span>Click here to show</span></h4>
           </div>
           <div className='export'>
            <div className='first'>
                <h4>Export Data for this page</h4>
            </div>
            <div className='two'>
                <div><h4>Export Data for all pages</h4></div>
                <div><h4>Show/Hide Columns</h4></div>
            </div>
           </div>
           <div className='people'>
            <div className='filter'>
                <input placeholder='Search borrowers'/>
                <div className='show'>
                    <h4>Show</h4>
                    <div>
                        <h5>20</h5>
                        {/* <MdKeyboardArrowDown/> */}
                    </div>
                    <h4>entries</h4>
                </div>
            </div>

            <div className='view'>
                <h4>View</h4>

                
                <div className='release'>
                    {/* <LuArrowDownWideNarrow className='icon'/> */}
                    <h4>Released</h4>
                </div>

                <div className='name'>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Name</h4>
                </div>

                
                
                <div className='loan'>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Loan#</h4>
                </div>

                
                <div className='principal'>
                    {/* <IoIosText/> */}
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>principal</h4>
                </div>

                
                <div className='interest'>
                    {/* <BsChatText/> */}
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Interest</h4>
                </div>

                
                
                <div className='due'>
                    {/* <LuSettings2/> */}
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Due</h4>
                </div>

                
                <div className='paid'>
                    {/* <LuSettings2/> */}
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>paid</h4>
                </div>

                
                
                <div className='balance'>
                    {/* <LuSettings2/> */}
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Balance</h4>
                </div>

                
                
                <div className='last-pay'>
                    <h4>Last pay</h4>
                </div>

                
                
                <div className='status'>
                    <h4>Status</h4>
                </div>

            </div>

            { baka.map((borrower) => {
                const { first, last, id } = borrower;
                return (
                    <div className='person' key={id}>
                    <div className='edit'>
                            <div>
                                {/* <MdModeEditOutline className="icon"/> */}
                                <FontAwesomeIcon icon={faPen} className='tik'/>
                            </div>
                            <div>
                                {/* <BsChatText className="icon chart"/> */}
                                <FontAwesomeIcon icon={faCommentDots} className='tik'/>
                            </div>
                        </div>
                        <h4 className='data'>12/10/2023</h4>
                        <h4 className='last'>{first} {last}</h4>
                        <h4 className='loani'>1000062</h4>
                        <h4 className='princip'>390,000.00</h4>
                        <h4 className='interesti'>30%Loan</h4>
                        <h4 className='duee'>390,000.00</h4>
                        <h4 className='paidi'>0</h4>
                        <h4 className='balancei'>420,000.00</h4>
                        {/* <h4 className='maturity'></h4> */}

                        <div className='past'>Past Maturity</div>

                    </div>
                )
            })}

           </div>
        </section>
    )
}

export default ViewLoans;