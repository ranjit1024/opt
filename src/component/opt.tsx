import { useRef, useState } from "react";

function OtpInput({length }:{length:number}){
    const [otp,setOtp] = useState(new Array(length).fill(''));
    const inputRef =  useRef<(HTMLInputElement | null)[]>([]);;


    const handleChange =(arg1:any,arg2:any ) => {}
    const handleClick =(arg1:any) => {}
    const handleKeyDown =(arg1:any, arg2:any) => {}

    return <div className="h-[100vh] w-[100vw]">
        {
           otp.map((value, index) => {
            return <input key={index} type="text" className="border-1 border-gray-500
            w-[50px] px-2 py-1 mx-2 text-center mt-4 rounded-sm"
             value={value}
             onChange={(e)=>handleChange(index,e)}
             onClick={() =>{handleClick(index)}}
             onKeyDown={(e) => {handleKeyDown(index,e)}}
             ref={(input) => (inputRef.current[index] = input)}
             />
           })
        }
    </div>
}
export default OtpInput;