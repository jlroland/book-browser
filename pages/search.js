import Head from 'next/head'
import SearchBooks from '../components/SearchForm'

export default function Search() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Browser - Search</title>
        <link rel="icon" href="/book.png" />
      </Head>
      <main>
        <SearchBooks />
      </main>
    </div>
  )
}
