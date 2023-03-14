import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Keymap from "./Keymap";
import {
  BackArrow,
  DashboardElements,
  ElementKeymap,
  MiniImg,
  NavLogo,
  TopBar,
} from "./SideBar.styles";

const SideBar = () => {
  const router = useRouter();
  return (
    <DashboardElements>
      <ElementKeymap>
        <TopBar>
          <BackArrow>
            <Image
              src="/LeftArrow.svg"
              height={22}
              width={11}
              alt="leftarrow"
            />
          </BackArrow>
          <NavLogo>
            <Image src="/Logo.svg" height={60} width={150} alt="logo" />
          </NavLogo>
        </TopBar>
        <MiniImg />
        <Keymap />
      </ElementKeymap>
    </DashboardElements>
  );
};

export default SideBar;
