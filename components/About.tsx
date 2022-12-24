import Link from 'next/link'
import styles from 'styles/Page.module.css'

const GITHUB = 'https://www.github.com/seoulection'
const INSTAGRAM = 'https://www.instagram.com/cloud__n9ne'
const LINKEDIN = 'https://www.linkedin.com/in/brian-sung-bb08ba106'
const SOUNDCLOUD = 'https://soundcloud.com/cloud_9000'

export default function About(): JSX.Element {
  return (
    <section data-testid="about" className={styles.about}>
      <Link href="/about">about</Link>
      <a href={GITHUB} rel="noopener noreferrer" target="_blank">github</a>
      <a href={INSTAGRAM} rel="noopener noreferrer" target="_blank">instagram</a>
      <a href={LINKEDIN} rel="noopener noreferrer" target="_blank">linkedin</a>
      <a href={SOUNDCLOUD} rel="noopener noreferrer" target="_blank">soundcloud</a>
    </section>
  )
}
