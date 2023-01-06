import Head from 'next/head';
import styles from '../styles/modules/layout.module.css';
import utilStyles from '../styles/modules/utils.module.css';
import Link from 'next/link';

const name = 'Takanobu';
export const siteTitle = 'Next.js blog';

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile-img.jpg"
              className={`${utilStyles.borderCircle} ${utilStyles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile-img.jpg"
              className={utilStyles.borderCircle}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Homeへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
