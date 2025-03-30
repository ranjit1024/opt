import { useEffect, useRef, useState } from "react";

function OtpInput({ length }: { length: number }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  console.log("input ref", inputRefs);

  useEffect(() => {
    if(inputRefs.current[0]){
      inputRefs.current[0].focus()
    }
  },[])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value : any = e.target.value;
    if(isNaN(value))return;
    
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    console.log(`Changed value at ${index}:`, e.target.value);
  };

  const handleClick = (index: number) => {
    console.log(`Clicked input at index ${index}`);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(`Key pressed at index ${index}:`, e.key);
  };

  return (
    <div className="h-[100vh] w-[100vw]">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            className="border-1 border-gray-500 w-[50px] px-2 py-1 mx-2 text-center mt-4 rounded-sm"
            value={value}
            ref={(input) => {
              inputRefs.current[index] = input; // ✅ Returns void
            }}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        );
      })}
    </div>
  );
}

export default OtpInput;
