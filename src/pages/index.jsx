import Head from 'next/head'
import { Header } from '../modules/Header/Header'
import { Clip } from '../modules/Clip/Clip'
import { Blog } from "../modules/Blog/Blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maria-Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Clip />
      <Blog />
    </>
  )
}
