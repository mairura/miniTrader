import Image from "next/image";
import React, { useState } from "react";
import {
  ConnectButton,
  ConnectTab,
  DashboardSection,
  HambugerMenu,
  MobiButton,
  MobileConnect,
  MobileContainer,
  MobileView,
  NavElements,
  NavMessage,
  SearchInput,
} from "./Navbar.styles";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Keymap from "./Keymap";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const connect = () =>
  toast("Connecting...", {
    duration: 4000,
    position: "top-center",
    style: {},
    icon: "💲",
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
  return (
    <DashboardSection>
      {/*------------Mobile View--------*/}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="mobileDrawer"
      >
        <MobileView>
          <MobileContainer>
            <Image src="/Logo.svg" height={100} width={100} alt="mobilelogo" />
            <Image
              src="/Close.png"
              height={30}
              width={30}
              alt="close"
              onClick={closeMenu}
            />
          </MobileContainer>
          <Keymap />
          <MobiButton>
            <MobileConnect>Connect</MobileConnect>
          </MobiButton>
        </MobileView>
      </Drawer>

      {/*------End Mobile View---------*/}
      <NavElements>
        <HambugerMenu onClick={toggleDrawer}>
          <Image
            src="/Hambuger.svg"
            height={15}
            width={30}
            alt="hambugermenu"
          />
        </HambugerMenu>
        <NavMessage>
          Hello
          <h1>Welcome!</h1>
        </NavMessage>
        <SearchInput type="search" placeholder="Minitrade" />{" "}
        <ConnectTab>
          Connect Wallet &nbsp;
          <Image src="/Wallet.svg" height={36} width={36} alt="wallet icon" />
          &nbsp; &nbsp; &nbsp;
          <Image
            src="/EllipsisLine.svg"
            height={30}
            width={35}
            alt="ellipsis"
          />
        </ConnectTab>
        <HambugerMenu>
          <Image src="/Logo.png" height={33} width={79} alt="mainlogo" />
        </HambugerMenu>
        <ConnectButton onClick={connect}>Connect</ConnectButton>
        <Toaster />
      </NavElements>
    </DashboardSection>
  );
};

export default Navbar;
