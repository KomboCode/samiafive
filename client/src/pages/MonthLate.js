import { useContext } from "react";
import { BorrowersContext } from "../contexts/BorrowersContext";
import moment from 'moment';

const MonthLate = () => {
    


    const { borrowers } = useContext(BorrowersContext);
    var today = moment().format("YY-MM-DD");
    var date = new Date();

    var dv = new Date();
    dv.setDate(dv.getDate() + 5);

    console.log("leo jim na 5", dv);

    borrowers.forEach((borrower) => {

        var d = new Date(borrower.release);
        d.setDate(d.getDate() + borrower.duration);

        var bure = moment(date).isAfter(d);

        if ( bure === true ) {
            var dateOne = new Date(date);
            var dateTwo = new Date(d);
            const time = Math.abs(dateOne - dateTwo );
            const days = Math.ceil(time / (1000 * 60 * 60 * 24 ));

            console.log("iziapaaaaaaaaaa", days);
        }

    })

    return (
        <div>
            { borrowers.map((borrower) => {
                const { first, release, duration } = borrower;
                        
                var d = new Date(release);
                d.setDate(d.getDate() + duration);
                var bure = moment(date).isAfter(d);

                if ( bure === true ) {

                    var dateOne = new Date(date);
                    var dateTwo = new Date(d);
                    const time = Math.abs(dateOne - dateTwo );
                    const days = Math.ceil(time / (1000 * 60 * 60 * 24 ));

                    if ( days > 29 ) {

                        return (
                            <div>
                                <h3>{first}</h3>
                                {/* <h3>{d}</h3> */}
                                <h3>Leo ni {today}</h3>
                            </div>
                )
                    }


                } 
                


            })}
        </div>
    )
}

export default MonthLate;