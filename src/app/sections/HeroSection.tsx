export default function HeroSection(props : any) {
    return (
        <div className="hero relative flex items-center pt-[64px] justify-center lg:h-[var(--height-h-screen,800px)] sm:h-[1200px] h-[800px]">

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

                    <div className="flex flex-row items-center justify-center gap-[20px]">
                        <input type="text" className="lg:w-[640px] md:w-[600px] w-[204px] md:h-[48px] h-[40px] rounded-[8px] text-black p-[8px] lg:block hidden" 
                               placeholder="Enter certificate ID by the format of RXXXX-XXXX-XXXX"/>
                        <input type="text" className="lg:w-[640px] md:w-[600px] w-[204px] md:h-[48px] h-[40px] rounded-[8px] text-black p-[8px] lg:hidden block" 
                               placeholder="RXXXX-XXXX-XXXX"/>
                        <button className="md:w-[116px] w-[92px] md:h-[48px] h-[40px] bg-[#5038BC] rounded-[8px]" onClick={props.modal}> Verify</button>
                    </div>
                </div>

            </div>
        </div>
    )
}