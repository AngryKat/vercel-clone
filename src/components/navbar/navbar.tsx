"use client";
import Image from "next/image";
// import Link from "next/link";
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";
// import { CaretDownIcon } from "@radix-ui/react-icons";
import navbar from "./styles.module.scss";
// import classNames from "classnames";

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
      className={classNames("flex items-center text-center ml-3 px-3", navbar.SignUpButtonLink)}
    >
      <span>Sign Up</span>
    </Link>)
}

const NavigationLinkItem = ({ name, href }: NavItem) => (
  <NavigationMenu.Item>
    <NavigationMenu.Link asChild>
      <Link href={href} className="py-2 px-3">
        {name}
      </Link>
    </NavigationMenu.Link>
  </NavigationMenu.Item>
)

// const NavigationDropdownItem = () => (
//   <NavigationMenu.Item key="Features--1">
//     <NavigationMenu.Trigger className="flex items-center px-3 py-2">
//       Features <CaretDownIcon className={navbar.CaretDown} />
//     </NavigationMenu.Trigger>
//     <NavigationMenu.Content>
//       <ul>
//         <NavigationLinkItem href="https://stitches.dev/" name="Stitches" />
//       </ul>
//     </NavigationMenu.Content>
//   </NavigationMenu.Item>
// )

// export default function NavBar() {
//   return (
//     <header className={classNames("flex items-center justify-center w-full", navbar.NavHeader)}>
//       <div className="flex items-center text-sm w-10/12">
// <div className="flex mr-auto" style={{ flex: 1 }}>
//   <Image
//     src="/vercel.svg"
//     alt="Vercel Logo"
//     className="dark:invert"
//     width={115}
//     height={26}
//     priority
//   />
// </div>
//         <div className="flex justify-center">
//           <NavigationMenu.Root style={{ position: 'relative' }}>
//             <NavigationMenu.List className="flex items-center justify-center  gap-x-2">
//               <NavigationDropdownItem />
//               {navigationItems.map((item) => (
//                 <NavigationLinkItem {...item} key={item.name} />
//               ))}
//             </NavigationMenu.List>
//           </NavigationMenu.Root>
//         </div>
// <div className="flex items-center ml-auto justify-end" style={{ flex: 1, height: 32 }}>
//   <div>
//     <Link href="/" className="px-3">Contact</Link>
//     <Link href="/" className="px-3">Login</Link>
//   </div>
//   <SignUpButtonLink />
// </div>
//       </div>
//     </header>
//   );
// }

import React, { forwardRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import Link from "next/link";

const NavigationMenuDemo = () => {
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
          <NavigationMenu.Root style={{ position: 'relative' }}>
            <NavigationMenu.List className="flex items-center justify-center  gap-x-2">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Learn <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent" style={{ backgroundColor: "rgba(0,0,0,.1)" }}>
                  <ul className={navbar.features}>
                    <li style={{ gridRow: 'span 3' }}>
                      <NavigationMenu.Link asChild>
                        <a className="Callout" href="/">
                          <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                            <path d="M12 0H4V8H12V0Z"></path>
                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                          </svg>
                          <div className="CalloutHeading">Radix Primitives</div>
                          <p className="CalloutText">Unstyled, accessible components for React.</p>
                        </a>
                      </NavigationMenu.Link>
                    </li>

                    <ListItem href="https://stitches.dev/" title="Stitches">
                      CSS-in-JS with best-in-class developer experience.
                    </ListItem>
                    <ListItem href="/colors" title="Colors">
                      Beautiful, thought-out palettes with auto dark mode.
                    </ListItem>
                    <ListItem href="https://icons.radix-ui.com/" title="Icons">
                      A crisp set of 15x15 icons, balanced and consistent.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              {navigationItems.map((item) => (
                <NavigationLinkItem key={item.name} {...item} />
              ))}
              <NavigationMenu.Indicator className="NavigationMenuIndicator">
                <div className="Arrow" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
              <NavigationMenu.Viewport style={{ backgroundColor: "rgba(0, 0, 0, .6)" }} className="NavigationMenuViewport" />
            </div>
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
};

const ListItem = forwardRef(function ListItem({ className, children, title, ...props }: any, forwardedRef) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a className={classNames('ListItemLink', className)} {...props} href={forwardedRef}>
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
});

export default NavigationMenuDemo;
