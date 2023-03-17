import Image from "next/image";
import React, { useState } from "react";
import { MainBg } from "./dashboard.styles";

const Projections = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return <MainBg>Coming soon...</MainBg>;
};

export default Projections;
