"use client";
import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import navbar from "./styles.module.scss";
import classNames from "classnames";

interface NavItem {
  name: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { name: "Docs", href: "docs" },
  { name: "Templates", href: "templates" },
  { name: "Integrations", href: "integrations" },
  { name: "Customers", href: "customers" },
  { name: "Enterprise", href: "enterprise" },
  { name: "Pricing", href: "pricing" },
];

const SignUpButtonLink = () => {
  return (
    <Link
      href="signup"
      className={classNames("flex items-center text-center", navbar.SignUpButtonLink)}
    >
      <span>Sign Up</span>
    </Link>)
}

const NavigationLinkItem = ({ name, href }: NavItem) => (
  <NavigationMenu.Item>
    <Link href={href} className="py-2 px-3">
      {name}
    </Link>
  </NavigationMenu.Item>
)

const NavigationTriggerItem = () => (
  <NavigationMenu.Item key="Features--1">
    <NavigationMenu.Trigger className="flex items-center px-3 py-2">
      Features <CaretDownIcon className={navbar.CaretDown} />
    </NavigationMenu.Trigger>
  </NavigationMenu.Item>
)

export default function NavBar() {
  return (
    <header className={classNames("flex items-center justify-center w-full", navbar.NavHeader)}>
      <div className="flex items-center text-sm w-10/12">
        <div className="flex mr-auto" style={{ flex: 1 }}>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={115}
            height={26}
            priority
          />
        </div>
        <div className="flex justify-center">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center justify-center  gap-x-2">
              <NavigationTriggerItem />
              {navigationItems.map((item) => (
                <NavigationLinkItem {...item} key={item.name} />
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
        <div className="flex items-center ml-auto justify-end" style={{ flex: 1, height: 32 }}>
          <div>
            <Link href="/" className="px-3">Contact</Link>
            <Link href="/" className="px-3">Login</Link>
          </div>
          <SignUpButtonLink />
        </div>
      </div>
    </header>
  );
}
