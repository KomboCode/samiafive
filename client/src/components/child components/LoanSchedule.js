import React from 'react';
import moment from 'moment';
 

const LoanSchedule = ({ person}) => {

    const { release, duration, number, due, principal, interest, repayments } = person;


    var rsum = 0;
    repayments.forEach((repay) => {
        rsum = parseInt(repay.amount) + rsum;
    })

    const interestPerday =  interest * principal/100*1/number;


    var day = moment(release).add(0, "day").format("DD/MM/YYYY");
    var dates = [];

    const options = { maximumFractionDigits: 0 };

    // iteration count

    var counts = [];
    
    for ( var i = 1; i <= duration; i++) {
        counts.push(i);
    }



    for( var a = 0; a < duration; a++) {

        day = moment(release).add(a, "day").format("DD/MM/YYYY");
        dates.push(day);
    }

    // pesa maokoto

    var kila = due/duration;
    var maokoto = [];
    var makopa = [];
    // var baki = rsum;
    
    for ( var e = 1; e <= duration; e++) {
        var sikuu = kila * e;
        if ( e === 1 ) {
            sikuu = (kila * e) - rsum;
        }
        // console.log("umeskia", baki);
        var shau = rsum - sikuu;
        makopa.push(shau);
        maokoto.push(sikuu);
    }

    console.log("shy",rsum);
    
    var principalPerday = principal/duration;
    var plist = [];
    
    for ( var o = 1; o <= duration; o++) {
        var siku = principalPerday * o;
        plist.push(siku);
    }


    // One list

    var myList = [ {
        moja: "#",
        mbili: "Date",
        tatu: "Description",
        nne: "Principal",
        tano: "Interest",
        sita: "Fees",
        saba: "Penalty",
        zero: "Due",
        nane: "Paid",
        tisa: "Pending Due",
        kumi: "Total Due",
        kumimoja: "Principal Due",
        kumimbili: "Principal Balance"
    }];

    var ukwaju = 0;

    for ( var m = 1; m <= duration; m++ ) {
         var dayl = moment(release).add(m, "day").format("DD/MM/YYYY");
         var mao = kila * m;
        //  if ( m == 1 ) {
        //     ukwaju = 0;
        //  }

                
        var bsum = 0;
        repayments.forEach((repay) => {
            if (  moment(repay.collect).format("DD/MM/YYYY") <= dayl ) {
                bsum = parseInt(repay.amount) + bsum;
            }                
        })
        console.log( "bsum",bsum);


        
        repayments.forEach((repay) => {
            if ( dayl ===  moment(repay.collect).format("DD/MM/YYYY") ) {
                ukwaju = ukwaju - repay.amount
            }
        })

         ukwaju = ukwaju + kila;



         var myObj = {
            moja: m,
            mbili: dayl,
            tatu: "Repayment",
            nne: principal/duration,
            tano: interestPerday,
            sita: 0,
            saba: 0,
            zero: due/duration,
            nane: due,
            tisa: ukwaju,
            kumi: mao,
            kumimoja: principalPerday * m,
            kumimbili: principal,
            kumitatu: false,
            kuminne: 0,
            kumitano: bsum
         }
         myList.push(myObj);
    }

    console.log("List yangu", myList);


     myList.forEach((item) => {

        if ( item.mbili === "Date" ) {
            item.kumitatu = false;
        }

        for (var r = 0; r < repayments.length; r++) {

            if (item.mbili === moment(repayments[r].collect).add(0, "day").format("DD/MM/YYYY") ) {
                item.kumitatu = true;
                item.kuminne = repayments[r].amount;
            }

        }
      
    })

    const PaidInterest = rsum * interest/100;
    // console.log("Paid interest", PaidInterest); 



    return (
        <section className='loan-schedule'>
        
           <div className='rest'>Add/Edit Restriction on Borrower</div>

           <div className='info'>
             <div className='header'>
                <h4>#</h4>
                <h4>Date</h4>
                <h4 className='descrip'>Description</h4>
                <h4>Principal</h4>
                <h4 className='inte'>Interest</h4>
                <h4>Fees</h4>
                <h4>Penalty</h4>
                <h4>Paid</h4>
                <h4>Pending Due</h4>
                <h4>Total Due</h4>
                <h4>Principal Due</h4>
                <h4 className='pb'>Principal Balance</h4>
             </div>

             <div className='over'>
                <h5>Overide</h5>
                <h5 className='adjust'>Adjust in middle</h5>
                <h5 className='overide'>Overide</h5>
                <h5 className='make'>Make it zero</h5>
             </div>
           </div>

            <div className='my-list'>

            { myList.map((item, inde) => {
            const { moja, mbili, tatu, nne, tano,
            sita, zero, saba, nane, tisa, kumi, kumimoja, kumimbili, index,
            kumitatu, kuminne } = item;


            return (
                <div className='payment'>
                    <div  
                      className='line' 
                      key={index}
                      style={ kumitatu === false ? null : {
                        background: "#13a6003c"
                      } }
                      >
                        <h4>{moja}</h4>
                        <h4>{mbili}</h4>
                        <h4>{tatu}</h4>
                        { nne === "Principal" ? <h4>{nne}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(nne)}.00</h4>
                        }
                        { tano === "Interest" ? <h4>{tano}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(tano)}.00</h4>
                        }
                        { sita === "Fees" ? <h4>{sita}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(sita)}.00</h4>
                        }
                        
                        { saba === "Penalty" ? <h4>{saba}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(saba)}.00</h4>
                        }

            
                        { zero === "Due" ? <h4>{zero}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(zero)}.00</h4>
                        }
                        
                        { nane === "Paid" ? <h4>{nane}</h4> : 
                        <h4 className='toa'>{Intl.NumberFormat("en-US",options).format(nane)}.00</h4>
                        }

                        
                        
                        { tisa === "Pending Due" ? <h4>{tisa}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(tisa)}.00</h4>
                        }

                        
                        { kumi === "Total Due" ? <h4>{kumi}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(kumi)}.00</h4>
                        }

                        
                        { kumimoja === "Principal Due" ? <h4>{kumimoja}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(kumimoja)}.00</h4>
                        }

                        
                        { kumimbili === "Principal Balance" ? <h4>{kumimbili}</h4> : 
                        <h4>{Intl.NumberFormat("en-US",options).format(kumimbili)}.00</h4>
                        }

                    </div>

                    <div 
                       className='other'
                       style={ kumitatu === false ? {
                        display: "none"
                       } : null }
                       >
                       <h4 className='toa'>6</h4>
                       <h4>{mbili}</h4>
                       <div>
                            <h4>Payment</h4>
                            <h4 className='rece'>Received +</h4>
                       </div>
                       <h4 className='toa'>{nne}</h4>
                       <h4 className='toa'>{tano}</h4>
                       <h4 className='toa'>{sita}</h4>
                       <h4 className='toa'>{saba}</h4>
                       <h4 className='toa'>{nane}</h4>
                       <h4 className='stick'>{Intl.NumberFormat("en-US",options).format(kuminne)}.00</h4>
                       {/* <h4 style={ kumitano < tisa ? {
                        color: "#DF513D"
                       } : {
                        color: "#00A65A"
                       }}>{ tisa - kumitano }</h4> */}
                       
                    </div>

                </div>
              
            )
           })}

                  
                    <div className='other below'
                            //    style={ kumitatu === false ? {
                            //     display: "none"
                            //    } : null }
                            >
                       <h4 className='toa'>6</h4>
                       <h4 className='toa'>09/04/2023</h4>
                       <h4>Total Due</h4>
                       {/* <h4 className='mtatu'>{principal}</h4> */}
                       <h4 className='mtatu'>
                       {Intl.NumberFormat("en-US",options).format(principal)}.00
                       </h4>
                       
                       <h4 className='mtatu'>
                       {Intl.NumberFormat("en-US",options).format(principal * interest/100)}.00
                       </h4>
                       <h4 className='mtano'>0</h4>
                       <h4 className='msita'>0</h4>
                       
                       <h4>
                       {Intl.NumberFormat("en-US",options).format(due)}.00
                       </h4>
                       
                       <h4>
                       {Intl.NumberFormat("en-US",options).format(rsum)}.00
                       </h4>
                       {/* <h4>{rsum}</h4> */}
                       
                       <h4>
                       {Intl.NumberFormat("en-US",options).format(due - rsum)}.00
                       </h4>
                       <h4 className='toa'>20,000.00</h4>
                       
                       <h4>
                       {Intl.NumberFormat("en-US",options).format(principal - PaidInterest)}.00
                       </h4>
                       <h4 className='toa'>90,000.00</h4>
                    </div>
                

                  
                    <div className='other below'
                            //    style={ kumitatu === false ? {
                            //     display: "none"
                            //    } : null }
                            >
                       <h4 className='toa'>6</h4>
                       <h4 className='toa'>09/04/2023</h4>
                       <h4>Total Paid</h4>
                       
                       <h4 className='mtatu'>
                       {Intl.NumberFormat("en-US",options).format(rsum - PaidInterest)}.00
                       </h4>
                       
                       <h4 className='mtatu'>
                       {Intl.NumberFormat("en-US",options).format(PaidInterest)}.00
                       </h4>
                       <h4 className='mtano'>0</h4>
                       <h4 className='msita'>0</h4>
                    </div>

                        
                    <div className='other below mwisho'
                            //    style={ kumitatu === false ? {
                            //     display: "none"
                            //    } : null }
                            >
                       <h4 className='toa'>6</h4>
                       <h4 className='toa'>09/04/2023</h4>
                       <h4 className='align'>Total Pending Due</h4>
                       
                       <h4 className='mtatu'>
                       {Intl.NumberFormat("en-US",options).format(principal - (rsum - PaidInterest))}.00
                       </h4>

                       
                       <h4 className='mtatu'>
                       {Intl.NumberFormat("en-US",options).format((interestPerday * duration) - (interestPerday * repayments.length))}.00
                       </h4>
                       <h4 className='mtano'>0</h4>
                       <h4 className='msita'>0</h4>
                    </div>
                
            </div>
        
           {/* <div className='cudos'>

               <div className='iteration'>
                { counts.map((count, index) => {
                    return (
                        <h4 key={index}>{count}</h4>
                    )
                })}
               </div>

               <div className='dates'>
                { dates.map((date, index) => {
                    return (
                        <h4 id={index}>{date}</h4>
                    )
                })}
               </div>

               
               <div className='iteration repa'>
                { counts.map((count, index) => {
                    return (
                        <h4 key={index}>Repayment</h4>
                    )
                })}
                <p>Total Due</p>
                <p>Total Paid</p>
                <p className='pe'>Total Total Pending Due</p>
               </div>

               
               <div className='iteration prin'>
                { counts.map((count, index) => {
                    return (
                        <h4 key={index}>{Intl.NumberFormat("en-US",options).format(principal/number)}</h4>
                    )
                })}
                <h4>{Intl.NumberFormat("en-US",options).format(principal)}</h4>
                <h4>{Intl.NumberFormat("en-US",options).format(principal)}</h4>
                <h4>0</h4>
               </div>

               
               <div className='iteration interes'>
                { counts.map((count, index) => {
                    return (
                        <h4>{Intl.NumberFormat("en-US",options).format(interestPerday)}</h4>
                    )
                })}
                <h4>{Intl.NumberFormat("en-US",options).format(interest * principal/100)}</h4>
                <h4>0</h4>
                <h4>{Intl.NumberFormat("en-US",options).format(interest * principal/100)}</h4>


               </div>

               
               
               <div className='iteration fees'>
                { counts.map((count, index) => {
                    return (
                        <h4 key={index}>{0}</h4>
                    )
                })}
                <h4>0</h4>
                <h4>0</h4>
                <h4>0</h4>

               </div>
               
               <div className='iteration paid'>
                { counts.map((count, index) => {
                    return (
                        <h4 key={index}>{0}</h4>
                    )
                })}
                <h4>0</h4>
                <h4>0</h4>
                <h4>0</h4>

               </div>
               
               <div className='iteration'>
                { counts.map((count, index) => {
                    return (
                        <h4 key={index}>{Intl.NumberFormat("en-US",options).format(due/duration)}</h4>

                    )
                })}
                <h4 className="duu">{Intl.NumberFormat("en-US",options).format(due)}</h4>
               </div>

               <div className='maokoto'>
                { maokoto.map((okoto, index) => {
                    return (
                        <h4 id={index}>{okoto.toFixed(0)}</h4>
                    )
                })}
                <h4 className="duu">{Intl.NumberFormat("en-US",options).format(due)}</h4>

               </div>

               <div className='maokoto'>
                { plist.map((okoto, index) => {
                    return (
                        <h4 key={index}>{Intl.NumberFormat("en-US",options).format(okoto)}</h4>
                        
                    )
                })}
               </div>

               
               <div className='iteration'>
                { counts.map((count, index) => {
                    return (
                        <h4 key={index}>{Intl.NumberFormat("en-US",options).format(principal)}</h4>
                    )
                })}
                <h4 className="duu">{Intl.NumberFormat("en-US",options).format(due)}</h4>

               </div>

           </div> */}
    
        </section>
    )
}

export default LoanSchedule;