import Link from "next/link";
import Date from "../components/date";
import Tags from "../components/tags";
import Thumbnail from "../components/thumbnail";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import main from "../components/css/main.module.css";
import common from "../components/css/common.module.css";
import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // 公開されている記事だけをフィルタリングする
  const publishedPostsData = allPostsData.filter((post) => post.published);
  // 5件のみ表示
  const limitedPostsData = publishedPostsData.slice(0, 100);

  return {
    props: {
      // 全件表示
      allPostsData: publishedPostsData,
      // 100件のみ表示
      // allPostsData: limitedPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        {/* <h2}>Blog</h2> */}
        <ul className={main['posts-list']}>
          {allPostsData.map(
            ({ id, date, title, thumbnail, tags, published }) => (
              <li className={main['posts-item']} key={id}>
                {/* <Link href={`/${id}`}> */}
                <Thumbnail className={main['posts-item__thumbnail']} src={thumbnail} alt={title} />
                <p className={main['posts-item__title']}>{title}</p>
                {/* </Link> */}
                <br />
                {/* <Tags tags={tags} /> */}
                {/* <small>
                <Date dateString={date} />
              </small> */}
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
