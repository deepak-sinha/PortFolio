import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
//  import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
   <div>
    <Head>
      <title>Deepak | Front-End Devloper</title>
      <meta name='description' content='Generated my next app'/>
      <link rel='icon' href='/fevicon.ioc'/>
    </Head>
    <Navbar/>
    <Main/>
    <About/>
    <Skills/>
    {/* <Projects/> Start from 1.11 */}
    <Contact/>
   </div>
  )
}
