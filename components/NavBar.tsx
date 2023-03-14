import {
  NavbarBody,
  NavbarElement,
  NavbarGrid,
  NavbarIcon,
} from "./NavBar.styles";
import { Button } from "@/components/common/Button";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <NavbarElement>
      <NavbarBody>
        <NavbarIcon>
          <Image priority src="/Logo.svg" height={80} width={198} alt="logo" />
        </NavbarIcon>
        <NavbarGrid>
          <Button onClick={() => router.push("/login/")}>Go</Button>
        </NavbarGrid>
      </NavbarBody>
    </NavbarElement>
  );
}
