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

export default function NavBar() {
  return (
    <header className={styles.NavBar}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              Features <CaretDownIcon className={styles.CaretDown} />
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          {navigationItems.map(({ name, href }) => (
            <NavigationMenu.Item>
              <Link href={href}>{name}</Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <div>
        <Link href="/">Contact</Link>
        <Link href="/">Login</Link>
      </div>
    </header>
  );
}
