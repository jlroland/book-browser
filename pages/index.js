import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({bookList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Browser - Home</title>
        <link rel="icon" href="/book.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Book Browser
        </h1>

        <p className={styles.description}>
          Explore the collection below
        </p>

        <div className={styles.grid}>
          <ul>
            {bookList.map(({id, image_url, title, author}) => (
              <li className={utilStyles.listItem} key={id}>
                <img src={image_url ? image_url : "https://i.imgur.com/J5LVHEL.jpg"} alt="Book cover"/>
                <h3>{title}</h3>
                <p>{author}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
