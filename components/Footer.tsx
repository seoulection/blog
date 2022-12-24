import Link from 'next/link'
import styles from 'styles/Page.module.css'

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Link href="/">back to home</Link>
    </footer>
  )
}
