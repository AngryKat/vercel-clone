"use client";
import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";

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
    <Link href="signup"
      className="flex items-center"
      style={{
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        padding: '0 12px',
        margin: '0 12px',
        whiteSpace: 'nowrap',
        height: '100%',
      }}>
      <span>
        Sign Up
      </span>
    </Link>)
}

const NavigationLinkItem = ({ name, href }: NavItem) => (
  <NavigationMenu.Item>
    <Link href={href} style={{ padding: '8px 12px' }}>
      {name}
    </Link>
  </NavigationMenu.Item>
)

const NavigationTriggerItem = () => (
  <NavigationMenu.Item key="Features--1">
    <NavigationMenu.Trigger className="flex items-center" style={{ padding: '8px 12px' }}>
      Features <CaretDownIcon className={styles.CaretDown} />
    </NavigationMenu.Trigger>
  </NavigationMenu.Item>
)

export default function NavBar() {
  return (
      <header className="flex items-center justify-center" style={{ minHeight: 64, width: '100%' }}>
        <div className="flex items-center  px-6" style={{ fontSize: 14, width: 1248 }}>
          <div className="flex mr-auto" style={{ flex: 1 }}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
          <div className="flex justify-center">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex items-center justify-center">
                <NavigationTriggerItem />
                {navigationItems.map((item) => (
                  <NavigationLinkItem {...item} key={item.name} />
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
          <div className="flex items-center ml-auto justify-end" style={{ flex: 1, height: 32 }}>
            <div>
              <Link href="/"
                style={{

                  padding: '0 12px'
                }}>Contact</Link>
              <Link href="/"
                style={{
                  padding: '0 12px'
                }}>Login</Link>
            </div>
            <SignUpButtonLink />
          </div>
        </div>
      </header>
  );
}
