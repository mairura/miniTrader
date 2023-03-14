import React from "react";
import {
  WebBody,
  WebGrid,
  WebGridItem,
  WebGridItemText,
} from "./WebSection.styles";
import { Paragraph } from "@/components/common/Paragraph";
import { RightGrid } from "@/components/common/RightGrid";
import { Header } from "@/components/common/Header";
import { Photos } from "@/components/common/Image";
import { LandingButton } from "./LandingSection.styles";
import Image from "next/image";

export default function WebSection() {
  return (
    <WebBody className="webapp-bg">
      <WebGrid>
        <Photos>
          <Image
            priority
            src="/Stocks.svg"
            height={532}
            width={737}
            alt="Stocks icon"
          />
        </Photos>
        <RightGrid>
          <Header style={{ fontWeight: "700" }}>
            MiniTrade is the ‘Web3 Amazon’ for growing your wealth.
          </Header>
          <Paragraph>
            Never miss savings opportunities, staking and even high-performing
            new crypto listings
          </Paragraph>
          <Paragraph>
            MiniTrade aggregates the best performing assets globally including
            crypto, stocks, managed portfolios, private companies (startups),
            new listings, bonds, staking & savings, and even predictions
            (gaming, betting & etc)
          </Paragraph>
          <LandingButton>Learn More</LandingButton>
        </RightGrid>
      </WebGrid>
      <WebGridItem>
        <WebGridItemText>
          MiniTrade is the ‘Web3 Amazon’ for growing your wealth. Never miss
          savings opportunities, staking and even high-performing new crypto
          listings. <br />
          Web 3 aggregator of the best performing assets globally including
          crypto, stocks, managed portfolios, private companies (startups), new
          listings, bonds, staking &<br /> savings, and even predictions
          (gaming, betting & etc) ALL IN ONE WEB3 APP.
        </WebGridItemText>
        <WebGridItemText>
          Grow your wealth , even if it is as low as USD 1 dollar
          <br /> Expert team of 18 research analysts full-time selecting the
          best opportunities. You decide your risk threshold and filter
          money-growing assets that fit your style. Kinda
          <br /> like, set-it and forget-it.
          <br /> Grow your wealth while you sleep with alerts that keep you
          ahead and on top of your money
          <br />
          What’s in it for MiniTrade? We earn performance fees of 8.0% on
          profits made within the platform. What do you need? Web3 Crypto wallet
          (MetaMask, TrustWallet) topped-up with assets including: USDC, USDT,
          ETH or BNB
        </WebGridItemText>
        <WebGridItemText>
          Invest as little as USD 1 Dollar we are radically serious about
          inclusiveness and democratization and all humanity should have equal
          opportunities to grow their wealth.
        </WebGridItemText>
      </WebGridItem>
    </WebBody>
  );
}
