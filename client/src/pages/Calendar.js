import React, { useState } from 'react';
import moment from 'moment';


const Calender = (monthMoment) => {

    const [ timer, setTimer ] = useState("");

    const date = moment().format("DD/MM/YYYY");
    const tomorrow = moment().add(5, "day").format("DD/MM/YYYY");
    const muda = moment(timer).add(5, 'days').format("DD/MM/YYYY");
    var kwai = moment().add(5, "day").format("DD/MM/YYYY");


    var list = [];

    for ( var i = 0; i < 5; i++) {
        var num = i * 7;
        kwai =  moment().add(num, "day").format("DD/MM/YYYY");
        list.push(kwai);
        console.log(list);
    }

    return (
        <div>
            <div>{date}</div>
            <h3>{tomorrow}</h3>
            <h4>{muda}</h4>
            <input type='date' onChange={(e) => setTimer(e.target.value)}/>
            {/* <div>{number}</div> */}
        </div>
      
    )
}

export default Calender;