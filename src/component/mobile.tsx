import React, { useState } from "react";

 const PhoneOtpForm = () =>{
    const [phoneNumber, setPhoneNumber] = useState('');
    const [opt, setOpt] =  useState(true);

    const handlePhoneNumber = (event : any) =>{
        setPhoneNumber(event.target.value)
    }

    const handlePhoneSumbit = (event:any) => {
        event.preventDefault();
        const regex = /[^0-9]/g;
        if(phoneNumber.length > 10 || regex.test(phoneNumber)){
            alert('Invaid Mobile Number');
            return;
        }
    }

    return <>
    
        {opt?<form onSubmit={() => {}}>
        <input type="text" value={phoneNumber} onChange={handlePhoneNumber} className="border-2 mb-2 rounded-md border-gray-500 p-1 " placeholder="Enter your mobile number" /> <br />

        <input type="submit" className="border-1 px-2 py-1 hover:bg-green-300 border-gray-500 rounded-md bg-gray-300" name="" id="" onClick={handlePhoneSumbit}/>

        </form>:
       <p>Enter Otp</p>}
    </>
}

export default PhoneOtpForm;

