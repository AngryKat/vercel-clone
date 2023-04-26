import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.scss"

export default function NavBar() {
    return (
        <header className={styles['nav-bar']}>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
            <nav>
                <ul className="flex">
                    <li>Features</li>
                    <li>Docs</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                    <li>Customers</li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                </ul>
            </nav>
            <div>
                <Link href="/">Contact</Link>
                <Link href="/">Login</Link>
            </div>
        </header>
    )
}