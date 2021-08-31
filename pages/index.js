import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  function serverless(value){
    axios.get(`/api/${value}`).then((res) => { console.log(res.data); }).catch((error) => { console.log(error); });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Vercel Serverless Test!</a>
        </h1>
      <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap', padding: '5px 0' }}>
        <button onClick={()=>serverless("hello")}>func hello</button>
        <button onClick={()=>serverless("func1")}>func 1</button>
        <button onClick={()=>serverless("func2")}>func 2</button>
        <button onClick={()=>serverless("func3")}>func 3</button>
        <button onClick={()=>serverless("func4")}>func 4</button>
        <button onClick={()=>serverless("func5")}>func 5</button>
        <button onClick={()=>serverless("func6")}>func 6</button>
        <button onClick={()=>serverless("func7")}>func 7</button>
        <button onClick={()=>serverless("func8")}>func 8</button>
        <button onClick={()=>serverless("func9")}>func 9</button>
        <button onClick={()=>serverless("func10")}>func 10</button>
        <button onClick={()=>serverless("func11")}>func 11</button>
      </div>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
