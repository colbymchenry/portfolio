import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home({ projects }: any) {
  return (
    <>
      <Navbar />
      <main>
        <Head>
          <title>Colby McHenry | Lead UI Developer</title>
        </Head>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      projects: [
        {
          name: 'Full Schedule 💉',
          stack: ['React', 'Svelte', 'SCSS', 'Firebase'],
          github: 'https://github.com/colbymchenry/fullschedule.co',
          githubSvelte: 'https://github.com/colbymchenry/full-schedule',
          demo: 'https://full-schedule-eight.vercel.app/admin',
          body: 'Full-Schedule is an all in one Medspa appointment scheduler, equipped with marketing tools, Google Calendar integration, customizable checkout using Clover, staff scheduler, SMS/Email marketing, Clover POS integration, and more. With full Pixel tracking and Google Analytics integrated. This was developed without a UI library. Was first developed in React with Next.JS then refactored and moved to SvelteKit.<br /><br />Demo<br />Username: test@test.com | Password: password',
          photos: ['/FullSchedule/1.png', '/FullSchedule/2.png', '/FullSchedule/3.png', '/FullSchedule/4.png', '/FullSchedule/5.png', '/FullSchedule/6.png']
        }
      ]
    }, // will be passed to the page component as props
  }
}