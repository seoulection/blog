import Head from 'next/head'
import Layout from 'components/Layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import styles from 'styles/App.module.css'
import { Data } from 'types/posts'

interface IPost {
  postData: Data
}

export default function Post({ postData }: IPost) {
  return (
    <Layout>
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <h1>{postData.title}</h1>
        <p className={styles.date}>{postData.date}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: Data }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}
