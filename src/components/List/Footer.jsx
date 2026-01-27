import React from "react";

const Footer = () => {
  return (
    <div className="h-10 flex justify-center items-center bg-slate-800 text-slate-100 mt-8 sticky bottom-0">
      © All rights are reserved {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
