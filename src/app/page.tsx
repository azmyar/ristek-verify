'use client'
import { useState } from "react";
import About from "./sections/About";
import Contributors from "./sections/Contributors";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import NavigationBar from "./components/NavigationBar";
import Modal from "./components/Modal";
import axios from "axios";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import React from "react";

interface Details {
    cert_id : string,
    name : string,
    eventName : string,
    asWhat : string,
    issuedDate : string
}

export default function Home() {
    const endpoint = "https://ristek-verify.cloud"

    const [modal, showModal] = useState(false);

    const [details, setDetails] = useState<Details>({
        cert_id : "",
        name : "",
        eventName : "",
        asWhat : "",
        issuedDate : ""
    });
    
    const [image, setImage] = useState('');
    const [pdf, setPdf] = useState('');

    const showToast = (message : string) => toast.info(message, {
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
    
    const verifyError = () => toast.error('Certificate with the given ID was not found!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        });

    const fetchCertificate = async (inp : string) => {
        showToast('Verifying...')

        try {
            const data = await axios.get(`${endpoint}/verify/certification/json/${inp}`)

            if (data.status == 200){
                const details = data.data
                setDetails({cert_id : inp, ... details})
                setImage(`${endpoint}/verify/certification/image/${inp}`)
                setPdf(`${endpoint}/verify/certification/pdf/${inp}`)

                toast.dismiss()
                showModal(true)
            }

        } catch (error) {
            toast.dismiss()
            verifyError()
        }
    }

  return (
    <div>   
        <ToastContainer
            transition={Slide}
            style={{ width: "450px"}}
        />

        { modal &&
            <div className="fixed z-[14] w-[100%] h-[100%] mt-[-32px] flex items-center justify-center ">
                <div className="fixed w-[100%] h-[100%] bg-black opacity-30" onClick={() => showModal(false)}></div>
                <Modal modal={() => showModal(false)} 
                    showToast={showToast} 
                    details={details} 
                    image={image} 
                    pdf={pdf}/>
            </div>
        }

        <div className="bg-[#F1F5F9] mt-[64px]">
            <NavigationBar/>
            <HeroSection modal={fetchCertificate}/>
            <About/>
            <Contributors/>
            <Footer />
        </div>
    </div>
  );
}

