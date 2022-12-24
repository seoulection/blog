import Link from 'next/link'
import Layout from 'components/Layout'

const ABOUT = [
  'senior software engineer @ 8th light',
  '49x17 fixed gear',
  'mech keeb enthusiast'
]

export default function AboutMe(): JSX.Element {
  return (
    <Layout>
      <>
        <h1>about me</h1>
        {ABOUT.map(desc => (
          <p key={desc}>{desc}</p>
        ))}
      </>
    </Layout>
  )
}
