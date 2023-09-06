'use client'
import { useState } from "react";
import About from "./sections/About";
import Contributors from "./sections/Contributors";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import NavigationBar from "./components/NavigationBar";
import Modal from "./components/Modal";

export default function Home() {

    const [modal, showModal] = useState(false);

    const modalHandler = () => {
        fetchImage()
        showModal(!modal)
    }

    const fetchImage = async () => {
        const img = await fetch(`https://ristek-verify-backend.vercel.app/admin/verify/certification/image/2d61e921-72fd-4f94-8ae7-00384bbff6b0`)
        console.log(img)
    }

    if (typeof window !== 'undefined'){
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
    
  return (
    <>  
        { modal &&

            <div className="fixed z-[14] w-[100%] h-[100%] flex items-center justify-center ">
                <div className="fixed w-[100%] h-[100%] bg-black opacity-30" onClick={() => showModal(false)}></div>
                <Modal modal={() => showModal(false)}/>
            </div>  
        }
        <div className="bg-[#F1F5F9]">
            <NavigationBar/>
            <HeroSection modal={modalHandler}/>
            <About/>
            <Contributors/>
            <Footer />
        </div>
      
    </>
  );
}
