import Head from 'next/head'

export default function SearchResults() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Browser - Search Results</title>
        <link rel="icon" href="/book.png" />
      </Head>
    </div>
  )
}
