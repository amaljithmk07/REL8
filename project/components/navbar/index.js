import React from "react";
import navbar from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <div>
      <div className={`${navbar.navbar_main_body} `}>
        <div className={`${navbar.navbar_sub_body} container `}>
          <div>
            <Image
              src={"/images/rel8-logo.png"}
              alt=""
              width={120}
              height={50}
            />
          </div>
          <ul>
            <li>
              {" "}
              <Link href={"/"}> Features</Link>
            </li>
            <li>
              {" "}
              <Link href={"/"}> Blogs</Link>
            </li>
            <li>
              {" "}
              <Link href={"/"}> Contact</Link>
            </li>
            <li>
              {" "}
              <Link href={"/"}> Login</Link>
            </li>
            <li>
              {" "}
              <Link href={"https://www.figma.com/design/dh4zh8M6NPPQtohPO1q8Iy/Untitled?t=n6HVFd8jjuGHEvQ3-0"} className={navbar.nav_button}>
                {" "}
                REQUEST FOR DEMO{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
