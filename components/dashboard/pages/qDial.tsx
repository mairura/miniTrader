import Image from "next/image";
import React, { useState } from "react";
import {
  Next,
  NextPageButton,
  Progress,
  ProgressBox,
  ProgressBoxLeft,
  QDialContainer,
  QDialContents,
  QDialElement,
  QDialTitle,
  RangeInput,
  ResBtn,
  ResNextPageButton,
  Returns,
  ReturnsData,
  ReturnYears,
  ReturnYearsButton,
  ReturnYearsContent,
  RiskTab,
  RiskTitle,
  RiskWheel,
} from "./qDial.styles";
import ReactSpeedometer from "react-d3-speedometer";
import { useRouter } from "next/router";

export default function QDial() {
  const router = useRouter();
  const [speed, setSpeed] = useState(1);
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <QDialElement>
      <QDialContainer>
        <QDialTitle> Money Return and Risk Wheel</QDialTitle>
        <QDialContents>
          <ProgressBox>
            <ProgressBoxLeft>
              <Progress>
                <Image
                  src="/units.png"
                  height={25}
                  width={470}
                  alt="units"
                  className="progress"
                />
                <Image
                  src="/unitbg.png"
                  height={5}
                  width={470}
                  alt="unitbg"
                  className="progress"
                />
              </Progress>

              <Returns>
                <ReturnsData>Returns</ReturnsData>
                <RangeInput
                  type="range"
                  min="1"
                  max="100"
                  value={speed}
                  className="rangerInput"
                  onChange={(event: any) => setSpeed(event.target.value)}
                />
              </Returns>
              <ReturnYears>
                For
                <ReturnYearsContent>
                  <Image
                    src="/Left.svg"
                    alt="lefticon"
                    height={15}
                    width={15}
                    onClick={decrementCount}
                    style={{ marginTop: "20px" }}
                  />{" "}
                  &nbsp;
                  <ReturnYearsButton>{count}&nbsp;years</ReturnYearsButton>
                  &nbsp;
                  <Image
                    src="/Right.svg"
                    height={15}
                    width={15}
                    onClick={incrementCount}
                    alt="righticon"
                    style={{ marginTop: "20px" }}
                  />
                </ReturnYearsContent>
              </ReturnYears>
              <ResBtn>
                <ResNextPageButton
                  onClick={() => router.push("/dashboard/strategies")}
                >
                  Next
                </ResNextPageButton>
              </ResBtn>
            </ProgressBoxLeft>

            <RiskTab>
              <RiskWheel>
                <ReactSpeedometer
                  width={350}
                  needleHeightRatio={0.7}
                  value={speed}
                  segments={7}
                  valueTextFontWeight={"100"}
                  valueTextFontSize={"14"}
                  labelFontSize={"8"}
                  segmentColors={[
                    "#18B497",
                    " #1FE0BD",
                    "#62E898",
                    "#F4CF34",
                    "#EF8607",
                    "#F95110",
                    "#E54141",
                  ]}
                  customSegmentLabels={[
                    {
                      text: "Very Low",
                    },
                    {
                      text: "Low",
                    },
                    {
                      text: "Moderate Low",
                    },
                    {
                      text: "Moderate",
                    },
                    {
                      text: "Moderate High",
                    },
                    {
                      text: "High",
                    },
                    {
                      text: "Very High",
                    },
                  ]}
                  ringWidth={57}
                  needleTransitionDuration={33}
                  needleColor={"#90f2ff"}
                  textColor={"#fff"}
                  minValue={0}
                  maxValue={100}
                />
              </RiskWheel>
              <RiskTitle> Risk Level</RiskTitle>
              <Next>
                <NextPageButton
                  onClick={() => router.push("/dashboard/strategies")}
                >
                  Next
                </NextPageButton>
              </Next>
            </RiskTab>
          </ProgressBox>
        </QDialContents>
      </QDialContainer>
    </QDialElement>
  );
}
