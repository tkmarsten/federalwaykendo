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
import {
  FaCircleQuestion,
  FaCircleInfo,
  FaNewspaper,
  FaPersonRunning,
  FaBook,
} from "react-icons/fa6";
import { SiGooglecalendar } from "react-icons/si";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    {
      category: "Club",
      links: [
        { text: "About", link: "/about", icon: <FaCircleInfo /> },
        { text: "News", link: "/news", icon: <FaNewspaper /> },
      ],
    },
    {
      category: "Class",
      links: [{ text: "Curriculum", link: "/curriculum", icon: <FaBook /> }],
    },
    {
      category: "Resources",
      links: [
        { text: "FAQ", link: "/faq", icon: <FaCircleQuestion /> },
        {
          text: "Calendar",
          link: "https://calendar.google.com/calendar/u/1?cid=ZmVkZXJhbHdheWtlbmRvY2x1YkBnbWFpbC5jb20",
          icon: <SiGooglecalendar />,
          isExternal: true,
        },
        {
          text: "Warmup",
          link: "https://youtu.be/cpidZRL5ZbI",
          icon: <FaPersonRunning />,
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      maxWidth="xl"
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

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.category}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light">{item.category}</Button>
              </DropdownTrigger>
              <DropdownMenu>
                {item.links.map((link) => (
                  <DropdownItem key={link.text}>
                    <Button
                      as={Link}
                      href={link.link}
                      startContent={link.icon}
                      variant="light"
                      size="lg"
                      isExternal={link.isExternal}
                      className={clsx(
                        "text-foreground-500 w-full justify-start px-2",
                        {
                          "text-green-500": pathname === link.link,
                        }
                      )}
                    >
                      {link.text}
                    </Button>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Button
          href="/register"
          as={Link}
          radius="sm"
          className="font-medium text-background bg-neutral-800 max-lg:hidden"
        >
          Sign Up
        </Button>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
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
                    isExternal={link.isExternal}
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
        <NavbarMenuItem className="mt-4">
          <Button
            href="/register"
            as={Link}
            radius="sm"
            className="font-medium text-background bg-neutral-800 w-full"
          >
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
