import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faFileAlt, faPlus, faScaleBalanced, faUser, faUserPlus   } from '@fortawesome/free-solid-svg-icons';



const HomeBrancha = () => {

  const { borrowers } = useContext(BorrowersContext);

  const options = { maximumFractionDigits: 0 };

  var sum = 0;

  borrowers.forEach((item) => {
    const { principal } = item;
    // var bu = principal;
    console.log(typeof(principal));
    sum = sum + parseInt(principal);
  })

  console.log("This is total sum", sum);


    return (
        <section className='home-branch'>
            <h1>Home Branch</h1>
            {/* <div className='new'>
                <Link>New Features</Link>
                <Link>New Videos</Link>
            </div> */}
            <p className='last'>Last Update: 1 st June 2023</p>
{/* 
            <div className='middle'>
                <div className='branch'>
                  <div>
                    <FontAwesomeIcon icon={faClose} className='close' />
                    <h4>Branch #1</h4>
                  </div>
                </div>

                <div className='money'>
                    <h4>TZS-TZS</h4>
                    <FontAwesomeIcon icon={faAngleDown} className='left' />
                </div>
                <h5>Convert below figures to a specific currency</h5>

                <Link className='update'>Update this page</Link>
            </div> */}

            <div className='updated'>
                <p>Last updated on <span>7th Sep at 2:28:59 AM. </span>
                To see the latest version, click <span>Update this page </span>
                button above</p>
                {/* <AiOutlineArrowUp/> */}
            </div>

            <div className='statistics'>
                <div className='total'>
                    <div className='up'>
                        <div className='left'>
                            <div className='num'>
                                {/* <div><BiPlusMedical/></div> */}
                                <div>
                                  <FontAwesomeIcon icon={faPlus}/>
                                </div>
                                <h3>{borrowers.length} - Total</h3>
                            </div>
                            <div className='num'>
                                {/* <div><BiPlusMedical/></div> */}
                                <div>
                                  <FontAwesomeIcon icon={faPlus}/>
                                </div>
                                <h3>{borrowers.length} - Active</h3>
                            </div>
                            <div className='num'>
                                {/* <div><BiPlusMedical/></div> */}
                                <div>
                                  <FontAwesomeIcon icon={faPlus}/>
                                </div>
                                <h3>0 - Fully Paid</h3>
                            </div>
                        </div>
                        {/* <BsFillPersonFill className='fill'/> */}
                        <FontAwesomeIcon icon={faUser} className='fill'/>
                    </div>
                    <div className='down'>Borrowers</div>
                </div>

                <div className='total year'>
                    <div className='up'>
                        <div className='left'>
                            <div className='num'>
                                <h3>{Intl.NumberFormat("en-US",options).format(sum)}.00 - Total</h3>
                            </div>
                            <div className='num'>
                                <h3>{Intl.NumberFormat("en-US",options).format(sum)}.00 - This year</h3>
                            </div>
                            <div className='num'>
                                <h3>{Intl.NumberFormat("en-US",options).format(sum)}.00 - This month</h3>
                            </div>
                        </div>
                        {/* <HiOutlineDocumentDuplicate className='fill'/> */}
                        <FontAwesomeIcon icon={faFileAlt} className='fill'/>
                    </div>
                    <div className='down'>
                        <h4>Principal Released</h4>
                        <div>
                            {/* <BiRightArrowAlt/> */}
                        </div>
                    </div>
                </div>

                
                <div className='total'>
                    <div className='up'>
                        <div className='left'>
                            <div className='num'>
                                <h3>0 - Total</h3>
                            </div>
                            <div className='num'>
                                <h3>0 - This year</h3>
                            </div>
                            <div className='num'>
                                <h3>0 - This month</h3>
                            </div>
                        </div>
                        {/* <FiDollarSign className='fill'/> */}
                        <FontAwesomeIcon icon={faDollar} className='fill'/>
                    </div>
                    <div className='down'>
                        <h4>Collections incl. Deductable Fees</h4>
                        <div>
                            {/* <BiRightArrowAlt/> */}
                        </div>
                    </div>
                </div>

                
                <div className='total first'>
                    <div className='up'>
                        <div className='left'>
                            <div className='num'>
                                <h3>6 - This Year</h3>
                            </div>
                            <div className='num'>
                                <h3>1 - Last 3 Months</h3>
                            </div>
                            <div className='num'>
                                <h3>0 - This month</h3>
                            </div>
                        </div>
                        {/* <BsFillPersonPlusFill className='fill'/> */}
                        <FontAwesomeIcon icon={faUserPlus} className='fill'/>
                    </div>
                    <div className='down'>
                        <h4>New Borrowers with First Loan</h4>
                      
                    </div>
                </div>

                <div className='law'>
                  <div className='blue'>
                    {/* <VscLaw className='icon'/> */}
                    <FontAwesomeIcon icon={faScaleBalanced} className='icon'/>
                  </div>
                  <div className='word'>
                    <h4>TOTAL OUTSTANDING</h4>
                    <div className='tai'>
                        <h4>OPEN LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>{Intl.NumberFormat("en-US",options).format(sum)}.00 - Total</h3>
                  </div>
                </div>

                
                <div className='law'>
                  <div className='blue'>
                    {/* <VscLaw className='icon'/> */}
                    <FontAwesomeIcon icon={faScaleBalanced} className='icon'/>
                  </div>
                  <div className='word'>
                    <h4>PRINCIPAL OUTSTA....</h4>
                    <div className='tai'>
                        <h4>OPEN LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>47,465,000.00</h3>
                  </div>
                </div>

                
                <div className='law'>
                  <div className='blue'>
                    {/* <VscLaw className='icon'/> */}
                    <FontAwesomeIcon icon={faScaleBalanced} className='icon'/>
                  </div>
                  <div className='word'>
                    <h4>TOTAL OUTSTANDING</h4>
                    <div className='tai'>
                        <h4>OPEN LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>12,747,750.00</h3>
                  </div>
                </div>

                
                <div className='law'>
                  <div className='blue'>
                    {/* <VscLaw className='icon'/> */}
                    <FontAwesomeIcon icon={faScaleBalanced} className='icon'/>

                  </div>
                  <div className='word'>
                    <h4>FEES OUTSTANDING</h4>
                    <div className='tai'>
                        <h4>OPEN LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>0</h3>
                  </div>
                </div>

                <div className='law'>
                  <div className='blue'>
                    {/* <VscLaw className='icon'/> */}
                    <FontAwesomeIcon icon={faScaleBalanced} className='icon'/>
                  </div>
                  <div className='word'>
                    <h4>PENALTY OUTSTAN...</h4>
                    <div className='tai'>
                        <h4>OPEN LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>0</h3>
                  </div>
                </div>

                
                <div className='law green'>
                  <div className='blue'>
                    <h1>P</h1>
                  </div>
                  <div className='word'>
                    <h4>PROCESSING LOAN...</h4>
                   
                    <h3>0</h3>
                  </div>
                </div>

                
                <div className='law green'>
                  <div className='blue'>
                    <h1>O</h1>
                  </div>
                  <div className='word'>
                  <div className='tai'>
                        <h4>OPEN LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>74 - Total</h3>
                    <h3>1 - Released this</h3>
                    <h3>Month</h3>
                  </div>
                </div>

                <div className='law green'>
                  <div className='blue'>
                    <h1>F</h1>
                  </div>
                  <div className='word'>
                    <h4>FULLY PAID LOANS</h4>
                    <h3>0 - This Year</h3>
                    <h3>0 - This Month</h3>
                  </div>
                </div>

                <div className='law green res'>
                  <div className='blue'>
                    <h1>R</h1>
                  </div>
                  <div className='word'>
                    <h4>RESTRUCTURED LO..</h4>
                    <h3>0 - Released This</h3>
                    <h3>Year</h3>
                    <h3>0 - Released This</h3>
                    <h3>Month</h3>
                  </div>
                </div>

                <div className='law green'>
                  <div className='blue'>
                    <h1>Df</h1>
                  </div>
                  <div className='word'>
                  <div className='tai'>
                        <h4>DEFAULT LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>0 - This Year</h3>
                    <h3>0 - This Month</h3>
                  </div>
                </div>

                <div className='law green'>
                  <div className='blue'>
                    <h1>Dn</h1>
                  </div>
                  <div className='word'>
                    <div className='tai'>
                        <h4>DENIED LOANS</h4>
                        {/* <div><BiPlusMedical/></div> */}
                    </div>
                    <h3>0 - This Year</h3>
                    <h3>0 - This Month</h3>
                  </div>
                </div>

                <div className='law green'>
                  <div className='blue'>
                    <h1>N</h1>
                  </div>
                  <div className='word'>
                    <h4>NOT TAKEN UP LOA..</h4>
                    <h3>0 - This Year</h3>
                    <h3>0 - This Month</h3>
                  </div>
                </div>

                
            </div>

        </section>
    )
}

export default HomeBrancha;