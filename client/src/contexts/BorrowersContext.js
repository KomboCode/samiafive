import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
export const BorrowersContext = createContext();

export const BorrowersContextProvider = ({ children }) => {

    const [ borrowers, setBorrowers ] = useState([]);
    const [ suggest, setSuggest ] = useState([]);
    const [ person, setPerson ] = useState({})
    const [ bsuccess, setbsuccess ] = useState(false);
    const [ lsuccess, setLsuccess ] = useState(false);
    const [kopa, setKopa ] = useState({
        name1: "Chose Borrower",
        name2: "or Search by name"
    });
 
    const [ morant, setMorant ] = useState("");

    useEffect(() => {
        const localBorrowers = localStorage.getItem("borrowers");
        if ( localBorrowers == null ) {
            console.log("There are no local borrowers");
        } else {
            setBorrowers(JSON.parse(localBorrowers));
            setSuggest(JSON.parse(localBorrowers));
        }


        const localLoan = localStorage.getItem("loan");
        if ( localLoan == null ) {
            console.log("There are no local loan");
        } else {
            setPerson(JSON.parse(localLoan));
        }


    }, []);


    const handleAddBorrower = (mtu) => {
        mtu.id = Math.random();
        mtu.principal = 3900000;

        mtu.loan = "";
        mtu.principal = "";
        mtu.due = ""; 
        mtu.release = "";
        mtu.desc = "";
        mtu.loanTitle = "";
        mtu.status = "";
        mtu.number = "";
        mtu.cycle = "";
        mtu.duration = "";
        mtu.dutime = "";
        mtu.perday = "";
        mtu.method = "";
        mtu.type = "";
        mtu.disbursed = "";
        mtu.product = "";
        mtu.cash = "";
        mtu.interest = "";  
        mtu.repayments = [];

        const newBorrowers = [...borrowers, mtu];
        setBorrowers(newBorrowers);
        localStorage.setItem("borrowers", JSON.stringify(newBorrowers));
    }

    const handleSuggest = (value) => {
        console.log("Handle suggestion", value);
        setSuggest((suggest) => {
            const pata = borrowers.filter((item) => item.first.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
            return pata;
        })
    }

    const handleAddLoan = (mtu) => {
        // const { loan, first, principal, interest,  } = mtu;

        
    const { loan, principal, release, first, desc, 
        loanTitle, status, number, cycle, duration, dutime, 
        perday, method,type, disbursed, product, cash, interest } = mtu;

        setBorrowers((borrowers) => {
            var newBorrowers = [...borrowers];
                
            newBorrowers.forEach((borrower) => {
                if ( borrower.first === first ){
                    borrower.loan = loan;
                    borrower.principal = principal;
                    borrower.due = interest * principal / 100 + parseInt(principal); 
                    borrower.release = release;
                    borrower.desc = desc;
                    borrower.loanTitle = loanTitle;
                    borrower.status = status;
                    borrower.number = number;
                    borrower.cycle = cycle;
                    borrower.duration = duration;
                    borrower.dutime = dutime;
                    borrower.perday = perday;
                    borrower.method = method;
                    borrower.type = type;
                    borrower.disbursed = disbursed;
                    borrower.product = product;
                    borrower.cash = cash;
                    borrower.interest = interest;  
                } 
                localStorage.setItem("borrowers", JSON.stringify(newBorrowers));
                return newBorrowers;
            })

        })

    }


    const handlePerson = (value) => {
        setPerson(value);
        localStorage.setItem("loan", JSON.stringify(value));
        // Cookies.set("loaner", JSON.stringify(value));
        console.log("from handlePerson invoked", value);
    }

    const handleDetails = (value) => {
        console.log("handle Details");
        borrowers.forEach((borrower ) => {
            if ( borrower.first === value ) {
                setPerson(borrower);
                Cookies.set("loaner", JSON.stringify(borrower));
                localStorage.setItem("loan", JSON.stringify(borrower));
            }
        })
    }

    const borrowerSuccess = () => {
        setbsuccess(true);
        setTimeout(() => {
            setbsuccess(false);
        }, 4000);
        console.log("borrower success invoked");
    }

    const loanSuccess = () => {
        setLsuccess(true);
        // setTimeout(() => {
        //     setLsuccess(false);
        // }, 4000);
        console.log("Loan success invoked");
    }

    const handleRepayment = ( jina, maokoto ) => {
        // var newBo = [...borrowers];
        // borrowers.forEach((borrower) => {
        //     if ( borrower.first == jina ) {
        //         console.log(borrower);
        //     }
        // })

        setBorrowers((borrowers) => {
            borrowers.forEach((borrower) => {
                if ( borrower.first === jina ) {
                    console.log("iyaapa hii");
                    borrower.repayments = [...borrower.repayments, maokoto];
                    // borrower.rapayments.push(maokoto);
                    localStorage.setItem("loan", JSON.stringify(borrower));
                    setPerson(borrower);
                }
            })
            console.log("Consolate magna",borrowers);
            localStorage.setItem("borrowers", JSON.stringify(borrowers));
            return borrowers;
        })

        // newBorrowers.forEach((borrower) => {
        //     if (borrower.first == jina) {
        //         borrower.repayments = [...borrower.repayments, maokoto];
        //     }
        // })
        // localStorage.setItem("borrowers", JSON.stringify(newBorrowers));
        // setBorrowers(newBorrowers);
    }

    const handleDelete = (id) => {
        var newBorrowers = borrowers.filter((borrower) => borrower.id !== id);
        setBorrowers(newBorrowers);
        localStorage.setItem("borrowers", JSON.stringify(newBorrowers));
    }

    const handleMorant = (value) => {
        console.log("Handle morant", value);
        setMorant(value);
    }

    const addKopa = (value1, value2) => {
        setKopa({
            name1: value1,
            name2: value2
        });
    }

    return (
        <BorrowersContext.Provider
           value = { { 
            borrowers,
            handleAddBorrower,
            handleSuggest,
            suggest,
            handleAddLoan,
            handlePerson,
            person,
            handleDetails,
            bsuccess,
            borrowerSuccess,
            loanSuccess,
            lsuccess,
            handleRepayment,
            handleDelete,
            morant,
            handleMorant,
            kopa,
            addKopa
            } }
        >{children}</BorrowersContext.Provider>
    )

}

