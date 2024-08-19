import React from "react";
import footer from "@/styles/Footer.module.css";
import Image from "next/image";
const Index = () => {
  return (
    <div className={footer.footer_main_body}>
      <div className={`${footer.footer_container} container`}>
        <Image src={"/images/rel8-logo.png"} height={85} width={200} alt="" />
      </div>
    </div>
  );
};

export default Index;
