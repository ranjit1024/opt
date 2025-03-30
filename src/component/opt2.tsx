import { use, useEffect, useRef, useState } from "react";
function Otp2(){
    const [otp,setOtp] = useState(new Array(4).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    console.log(otp);
    useEffect(() => {
        inputRefs.current[0]?.focus()
    },[]);

    return <div className="w-[100%] flex justify-center mt-3">
        {
            otp.map((value,index) => {
                console.log(value)
                return <div key={index} className="w-[70px] flex gap-1 ">
                    <input 
                    value={value}
                    type="text" 
                    className="border-1 w-[100%] px-2 py-1 ml-3 text-center"
                    ref={(input) => {
                        inputRefs.current[index] = input;
                      }}
                    onChange={(e)=>{
                       const value = e.target.value;
                       const newOtp = [...otp];
                       newOtp[index] = value.substring(value.length - 1);
                       setOtp(newOtp);

                       if(value && inputRefs.current[index+1]){
                        inputRefs.current[index+1]?.focus();
                        return;
                    }
                    }}
                    onKeyDown={(e)=>{
                        if(e.key === "Backspace" && !value){
                            console.log('fds')
                            inputRefs.current[index - 1]?.focus()
                        }
                    }}
                    />
                    </div>
            })
        }
    </div>
}

export default Otp2;