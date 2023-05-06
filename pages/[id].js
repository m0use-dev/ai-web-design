import Date from "../components/date";
import Thumbnail from "../components/thumbnail";
import Tags from "../components/tags";
import Head from "next/head";
import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/posts";
import main from "../components/css/main.module.css";
import common from "../components/css/common.module.css";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Thumbnail src={postData.thumbnail} alt={postData.title} />
        <h1>{postData.title}</h1>
        <Tags tags={postData.tags} />
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
