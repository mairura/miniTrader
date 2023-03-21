import Image from "next/image";
import React, { useState } from "react";
import { Amount, MainBg, ModalContainer, ProgressData, ProjectCash, ProjectContainer, ProjectContent, ProjectDetails, ProjectGrid, ProjectionsHeader, ProjectsHeader, RateText, StrategiesBtn, StrategiesContent, StrategiesData, StrategiesName } from "./dashboard.styles";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Projections = () => {
  const [isOpen, setIsOpen] = useState(false);
  const percentage = 74;


  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
        <div style={{ width: 150, height: 150, strokeWidth: 40 }} >
          <CircularProgressbar value={percentage} text={`${percentage}%`} 
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
          
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
          
              // Text size
              textSize: '16px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
          
              // Colors
              pathColor: '#FF31FA',
              textColor: '#fff',
            })}
           />
        </div>
        <RateText>
          Your Conversion Rate
        </RateText>
        </ProgressData>
      </ProjectGrid>
      <ProjectGrid>
        <ProjectCash>
          <Amount>$23, 414</Amount>
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
            <StrategiesBtn>
              Cancel
            </StrategiesBtn>
        </StrategiesContent>
          );
        })}
      </ProjectDetails>
    </ProjectContainer>
  </MainBg>;
};

export default Projections;
