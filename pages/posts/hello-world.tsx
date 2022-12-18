import Link from 'next/link'

export default function HelloWorld() {
  return (
    <main>
      <h1>hello world</h1>
      <section>
        <p>hello world</p>
      </section>
      <Link href="/">back to home</Link>
    </main>
  )
}
