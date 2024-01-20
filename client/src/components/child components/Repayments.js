import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { LuArrowDownWideNarrow, LuArrowUpDown } from 'react-icons/lu';
import moment from 'moment';
// import { AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai';
// import { BiSolidReceipt } from 'react-icons/bi';
import { BorrowersContext } from '../../contexts/BorrowersContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort, faEnvelope, faFilePdf, faReceipt } from '@fortawesome/free-solid-svg-icons';


const Repayments = () => {

    const navigate = useNavigate();
    const { person } = useContext(BorrowersContext);

    const options = { maximumFractionDigits: 2 };

    const { repayments } = person;
    // const { collect, by } = repayments[0];
    console.log("Repayment acha kufeli", repayments);


    var fall = [];
    var isa = moment().add(5, "day").format("DD/MM/YYYY");

    
    // const [ timer, setTimer ] = useState("");

    // const date = moment().format("DD/MM/YYYY");
    // const tomorrow = moment().add(5, "day").format("DD/MM/YYYY");
    // const muda = moment(timer).add(5, 'days').format("DD/MM/YYYY");


    for( var i = 1; i < 5; i++)  {

        isa = moment().add(i, "day").format("DD/MM/YYYY");
        fall.push(isa);
        console.log(fall);
    }

    const handleAdd = () => {
        navigate("/addrepayment");
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }


    return (
        <div className='repayments'>
            <div className='buttons'>
                <div onClick={handleAdd}>Add Repayment</div>
                <div>Show/Hide Columns</div>
                <div>Bulk Delete</div>
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
                <h4>Collection Date</h4>
                <div>
                  {/* <LuArrowDownWideNarrow/> */}
                  <FontAwesomeIcon icon={faArrowUpWideShort}/>
                  <h4>Collection Date</h4>
                </div>

                <div>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort}/>
                    <h4>Method</h4>
                </div>

                
                <div>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort}/>
                    <h4>Amount</h4>
                </div>

                
                <div>
                    {/* <LuArrowUpDown className='icon'/> */}
                    <FontAwesomeIcon icon={faArrowUpWideShort}/>
                    <h4>Action</h4>
                </div>

                <h4>Receipt</h4>

            </div>

               <div>

                { repayments.map((repayment) => {
                    const { amount, by, collect, reme, index } = repayment;
                    return (
                        <div key={index} className='data'>
                           <div className='date'>
                             <h4>{collect}</h4>
                           </div>

                           <div className='by'>
                             <h4>{by}</h4>
                           </div>

                           <div className='system'>
                            <h4>{reme}</h4>
                           </div>

                           <div className='amount'>
                            <h4>{Intl.NumberFormat("en-US", options).format(amount)}.00</h4>
                           </div>

                           <div className='edi'>
                            <h4>Edit</h4>
                           </div>

                           
                           <div className='delete'>
                            <h4>Delete</h4>
                           </div>


                           
                <div className='risit'>
                    <div className='icons'>
                        <div>
                            {/* <BiSolidReceipt/> */}
                            <FontAwesomeIcon icon={faReceipt}/>
                        </div>
                        <div>
                            {/* <AiOutlineFilePdf/> */}
                            <FontAwesomeIcon icon={faFilePdf}/>
                        </div>
                        <div>
                            {/* <AiOutlineMail/> */}
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                    </div>

                 
                </div>



                           

                        </div>
                        
                    )
                })}
            </div>   

         
        </div>
    )
}

export default Repayments;