import { CertDetails, TicketDetails } from "@/type";
import { copyImageToClipboard } from "copy-image-clipboard";

interface Props {
  modal: () => void;
  showToast: (message: string) => void;
  details: CertDetails | null;
  image: string;
  pdf: string;
}

export default function CertModal({
  modal,
  showToast,
  details,
  image,
  pdf,
}: Props): JSX.Element {
  return (
    <div
      id="cert-modal"
      className="fade fixed lg:h-fit h-[85%] flex flex-col items-center sm:gap-[20px] gap-[10px] p-[20px] lg:w-[1000px] md:w-[700px] w-[337px] rounded-[20px] bg-white"
    >
      <div className="flex flex-row w-full justify-between items-center">
        <img
          src={"/icons/cross_box.svg"}
          className="invisible md:block hidden"
        ></img>
        <p className="font-bold md:text-[36px] text-[30px] text-[#5038BC] ">
          RISTEK Verify
        </p>
        <img
          src={"/icons/cross_box.svg"}
          onClick={() => modal()}
          className="cursor-pointer"
        ></img>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-[30px] xl:overflow-hidden overflow-auto h-fit">
        <div className="flex flex-col md:w-[600px] w-[297px] gap-[10px]">
          <div className="flex flex-col items-center justify-center bg-[#DDDDDD] gap-[8px] rounded-[20px] md:pl-[32px] pl-[10px] md:pr-[32px] pr-[10px] md:pt-[20px] pt-[10px] md:pb-[20px] pb-[10px]">
            <div className="flex w-[100%] flex-row items-center bg-white rounded-[8px] gap-[8px] h-[32px] pl-[16px]">
              <p className="md:text-base text-xs">
                Certificate ID: <span className="font-bold">{details?.id}</span>
              </p>
              <img
                className="cursor-pointer"
                onClick={() => {
                  {
                    navigator.clipboard.writeText(details ? details.id : ""),
                      showToast("Certificate ID copied to clipboard!");
                  }
                }}
                src={"/icons/copy-icon.svg"}
              />
            </div>
            {image == "data:," || image == "" ? (
              "Loading..."
            ) : (
              <img
                className="w-[600px]"
                src={image}
              />
            )}
          </div>
          <p className="text-center md:text-[16px] text-xs font-[400px] italic leading-6">
            This certificate verifies that
            <span className="font-bold">
              {" "}
              {details ? details.recipient : ""}{" "}
            </span>
            successfully completed
            <span className="font-bold">
              {" "}
              {details ? details.eventName : ""}{" "}
            </span>
            as a
            <span className="font-bold"> {details ? details.asWhat : ""} </span>
            .
          </p>
        </div>

        <div className="flex lg:flex-col md:flex-row flex-col lg:w-[300px] md:w-[1000px] w-[250px] pb-[40px] md:gap-[20px] gap-[8px] justify-center">
          <div className="flex flex-col gap-[4px]">
            <p className="md:text-[24px] text-base font-bold">Detail:</p>

            <div className="flex md:text-[16px] text-xs flex-col gap-[4px] md:leading-6 leading-4">
              <div>
                <p>Recipent:</p>
                <p className="font-bold">{details ? details.recipient : ""}</p>
              </div>

              <div>
                <p>Issued by RISTEK for Event:</p>
                <p className="font-bold">{details ? details.eventName : ""}</p>
              </div>

              <div>
                <p>As:</p>
                <p className="font-bold">{details ? details.asWhat : ""}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            <p className="underline">
              Issued on: {details ? details.issuedDate : ""}
            </p>

            <div className="flex flex-col gap-[10px] items-center md:text-base text-[14px] text-center">
              <p className="text-[18px] font-bold">Download Certificate</p>
              <div className="flex flex-row gap-[10px]">
                <a
                  href={pdf}
                  download="Certificate.pdf"
                >
                  <button className="bg-[#C9CEFC] rounded-[8px] md:h-[48px] h-[28px] md:w-[145px] w-[86.5px] text-[#45349F]">
                    as PDF
                  </button>
                </a>

                <a
                  href={image}
                  download="Certificate.png"
                >
                  <button className="bg-[#C9CEFC] rounded-[8px] md:h-[48px] h-[28px] md:w-[145px] w-[86.5px] text-[#45349F]">
                    as PNG
                  </button>
                </a>
              </div>
              <button
                onClick={() => {
                  {
                    copyImageToClipboard(image),
                      showToast("Image copied to clipboard!");
                  }
                }}
                className="bg-[#C9CEFC] rounded-[8px] md:h-[48px] h-[32px] md:w-[100%] w-[183px] text-[#45349F]"
              >
                Copy Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
