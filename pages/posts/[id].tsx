import Head from 'next/head'
import Layout from 'components/Layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import styles from 'styles/Page.module.css'

type Data = {
  id: string
  contentHtml: string
  date: string
  title: string
}

export default function Post({ postData }: { postData: Data }) {
  return (
    <Layout>
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <h1>{postData.title}</h1>
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
