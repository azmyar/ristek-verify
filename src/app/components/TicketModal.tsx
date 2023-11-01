import { TicketDetails } from "@/type";
import React from "react";

interface Props {
  showToast: (message: string) => void;
  details: TicketDetails;
}

const TicketModal = ({ showToast, details }: Props) => {
  const copyId = () => {
    navigator.clipboard.writeText(details.id),
      showToast("Ticket ID copied to clipboard!");
  };

  return (
    <div
      id="ticket-modal"
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div className="w-[680px] h-[599px]">
        <img
          src="/images/ticket-purple-top.svg"
          className="fixed"
        />
        <div className="fixed w-full h-full my-auto flex flex-col justify-end">
          <div className="w-full h-[419px]">
            <div className="h-[76px] flex justify-end w-full items-center">
              <h1 className="font-bold text-xl text-[#45349F] mr-[60px]">
                RISTEK COUPON
              </h1>
            </div>
            <div className="px-[60px] flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <p className="text-lg text-[#E1E5FE]">Recipient</p>
                <p className="font-extrabold text-white text-4xl">
                  {details.recipient}
                </p>
              </div>

              <div className="flex gap-[46px] items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-lg text-[#E1E5FE]">Issued Date</p>
                  <p className="font-extrabold text-white text-4xl">
                    {details.issuedDate}
                  </p>
                </div>

                <div>
                  <img src="/icons/white-ellipse.svg" />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-lg text-[#E1E5FE]">Expired Date</p>
                  <p className="font-extrabold text-white text-4xl">
                    {details.expiredDate}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-lg text-[#E1E5FE]">Event's Name</p>
                <p className="font-extrabold text-white text-4xl">
                  {details.eventName}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[680px] h-[120px] bg-slate-100 rounded-[20px] flex flex-col items-center justify-center">
            <img
              src="/assets/dashed-border.png"
              className="relative bottom-[26px]"
            />

            <div className="flex w-full px-[60px] justify-between items-center relative bottom-[10px]">
              <div className="flex flex-col">
                <p className="text-lg text-[#45349F]">UUID:</p>
                <p className="font-extrabold text-[#241D49] text-4xl">
                  {details.id}
                </p>
              </div>

              <button
                className="text-white bg-[#5038BC] text-lg font-semibold w-[126px] h-[57px] rounded-lg"
                onClick={copyId}
              >
                Salin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
