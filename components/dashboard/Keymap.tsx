import React from "react";
import { useRouter } from "next/router";
import { KeyFrame, KeymapItems } from "./SideBar.styles";
import Image from "next/image";

const Keymap = () => {
  const router = useRouter();
  return (
    <div>
      <KeymapItems>
        <KeyFrame onClick={() => router.push("/dashboard")}>
          <Image src="/Meter.svg" height={30} width={30} alt="fingerup icon" />
          &nbsp; &nbsp; Risk Selection
        </KeyFrame>

        <KeyFrame onClick={() => router.push("/dashboard/strategies")}>
          {" "}
          <Image
            src="/Bishop.svg"
            height={30}
            width={30}
            alt="get cash icon"
          />{" "}
          &nbsp; &nbsp;Strategies
        </KeyFrame>

        <KeyFrame onClick={() => router.push("/dashboard/projections")}>
          {" "}
          <Image src="/Chart.svg" height={30} width={30} alt="Charticon" />{" "}
          &nbsp; &nbsp;Projections
        </KeyFrame>
      </KeymapItems>
    </div>
  );
};

export default Keymap;
