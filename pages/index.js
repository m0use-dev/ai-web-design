import Link from 'next/link';
// import Date from '../components/date';
// import Tags from '../components/tags';
import Thumbnail from '../components/thumbnail';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  // 公開されている記事だけをフィルタリングする
  const publishedPostsData = allPostsData.filter((post) => post.published);

  return {
    props: {
      allPostsData: publishedPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title ,thumbnail ,tags,published }) => (
            <li className={utilStyles.listItem} key={id}>
              {/* <Link href={`/${id}`}> */}
                <Thumbnail src={thumbnail} alt={title} />
                {title}
                {/* </Link> */}
              <br />
              {/* <Tags tags={tags} /> */}
              {/* <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

