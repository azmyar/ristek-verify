import React, { useState, useEffect } from "react";
import Head from "next/head";
import Input from "../modules/components/Input";
import Button from "../modules/components/Button";
import CertificateDetail from "../modules/components/CertificateDetail";

export default function Home() {
  const [certificateId, setCertificateId] = useState("");
  const [certificateResult, setCertificateResult] = useState(null);
  const [isResult, setIsResult] = useState(false);

  const retrieveCertificate = async (id) => {
    const response = await fetch(
      `https://api.airtable.com/v0/appGW7ar8Pr3nZnsw/ristek-oss?fields%5B%5D=id&fields%5B%5D=name&fields%5B%5D=date&fields%5B%5D=link&filterByFormula=id+%3D+'${id}'&view=main`,
      {
        headers: {
          Authorization: "Bearer keybVnaWFTwkoyWK4",
        },
      }
    );
    const certificateData = await response.json();
    setIsResult(true);
    if (certificateData.records[0]) {
      setCertificateResult(certificateData.records[0].fields);
    } else {
      setCertificateResult(null);
    }
    document.getElementById("result").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div>
      <Head>
        <title>RISTEK Verify | RISTEK Fasilkom UI</title>
      </Head>
      <div className="min-w-screen min-h-screen p-5 max-w-screen-lg m-auto text-center relative">
        <div className="font-bold font-body text-5xl text-primary">
          RISTEK Verify
        </div>
        <div className="font-body text-xl pt-4">
          Verify your RISTEK certificate!
        </div>
        <div
          className="font-bold underline text-primary cursor-pointer"
          onClick={() => setShowDesc((prev) => !prev)}
        ></div>
        <div className="font-body text-md pt-4">
          If you have received any certificate from RISTEK, you may verify the
          authenticity of your certificate through this website. Simply input
          your certificate ID found in your certificate and you should see the
          certificate details and its provided download links. Any certificate
          that does not match its given details through this website shall be
          deeemed as an unofficial certificate and therefore RISTEK holds no
          accountability for the recipient. It is highly encouraged for you to
          ask for an official verifiable certificate from our member. If for an
          unfortunate reason you were not given an official redeemable
          certificate, you may contact us{" "}
          <a
            className="underline"
            target="_blank"
            href="mailto:team@ristek.cs.ui.ac.id"
          >
            here
          </a>
          .
        </div>
        <div className="pt-4 max-w-md m-auto">
          <Input
            placeholder="Enter your certificate ID e.g. XXXX-XXXX-XXXX"
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <div className="py-8">
            <Button onClick={() => retrieveCertificate(certificateId)}>
              Verify
            </Button>
          </div>
          <div id="result">
            {isResult &&
              (certificateResult !== null ? (
                <div className="py-20">
                  <CertificateDetail
                    name={certificateResult.name}
                    date={certificateResult.date}
                    id={certificateResult.id}
                    link={certificateResult.link}
                  />
                </div>
              ) : (
                <div className="py-20">
                  No certificate found. If you think this is a mistake, please
                  contact us{" "}
                  <a
                    className="underline"
                    target="_blank"
                    href="mailto:team@ristek.cs.ui.ac.id"
                  >
                    here
                  </a>
                  .
                </div>
              ))}
          </div>
        </div>
        <footer
          className="absolute left-1/2 bottom-2"
          style={{ transform: "translate(-50%, 0)" }}
        >
          © RISTEK 2021
        </footer>
      </div>
    </div>
  );
}
