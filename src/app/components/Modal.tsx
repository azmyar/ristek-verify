

export default function Modal(props : any) : JSX.Element {

    return (
        <div className="fade fixed mt-[64px] flex flex-col items-center sm:gap-[20px] gap-[10px] p-[20px] lg:w-[1000px] w-[700px] rounded-[20px] bg-white">
            <div className="flex flex-row w-full justify-between items-center">
                <img src={"/icons/cross_box.svg"} className="invisible lg:block hidden"></img>
                <p className="font-bold md:text-[36px] text-[30px] text-[#5038BC]">
                    RISTEK Verify
                </p>
                <img src={"/icons/cross_box.svg"} onClick={() => props.modal()} className="cursor-pointer"></img>
            </div>

            <div className="flex lg:flex-row flex-col items-center gap-[30px]">
                <div className="flex flex-col w-[600px] gap-[10px]">
                    <div className="flex flex-col justify-center bg-[#DDDDDD] rounded-[20px] pl-[32px] pr-[32px] pt-[20px] pb-[20px] ">
                        <div className="flex flex-row items-center bg-white rounded-[8px] gap-[8px] h-[32px] pl-[16px]">
                            <p>Certificate ID: RYYY-UUID</p>
                            <img src={"/icons/copy-icon.svg"}/>
                        </div>
                        <img src={"/images/certificate-placeholder.svg"}/>
                    </div>
                    <p className="text-center text-[16px] font-[400px] italic">
                    This certificate verifies that Amarina Baskoro successfully completed Product Management Guest Class as a Speaker.
                    </p>
                </div>

                <div className="flex lg:flex-col flex-row lg:w-[300px] w-[1000px] pb-[40px] gap-[20px] justify-center">
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[24px] font-bold">
                            Detail:
                        </p>

                        <div>

                            <p className="text-[16px]">
                                Recipent:
                            </p>
                            <p className="text-[16px] font-bold">
                                Amarina Baskoro
                            </p>

                            <p className="text-[16px]">
                                Issued by RISTEK for Event:
                            </p>
                            <p className="text-[16px] font-bold">
                                Product Management Guest Class
                            </p>

                            <p className="text-[16px]">
                                As:                    
                            </p>
                            <p className="text-[16px] font-bold">
                                Speaker                    
                            </p>
                        </div>
                    </div>

                    <div>
                        <p>
                            Issued on: 23/07/2023
                        </p>

                        <div className="flex flex-col gap-[10px] text-center">
                            <p className="text-[18px] font-bold">
                                Download Certificate
                            </p>
                            <div className="flex flex-row gap-[10px]">
                                <button className="bg-[#C9CEFC] rounded-[8px] h-[48px] w-[145px]">as PDF</button>
                                <button className="bg-[#C9CEFC] rounded-[8px] h-[48px] w-[145px]">as PNG</button>
                            </div>
                            <button className="bg-[#C9CEFC] rounded-[8px] h-[48px] w-[100%]">Copy Image</button>
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    )
}