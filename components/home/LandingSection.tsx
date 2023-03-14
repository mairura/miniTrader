import {
  LandingHeader,
  LandingLeft,
  LandingParagraph,
  LandingButton,
  LandingGrid,
} from "./LandingSection.styles";
import { Wrapper } from "@/components/common/Wrapper";
import { RightGrid } from "@/components/common/RightGrid";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LandingSection() {
  const router = useRouter();
  return (
    <Wrapper className="Loding-bg">
      <LandingGrid>
        <RightGrid>
          <LandingHeader>
            World&#39;s first intuitive way to grow & Manage Funds
          </LandingHeader>
          <LandingParagraph>
            Growing wealth or savings is as important as having a job even if
            you have just one dollar as savings.
          </LandingParagraph>
          <LandingLeft>
            <LandingButton onClick={() => router.push("/login/")}>
              Go{" "}
              <Image src="/FwrdArrow.svg" height={20} width={20} alt="arrow" />
            </LandingButton>
          </LandingLeft>
        </RightGrid>
      </LandingGrid>
    </Wrapper>
  );
}
