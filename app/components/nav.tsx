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
  Button,
} from "@nextui-org/react";
import NextImage from "next/image";
import { FaHouse, FaFilePen, FaCircleQuestion } from "react-icons/fa6";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    { text: "Home", link: "/", icon: <FaHouse /> },
    { text: "Register", link: "/register", icon: <FaFilePen /> },
    { text: "FAQ", link: "/faq", icon: <FaCircleQuestion /> },
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
            <NextImage
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

      <NavbarMenu className="lg:w-1/3 lg:left-[66%] gap-0">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="border-b-2">
            <Button
              as={Link}
              href={item.link}
              startContent={item.icon}
              variant="light"
              size="lg"
              className={clsx("text-foreground-500 w-full justify-start px-2", {
                "text-green-500": pathname === item.link,
              })}
            >
              {item.text}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
