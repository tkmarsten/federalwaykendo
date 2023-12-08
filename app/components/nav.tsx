"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import NextImage from "next/image";
import { FaFilePen, FaCircleQuestion, FaCircleInfo } from "react-icons/fa6";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    {
      category: "Club",
      links: [{ text: "About", link: "/about", icon: <FaCircleInfo /> }],
    },
    {
      category: "Class",
      links: [{ text: "Register", link: "/register", icon: <FaFilePen /> }],
    },
    {
      category: "Resources",
      links: [{ text: "FAQ", link: "/faq", icon: <FaCircleQuestion /> }],
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className="z-50 shadow-md"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="text-foreground">
            <NextImage
              src="/logo.png"
              width={45}
              height={45}
              alt="Federal Way Kendo logo"
            />
            <p className="px-2">Federal Way Kendo</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button
          href="/register"
          as={Link}
          radius="sm"
          className="font-medium text-white bg-primary max-sm:hidden"
        >
          Join
        </Button>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="lg:w-1/3 lg:left-[67%] gap-0">
        <Accordion showDivider={false}>
          {menuItems.map((item, index) => (
            <AccordionItem
              key={`${item}-${index}`}
              aria-label={item.category}
              title={item.category}
            >
              {item.links.map((link, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Button
                    as={Link}
                    href={link.link}
                    startContent={link.icon}
                    variant="light"
                    size="lg"
                    className={clsx(
                      "text-foreground-500 w-full justify-start px-2",
                      {
                        "text-green-500": pathname === link.link,
                      }
                    )}
                  >
                    {link.text}
                  </Button>
                </NavbarMenuItem>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </NavbarMenu>
    </Navbar>
  );
}
