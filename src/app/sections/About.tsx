export default function About() {
    return (
        <div id="about" className="relative flex items-center pt-[64px] justify-center lg:h-[var(--height-h-screen,800px)] sm:h-[1200px] h-fit">

            <div className="absolute flex flex-row w-[100%] h-[100%]">
                <img src={"/assets/decor-about-top-left.svg"} className="absolute left-0 top-0 h-[134px] md:block hidden"></img>
                <img src={"/assets/decor-about-top-right.svg"} className="absolute right-0 top-0 h-[134px] md:block hidden"></img>
                <img src={"/assets/decor-about-bottom-left.svg"} className="absolute left-0 bottom-0 sm:h-[134px] max-w-[15%] h-[72px]"></img>
                <img src={"/assets/decor-about-bottom-right.svg"} className="absolute right-0 bottom-0 sm:h-[134px] max-w-[15%] h-[72px]"></img>
                <div className="md:hidden block w-[100%] flex justify-center">
                    <img src={"/assets/decor-about-top-right.svg"} className="absolute top-0 h-[134px]"></img>
                </div>
            </div>


            <div className="flex lg:flex-row flex-col align-center pl-[32px] pr-[32px] sm:pb-0 pb-[84px] sm:pt-0 pt-[128px] gap-[20px]">
                <img src={"/assets/tab.svg"}></img>
                <div className="max-w-[660px] flex flex-col justify-center gap-[8px]">
                    <p className="sm:text-[60px] text-[30px] font-[700] text-[#5038BC] lg:text-left text-center">About RISTEK Verify</p>
                    <p>If you have received any certificate from RISTEK, you may verify the authenticity of your certificate through this website. 
                        Simply input your certificate ID found in your certificate and you should see the certificate details and its provided download links. 
                        Any certificate that does not match its given details through this website shall be deeemed as an unofficial certificate and therefore 
                        RISTEK holds no accountability for the recipient. It is highly encouraged for you to ask for an official verifiable certificate from our member.</p>
                    <p>
                        If for an unfortunate reason you were not given an official redeemable certificate, you may contact us here.
                    </p>
                </div>
            </div>


        </div>
    )
}