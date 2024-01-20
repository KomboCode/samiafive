import React, { useState, useMemo, useContext, useEffect } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


const AddBorrower= () => {

    const navigate = useNavigate();

    const { handleAddBorrower, borrowers, borrowerSuccess } = useContext(BorrowersContext);
    

    const options = useMemo(() => countryList().getData(), []);
    // const [ value, setValue ] = useState('');

    const [ country, setCountry ] = useState("");
    const [ first, setFirst ] = useState("");
    const [ last, setLast ] = useState("");
    const [ business, setBusiness ] = useState("");
    const [ unique, setUnique ] = useState("");
    const [ gender, setGender ] = useState("Male");
    const [ title, setTitle ] = useState("");
    const [ mobile, setMobile ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birth, setBirth ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ zipcode, setZipcode ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ work, setWork ] = useState("");
    const [ credit, setCredit ] = useState("");
    // const [ desc, setDesc ] = useState("");

    useEffect(() => {
        setUnique((unique) => {
            unique = borrowers.length + 1000045 + 1;
            return unique;
        })
    }, [borrowers.length]);

    const borrower = { country, first, last, mobile, unique,
    city, birth, email, credit,work, phone, zipcode, state,
 address, title, gender, business };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(borrower);
        handleAddBorrower(borrower);
        navigate("/viewborrowers")
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
        borrowerSuccess();
        document.location.reload();            
    }

       
    const changeHandler = value => {
        setCountry(value);
        console.log(country);
    }


    return (
        <section className='addBorrower'>
            <h1>Add Borrower<span>Help</span></h1>
            <form onSubmit={handleSubmit}>
                <div className='box'>
                    <h4>Required Fields:</h4>
                </div>
               

                    <div className='country-selector'>
                        <label htmlfor="country">Country</label>
                        <Select className='selector' options={options} value={country} onChange={changeHandler}/>
                    </div>
              
                <div className='box'>
                    <h4>Optional Fields:</h4>
                </div>

                <p className='p-tag'><span className='line'>All fields are optional</span>
                but you must type at least 
                <span className='bold'>First Name</span><span className='line'>or</span> 
                <span className='bold'>Bussiness Name.</span>
                </p>
                <div className='field'>
                    <label>First Name</label>
                    <input 
                      placeholder='Enter First Name Only'
                      onChange={(e) => setFirst(e.target.value)}
                      />
                </div>

                <div className='field'>
                    <label>Middle / Last Name</label>
                    <input 
                    placeholder='Middle and Last Name'
                    onChange={(e) => setLast(e.target.value)}
                    />
                </div>

                <h5 className='and'>AND/OR</h5>

                <div className='field'>
                    <label>Bussiness Name</label>
                    <input 
                     placeholder='Business Name'
                     onChange={(e) => setBusiness(e.target.value)}
                     />
                </div>

                <div className='mstari'></div>

                <p className='below'>All of the below fields are optional:</p>
                
                <div className='field'>
                    <label>Unique Number</label>
                    <input 
                        value={unique}
                        placeholder='1000063'
                        onChange={(e) => setUnique(e.target.value)}
                        />
                </div>

                <p className='uni'>You can enter unique number to identify the borrower such as Social 
                security Number, Licence #, Registation Id...</p>

                
                <div className='field'>
                    <label>Gender</label>
                    <select
                       className='gender' 
                       onChange={(e) => setGender(e.target.value)}
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>


                <div className='field'>
                    <label>Title</label>
                    <select
                       className='gender' 
                       onChange={(e) => setTitle(e.target.value)}
                    >
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Miss.</option>
                        <option>Ms.</option>
                        <option>Dr.</option>
                        <option>Prof.</option>
                        <option>Rev.</option>
                    </select>
                </div>


                <p className='do-not'><span className='line'>Do not</span>put country code, spaces, or characters <span className='wise'>otherwise you won't
                be able to send SMS to the mobile.</span></p>
              
                <div className='phone-number'>
                    <label>Mobile</label>
                        <PhoneInput
                            international
                            placeholder="Enter phone number"
                            value={mobile}
                            onChange={setMobile}
                            countrySelectProps={{
                                unicodeFlags: true
                            }}
                        />
                </div>
              
                
              
                <div className='field'>
                    <label>Email</label>
                    <input 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>

                
              
                <div className='field'>
                    <label>Date of Birth</label>
                    <input 
                        type='date'
                        placeholder='dd/mm/yy'
                        onChange={(e) => setBirth(e.target.value)}
                        />
                </div>

                
              
                <div className='field'>
                    <label>Address</label>
                    <input 
                        placeholder='Address'
                        onChange={(e) => setAddress(e.target.value)}
                        />
                </div>

              
                <div className='field'>
                    <label>City</label>
                    <input 
                        placeholder='City'
                        onChange={(e) => setCity(e.target.value)}
                        />
                </div>

                
              
                <div className='field'>
                    <label>Province / state</label>
                    <input 
                        placeholder='Province or State'
                        onChange={(e) => setState(e.target.value)}
                        />
                </div>

                
              
                <div className='field'>
                    <label>Zipcode</label>
                    <input 
                       placeholder='Zipcode'
                       onChange={(e) => setZipcode(e.target.value)}
                       />
                </div>

                <div className='phone-number'>
                    <label className='mobile'>Landline Phone</label>
                        <PhoneInput
                            international
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
                            countrySelectProps={{
                                unicodeFlags: true
                            }}
                        />
                </div>
                
                <div className='field'>
                    <label>Working Status</label>
                    <select
                       className='gender' 
                       onChange={(e) => setWork(e.target.value)}
                    >
                        <option></option>
                        <option>Employee</option>
                        <option>Government Employee</option>
                        <option>Private Sector Employee</option>
                        <option>Owner</option>
                        <option>Student</option>
                        <option>Oversease Worker</option>
                        <option>Unemployed</option>
                    </select>
                </div>
                
              
                <div className='field'>
                    <label>Credit Score</label>
                    <input 
                       placeholder='Credit Score'
                       onChange={(e) => setCredit(e.target.value)}
                       />
                </div>

                
              
                <div className='image'>
                    <label>Borrower Photo</label>
                    <div className='upload'>
                        <div>Select image to upload</div>
                    </div>
                </div>

                
              
                <div className='desc'>
                    <label>Description</label>
                    <textarea
                      //onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                
              
                <div className='image files'>
                    <label>Borrower Files</label>
                    <div className='upload'>
                        <div>Select files to upload</div>
                        <h1>Drop files here</h1>
                    </div>
                </div>

                <div className='loan-officer'>
                    <label>Loan Offer Access</label>
                    <div className='left'>
                        <div>
                            <input type='checkbox' />
                            <h4>Issa Kombo</h4>
                        </div>
                        <h4 className='add'>-Add/Edit Loan Officers</h4>
                        <h5>-Bulk Update Borrowers With Loan Officers</h5>
                        <p>You can assign borrowers to the above loan Officers.
                         This borrower will appear in the <span>Dailly Collection Sheet </span>
                         and the <span>Past Maturity Date Loans Sheet of </span>
                         the staff. This will allow you to download the daily collection sheet
                         for each staff and the staff will know which borrower to chase for 
                         payment</p>
                    </div>
                </div>

                <button type='submit'>Submit</button>
                
            </form>
        </section>
    )
}

export default AddBorrower;