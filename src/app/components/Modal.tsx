import ContributorsCard from "./ContributorsCard";


export default function Modal(props : any) : JSX.Element {

    return (
        <div className="fade fixed mt-[64px] flex flex-col items-center sm:gap-[20px] md:gap-[40px] gap-[12px] sm:p-[40px] md:p-[60px] p-[20px] w-[90%] rounded-[20px] bg-white">
            <div className="flex flex-row w-full justify-between items-center">
                <img src={"/icons/cross_box.svg"} className="invisible lg:block hidden"></img>
                <p className="font-bold md:text-[36px] text-[30px] text-[#5038BC]">
                    RISTEK Verify
                </p>
                <img src={"/icons/cross_box.svg"} onClick={() => props.modal()} className="cursor-pointer"></img>
            </div>

            <div className="flex flex-row items-center ">
                <div className="flex flex-col justify-center bg-[#DDDDDD] rounded-[20px] pl-[32px] pr-[32px] pt-[20px] pb-[20px]">
                    <div className="flex flex-row items-center bg-white rounded-[8px] gap-[8px] h-[32px] pl-[16px]">
                        <p>Certificate ID: RYYY-UUID</p>
                        <img src={"/icons/copy-icon.svg"}/>
                    </div>
                    <img src={"/images/certificate-placeholder.svg"}/>
                </div>

                <div>

                </div>
            </div>
           
        </div>
    )
}