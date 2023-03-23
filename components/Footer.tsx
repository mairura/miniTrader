import { Container } from "./common/Container";
import {
  FooterGrid,
  FooterHeader,
  FooterIcons,
  FooterImage,
  FooterParagraph,
  FooterWrapper,
} from "./Footer.styles";
import Image from "next/image";

export default function Footer() {
  return (
    <Container className="last-section">
      <FooterGrid>
        <FooterWrapper>
          <FooterImage>
            <Image
              priority
              src="Logo.svg"
              height={80}
              width={198}
              alt="logo"
            />
          </FooterImage>
          <FooterParagraph>
            Copyright @{new Date().getFullYear()} All Rights Reserved.
          </FooterParagraph>
        </FooterWrapper>
        <FooterWrapper>
          <FooterHeader>Features</FooterHeader>
          <FooterParagraph>Automation</FooterParagraph>
          <FooterParagraph>Aggregation</FooterParagraph>
        </FooterWrapper>

        <FooterWrapper>
          <FooterHeader>Company</FooterHeader>
          <FooterParagraph>About us</FooterParagraph>
          <FooterParagraph>Contact us</FooterParagraph>
        </FooterWrapper>

        <FooterWrapper>
          <FooterHeader>Legal</FooterHeader>
          <FooterParagraph>Terms & Condition</FooterParagraph>
          <FooterParagraph>Privacy Policy</FooterParagraph>
        </FooterWrapper>

        <FooterWrapper>
          <FooterHeader>Follow Us</FooterHeader>
          <FooterIcons>
            <Image
              priority
              src="/Twitter.svg"
              height={58}
              width={58}
              alt="twitter icon"
            />

            <Image
              priority
              src="/Linkedin.svg"
              height={58}
              width={58}
              alt="linkedin icon"
            />

            <Image
              priority
              src="/Telegram.svg"
              height={58}
              width={58}
              alt="telegram icon"
            />
          </FooterIcons>
        </FooterWrapper>
      </FooterGrid>
    </Container>
  );
}
