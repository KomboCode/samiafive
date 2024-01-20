import React from 'react';
import { Link } from 'react-router-dom';
// import { MdKeyboardArrowDown} from 'react-icons/md';
// import { LuArrowDownWideNarrow, LuArrowUpDown } from 'react-icons/lu';



const ViewGuarantors = () => {

    return (
        <section className='view-borrowers view-guarantors'>
           <h1>Guarantors</h1>
           <p className='here'>Here you can add guarantors for loans. These can be selected in the <span>Add Loan </span>
           page. You can also send sms or email to the guarantors.</p>
           <Link to="/addguarantor" className='add'>Add Guarantor</Link>
         
           <div className='export'>
            <div className='first'>
                <h4>Export Data</h4>
            </div>

            <div className='two'>
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

                <div className='full-name'>
                    {/* <LuArrowDownWideNarrow className='icon'/> */}
                    <h4>Full Name</h4>
                </div>

                
                <div className='business'>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Business</h4>
                </div>

                
                <div>
                    {/* <IoIosText/> */}
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Mobile</h4>
                </div>

                
                <div>
                    {/* <BsChatText/> */}
                    {/* <LuArrowUpDown className='icon'/> */}
                    <h4>Email</h4>
                </div>

            
                
                <div className='action'>
                    <h4>Actions</h4>
                </div>

            </div>


           </div>
        </section>
    )
}

export default ViewGuarantors;