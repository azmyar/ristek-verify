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
                <div className="fixed w-[100%] h-[100%] bg-black opacity-30" onClick={() =>showModal(false)}></div>
                <Modal modal={() => showModal(!modal)}/>
            </div>  
        }
        <div>
            <NavigationBar/>
            <HeroSection modal={() => showModal(!modal)}/>
            <About/>
            <Contributors/>
            <Footer />
        </div>
      
    </>
  );
}
