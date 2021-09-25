import React from "react";

const CertificateDetail = ({ id, name, date, link }) => {
  return (
    <div
      className="bg-green rounded-md grid justify-items-start p-3 text-white font-bold shadow-lg mt-5 break-words text-left"
      style={{ gridTemplateColumns: "2fr 3fr" }}
    >
      <div>Certificate ID</div> <div>{id}</div>
      <div>Name</div> <div>{name}</div>
      <div>Date Awarded</div> <div>{date}</div>
      <div>Download Link</div>
      <div className="underline">
        <a target="_blank" href={link}>
          Click here
        </a>
      </div>
    </div>
  );
};

export default CertificateDetail;
