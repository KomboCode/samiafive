import { useContext } from "react";
import { BorrowersContext } from "../contexts/BorrowersContext";

const NoRepayments = () => {

    const { borrowers } = useContext(BorrowersContext);

    borrowers.forEach((borrower) => {
       if ( borrower.repayments.length === 0 ) {
        console.log(borrower);
       }
    })



    return (

        <section className="no-repayment">
            
            <h1>No Repayments</h1>
            <p>Loans tha have not received any payments since the start 
            of the loan. You can also search for no payments made in the
             dates selected below.</p>
            <div>
                <h3>Date Range</h3>
            </div>

            <div>
            
            { borrowers.map((borrower) => {

                const { first, last, principal } = borrower;

                if ( borrower.repayments == 0  ) {
                    return (
                        <div>
                            <h3>{first} {last}</h3>
                            <h3>{principal}</h3>
                        </div>
                    )
                }
            })}
            </div>
        </section>
     
    )
}

export default NoRepayments;