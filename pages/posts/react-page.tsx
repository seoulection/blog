import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/Layout'
import styles from 'styles/ReactPage.module.css'

export default function ReactPage(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)

  return (
    <Layout>
      <>
        <h1>react page</h1>
        <section>
          <p>counter: {counter}</p>
          <div className={styles.buttonContainer}>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
          </div>
        </section>
      </>
    </Layout>
  )
}
