import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf, faPen, faReceipt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
// import { faEdit, f } from '@fortawesome/free-regular-svg-icons';


const Payments = ({ item}) => {

    const options = { maximumFractionDigits: 0 };


    return (
        <div className="payments"> 
        {
            item.map((pay, index) => {
                const { amount, by, collect, first, last, unique } = pay;
                return (
                    <div className='payment' key={index}>
                        <FontAwesomeIcon icon={faPen} className='edit'/>

                        <h4>{
                            moment(collect).format("DD/MM/YYYY")
                        }</h4>
                        <h4 className='name'>{first} {last}</h4>
                        <h4>{unique}</h4>
                        <h4>{by}</h4>
                        <h4>Cash</h4>
                        <h4>{Intl.NumberFormat("en-US",options).format(amount)}.00</h4>
                            <div className='icons'>
                                    <FontAwesomeIcon icon={faReceipt} className='icon'/>
                                    <FontAwesomeIcon icon={faFilePdf} className='icon'/>
                                    <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                            </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Payments;