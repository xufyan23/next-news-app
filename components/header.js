import {useRouter}  from "next/router";
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
	const router = useRouter()
	return (
			<nav className={styles.header}>
				<Link href="/">Home</Link>
				<Link href="/feed/1">Feed</Link>
				<Link href="/eom">EOM</Link>
			</nav>
	)
}

export default Header;
