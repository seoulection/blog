import Link from 'next/link'
import { getSortedPostsData } from 'lib/posts'
import { Data } from 'types/posts'
import styles from 'styles/App.module.css'

interface IPosts {
  postsData: Data[]
}

export default function Posts({ postsData }: IPosts) {
  return (
    <section>
      {postsData.map(({ id, date, title }) => (
        <div className={styles.posts} key={id}>
          <small>{date}</small>
          <Link href={`/posts/${id}`}>{title}</Link>
        </div>
      ))}
    </section>
  )
}
