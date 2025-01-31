"use client";
import { useState } from "react";

export default function NavigationBar() {
  const [show, showMenu] = useState(false);

  if (typeof window !== 'undefined'){
    if (show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }

  return (
    <div>
      <div
        className="flex flex-row fixed z-20 bg-white h-[64px] w-[100%] top-0
                      lg:pr-[80px] sm:pr-[40px] pr-[32px]
                      lg:pl-[80px] sm:pl-[40px] pl-[32px]
                      items-center justify-between"
      >
        <a
          href="#"
          className="sm:block hidden"
        >
          <img src={"/assets/logo.svg"}></img>
        </a>

        <a
          href="#"
          className="sm:hidden block"
          onClick={() => {
            showMenu(false);
          }}
        >
          <img src={"/assets/logogram.svg"}></img>
        </a>

        <div className="hidden md:flex flex-wrap items-center gap-[8px]">
          <a href="#about">
            <button className="lg:pr-[32px] pr-[24px] lg:pl-[32px] pl-[24px] justify-center items-center">
              About
            </button>
          </a>

          <a>
            <button className="lg:pr-[32px] pr-[24px] lg:pl-[32px] pl-[24px] justify-center items-center"
            onClick={() => window.location.href = "mailto:team@ristek.cs.ui.ac.id"}>
              Contact Us
            </button>
          </a>
        </div>

        {show ? (
          <img
            src={"/icons/cross.svg"}
            className="flex md:hidden"
            onClick={() => {
              showMenu(!show);
            }}
          ></img>
        ) : (
          <img
            src={"/icons/menu.svg"}
            className="flex md:hidden"
            onClick={() => {
              showMenu(!show);
            }}
          ></img>
        )}
      </div>

      {show && (
        <div className="h-[100%] w-[100%] fixed z-[15] md:hidden">
          <div className="fade-slide-in flex flex-col justify-center fixed h-[150px] w-[100%] bg-[#E2E8F0] text-base font-semibold  gap-[16px] pl-8 pr-8 pt-4 pb-4">
            <a
              href="#"
              onClick={() => {
                showMenu(!show);
              }}
            >
              <button>Home</button>
            </a>

            <a
              href="#about"
              onClick={() => {
                showMenu(!show);
              }}
            >
              <button>About</button>
            </a>

            <a
              onClick={() => {
                showMenu(!show);
              }}
            >
              <button onClick={() => window.location.href = "mailto:team@ristek.cs.ui.ac.id"}>Contact Us</button>
            </a>

          </div>
          <div
            className="h-[100%] w-[100%] z-0 bg-black bg-opacity-30"
            onClick={() => {
              showMenu(!show);
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
