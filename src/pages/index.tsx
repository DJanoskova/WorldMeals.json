import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldMeals.json</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <p>
        A list of meals from all around the world!
        </p>
        <p>
        Contribute the list and feel free to use it for your apps!
        </p>
        <p>
        You can find the list in `/public/meals.json` and call `/api/meals` to fetch the list in your app.
                </p>
        <p>
          <a href="https://github.com/DJanoskova/WorldMeals.json" target='_blank' rel='noopener noreferrer'>
            https://github.com/DJanoskova/WorldMeals.json
            </a>
        </p>
      </main>
    </>
  )
}
