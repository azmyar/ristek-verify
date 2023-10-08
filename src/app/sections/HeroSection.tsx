import { useState } from "react"
import { useMediaQuery } from "@mui/material"

export default function HeroSection(props : any) {

    const [data, setData] = useState ("")

    const isMobile = useMediaQuery("(max-width:1024px)")

    const handleChange = ({currentTarget: input} : any) => {
        setData(input.value)
    }

    const handleSubmit = (event : any)  => {
        event.preventDefault();
    };
    
    return (
        <div className="hero relative flex items-center justify-center lg:h-[var(--height-h-screen,800px)] sm:h-[1200px] h-[800px]">

            <div className="absolute flex flex-row w-[100%] h-[100%]">
                <img src={"/assets/decor-hero-bg-left.svg"} className="absolute"></img>
                <img src={"/assets/decor-hero-bg-right.svg"} className="absolute right-0 bottom-0"></img>
                <img src={"/assets/decor-hero-left.svg"} className="absolute left-0 bottom-0 h-[268px] md:block hidden"></img>
                <img src={"/assets/decor-hero-right.svg"} className="absolute right-0 bottom-0 h-[268px] md:block hidden"></img>
                <div className="md:hidden block w-[100%] flex justify-center">
                    <img src={"/assets/decor-hero-right.svg"} className="absolute bottom-0 h-[268px]"></img>
                </div>
            </div>
            
            <div className="text-white flex flex-col items-center md:gap-[40px] gap-[32px] text-center z-[1] sm:mt-0 mt-[-84px] pl-[16px] pr-[16px]">
                <p className="md:text-[96px] text-[60px] font-[700]">RISTEK Verify</p>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                    <p className="md:text-[36px] text-[20px] font-[700]">Verify Your Certificate!</p>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-row items-center justify-center gap-[20px]">
                                <input onChange = {handleChange} type="text" className="lg:w-[640px] md:w-[600px] w-[204px] md:h-[48px] h-[40px] rounded-[8px] text-black p-[20px] block" 
                                    placeholder={isMobile ? "RXXXX-XXXX-XXXX" : "Enter certificate ID by the format of RXXXX-XXXX-XXXX"}/>
                                <button type= "submit" className="md:w-[116px] w-[92px] md:h-[48px] h-[40px] bg-[#5038BC] rounded-[8px]" onClick={() => props.modal(data)}> Verify</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}