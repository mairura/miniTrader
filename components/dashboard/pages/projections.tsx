import Image from "next/image";
import React from "react";
import { Amount, MainBg, ProgressChart, ProgressData, ProjectCash, ProjectContainer, ProjectContent, ProjectDetails, ProjectGrid, ProjectionsHeader, ProjectsHeader, RateText, StrategiesBtn, StrategiesContent, StrategiesData, StrategiesName } from "./dashboard.styles";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import toast, { Toaster } from "react-hot-toast";

const Projections = () => {
  const cancel = () =>
  toast("Cancelled Follow Request", {
    duration: 4000,
    position: "top-center",
    style: {},
    icon: "❗",
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
  const percentage = 74;

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
    }
  ];
  return <MainBg>
    <ProjectContainer>
      <ProjectsHeader>Track your Progress</ProjectsHeader>
      <ProjectContent>
        <ProjectGrid>
          <ProgressData>
            <ProgressChart>
              <CircularProgressbar value={percentage} text={`${percentage}%`} 
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: '#FF31FA',
                  textColor: '#fff',
                })}
              />
            </ProgressChart>
            <RateText>
              Your Conversion Rate
            </RateText>
          </ProgressData>
        </ProjectGrid>
        <ProjectGrid>
          <ProjectCash>
            <Amount>$23,414</Amount>
            Your Earnings
          </ProjectCash>
          </ProjectGrid>
        <ProjectGrid>
          <ProjectCash>
          <Amount>ETH</Amount>
          Your Top Stock
          </ProjectCash>
        </ProjectGrid>
      </ProjectContent> 
      <ProjectDetails>
      <ProjectionsHeader>Subscriptions</ProjectionsHeader>
      {tradersData.map((item: any, index: any) => {
          return (
        <StrategiesContent key={index}>
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
            <StrategiesBtn onClick={cancel}>
              Cancel
            </StrategiesBtn>
            <Toaster />
        </StrategiesContent>
          );
        })}
      </ProjectDetails>
    </ProjectContainer>
  </MainBg>;
};

export default Projections;
