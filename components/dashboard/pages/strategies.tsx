import Image from "next/image";
import React, { useState } from "react";
import {
  MainBg,
  ModalBodyHeader,
  ModalBtn,
  ModalBtnIcon,
  ModalButton,
  ModalCancel,
  ModalContainer,
  ModalData,
  ModalHeader,
  ModalInput,
  StrategiesBtn,
  StrategiesContainer,
  StrategiesContent,
  StrategiesData,
  StrategiesHeader,
  StrategiesName,
} from "./dashboard.styles";
// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Strategies = () => {
  const [modalOpen, setModalOpen] = useState(false);
  //Traders Data profiles
  const tradersData = [
    {
      profile: "/Person1.svg",
      name: "Paul",
      chevron: "/UpChevron.svg",
      percentage: "+2.3%",
    },
    {
      profile: "/Person2.svg",
      name: "Yvonne",
      chevron: "/DownChevron.svg",
      percentage: "-0.8%",
    },
    ,
    {
      profile: "/Person2.svg",
      name: "Chris",
      chevron: "/UpChevron.svg",
      percentage: "+0.5%",
    },
    {
      profile: "/Person2.svg",
      name: "Belinda",
      chevron: "/UpChevron.svg",
      percentage: "+1.8%",
    },
    {
      profile: "/Person2.svg",
      name: "Belinda",
      chevron: "/UpChevron.svg",
      percentage: "+1.8%",
    },
  ];
  return (
    <MainBg>
      <StrategiesContainer>
        <StrategiesHeader>Traders</StrategiesHeader>
        {/* Trader 1 */}
        {tradersData.map((item: any) => {
          return (
            <StrategiesContent>
              <Image
                src={item.profile}
                height={30}
                width={30}
                alt="profile icon"
              />
              <StrategiesName>{item.name}</StrategiesName>
              <StrategiesData>
                <Image
                  src={item.chevron}
                  height={15}
                  width={15}
                  alt="upchevron icon"
                />
                &nbsp;&nbsp;
                <StrategiesName>{item.percentage}</StrategiesName>
              </StrategiesData>
              <StrategiesBtn onClick={() => setModalOpen(!modalOpen)}>
                Follow
              </StrategiesBtn>

              <ModalContainer>
                <Modal
                  toggle={() => setModalOpen(!modalOpen)}
                  isOpen={modalOpen}
                  className="modal"
                >
                  <ModalHeader className=" modal-header">
                    <ModalBtn
                      aria-label="Close"
                      className=" close"
                      type="button"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <ModalBtnIcon aria-hidden={true}>×</ModalBtnIcon>
                    </ModalBtn>
                  </ModalHeader>
                  <ModalBody>
                    <ModalData>
                      <ModalBodyHeader>Enter Amount to Spend</ModalBodyHeader>
                      <ModalInput type="text" placeholder="enter amount" />
                      <ModalButton>Confirm</ModalButton>
                      <ModalCancel onClick={() => setModalOpen(!modalOpen)}>
                        Cancel
                      </ModalCancel>
                    </ModalData>
                  </ModalBody>
                </Modal>
              </ModalContainer>
            </StrategiesContent>
          );
        })}
      </StrategiesContainer>
    </MainBg>
  );
};

export default Strategies;
