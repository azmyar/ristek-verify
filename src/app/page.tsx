"use client";
import { useState } from "react";
import About from "./sections/About";
import Contributors from "./sections/Contributors";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import NavigationBar from "./components/NavigationBar";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { CertDetails, TicketDetails } from "@/type";
import CertModal from "./components/CertModal";

export default function Home() {
  const endpoint = "https://ristek-verify.cloud";

  const [modal, showModal] = useState(false);

  const [certDetails, setCertDetails] = useState<CertDetails | null>(null);
  const [ticketDetails, setTicketDetails] = useState<TicketDetails | null>(
    null
  );

  const [image, setImage] = useState<string>("");
  const [pdf, setPdf] = useState<string>("");

  const showToast = (message: string) => {
    toast.info(message, {
      icon: false,
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const verifyError = () => {
    toast.error("Certificate with the given ID was not found!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const fetchCertificate = async (inp: string) => {
    showToast("Verifying...");

    try {
      const response = await axios.get(`${endpoint}/verify/${inp}`);
      console.log(response);

      if (response.status == 200) {
        const details = response.data.data;
        if (response.data.isCert) {
          setCertDetails(details);
          setImage(`${endpoint}/verify/certification/image/${inp}`);
          setPdf(`${endpoint}/verify/certification/pdf/${inp}`);

          setTicketDetails(null);
        } else {
          setTicketDetails(details);

          setCertDetails(null);
          setImage("");
          setPdf("");
        }

        toast.dismiss();
        showModal(true);
      }
    } catch (error) {
      toast.dismiss();
      verifyError();
    }
  };

  return (
    <div>
      <ToastContainer
        transition={Slide}
        style={{ width: "450px" }}
      />

      {modal && (
        <div className="fixed z-[14] w-[100%] h-[100%] mt-[-32px] flex items-center justify-center ">
          <div
            className="fixed w-[100%] h-[100%] bg-black opacity-30"
            onClick={() => showModal(false)}
          ></div>

          {certDetails ? (
            <CertModal
              modal={() => showModal(false)}
              showToast={showToast}
              details={certDetails}
              image={image}
              pdf={pdf}
            />
          ) : (
            <p className="fixed top-0 left-0">ticket modal</p>
          )}
        </div>
      )}

      <div className="bg-[#F1F5F9] mt-[64px]">
        <NavigationBar />
        <HeroSection modal={fetchCertificate} />
        <About />
        <Contributors />
        <Footer />
      </div>
    </div>
  );
}
