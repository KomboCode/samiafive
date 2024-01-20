import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';



const NoPay = ({ item }) => {

    const { one, two, three, four, five, six, seven, eight, nine, ten } = item;
    const [ ipo, setIpo ] = useState(false);
    const [ past, setPast ] = useState();
    const [ pastDue, setPastDue ] = useState();



    var interest = ten * three / 100;
    var due = interest + parseInt(three);

    var interestPerDay = due/one;

    console.log("No repayment ipo", item.six.length);

    var paid = 0;
    var kila = five/nine;

    if ( six == null ) {
    } else {
        six.forEach((repay) => {
            paid = paid + parseInt(repay.amount)
        })

    }


    var myData = [];

    var today = moment(day).format("DD/MM/YYYY");
    var gau = moment(two).add(11, "day").format("DD/MM/YYYY");
    var jana = moment(day).subtract(1, "day").format("DD/MM/YYYY");




    var ukwaju = 0;

    for ( var i = 1; i < one; i++) {
        var day = moment(two).add(i, "day").format("DD/MM/YYYY");

            
        if ( six == null ) {
        } else {
            six.forEach((repay) => {
                if ( day ===  moment(repay.collect).format("DD/MM/YYYY") ) {
                    ukwaju = ukwaju - repay.amount
                }
            })

        }

        ukwaju = ukwaju + kila;

        var myObj = {
            leo: day,
            maokoto: ukwaju,

        }
        myData.push(myObj);
    }


    useEffect(() => {
        myData.forEach((obj) => {
            if ( obj.leo == today ) {
                setIpo(true);
                setPast(obj.maokoto);
            } if ( obj.leo == jana) {
                setPastDue(obj.maokoto);
            }
        })
    }, []);
 

    return (
        <div>
          
            { ipo ? <div className='grid'>
                <div>
                    <FontAwesomeIcon icon={faPen} className='edit'/>
                    <FontAwesomeIcon icon={faCommentDots} className='dots'/>
                </div>
                <h3 className='name'>{seven} {eight}</h3>
                <h3>{four}</h3>
                <h3>{three}</h3>
                <h3>{due}</h3>
                <h3>{paid}</h3>
                <h6>{pastDue}</h6>
                <h3>{interestPerDay}</h3>
                <h3>{past}</h3>
                <h3>{today}</h3>
                <h3>.</h3>
                <h4 className='today'>Due Today</h4>
            </div> : null }
          
        </div>
    )
}

export default NoPay;