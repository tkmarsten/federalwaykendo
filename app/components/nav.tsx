"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Register", link: "/register" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={`bg-white z-50`}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="text-black">
            <Image
              src="/logo.png"
              width={45}
              height={45}
              alt="Federal Way Kendo logo"
            />
            <p className="px-2">Federal Way Kendo</p>
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="text-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index} max-w-screen-lg`}>
            <Link
              href={item.link}
              size="lg"
              className={clsx("text-green-700", {
                "text-green-500": pathname === item.link,
              })}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
