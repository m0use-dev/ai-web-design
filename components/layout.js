import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import header from "./css/header.module.css";
import main from "./css/main.module.css";
import common from "./css/common.module.css";
import footer from "./css/footer.module.css";
import Link from "next/link";

const name = "AIデザインショーケース";
export const siteTitle = "AIデザインショーケース";

export default function Layout({ children, home }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={header['header']}>
        {home ? (
          <>
            <Image
              priority
              src={`${router.basePath}/images/theme/dummy.png`}
              height={144}
              width={144}
              className={header['logo']}
              alt=""
            />
            <h1 className={header['title']}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src={`${router.basePath}/images/theme/dummy.png`}
                height={108}
                width={108}
                className={header['logo']}
                alt=""
              />
            </Link>
            <h2>
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer className={footer['footer']}>
        <small className={footer['copyright']}>&copy; AIがWEBサイトのデザイン</small>
      </footer>
    </div>
  );
}
