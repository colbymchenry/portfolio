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
          <meta name="description" content="Discover my front-end React portfolio showcasing dynamic web apps. See how I leverage React's power, libraries, and clean code for engaging experiences. Let's collaborate and push the boundaries of what React can achieve!" />
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
        },
        {
          name: 'MightyShop 💎',
          stack: ['SvelteKit', 'SCSS', 'TailwindCSS', 'Firebase', 'Lightspeed'],
          body: 'MightyShop was a development at the request of a very popular Vape & CBD chain in Atlanta, GA. They needed a portal and front end customizable store to wholesale their products. I used Firebase for user authentication, realtime database, file storage, and OTP authentication. Utilizing the Shopify schema I was able to build out a similar system for myself to create editable widgets and components. Each widget has .json and a .svelte file. The .json acts as the widgets schema/settings that is fed to the widget as props and stored in Firebase for the specific configuration. To process payments and refunds, offer shipping labels, email/sms marketing, and manage customers/carts we utilized Lightspeed POS. The code cannot be publicly shared sadly at the clients request.',
          photos: ['/MightyShop/1.png', '/MightyShop/2.png', '/MightyShop/3.png', '/MightyShop/4.png', '/MightyShop/5.png', '/MightyShop/6.png', '/MightyShop/7.png', '/MightyShop/8.png', '/MightyShop/9.png', '/MightyShop/10.png', '/MightyShop/11.png']
        },
        {
          name: 'Lima One Capital 🚀',
          stack: ['ReactJS', 'SCSS', 'SalesForce', 'Mulesoft'],
          body: 'While spending my time at Swarm/SCS I was assigned the second largest client at the company, Lima One Capital. I managed this client fully backend and frontend, developing their ReactJS portal and maintaing a Mulesoft Java backend with SalesForce as a Database, User authentication, and email marketing system. I built out reusable components using ReactJS and SCSS to deliver a robust and powerful platform for lendors to approve or deny loan requests, view loan statuses, manage loans and properties, and more. Lima One Capital was built out with multiple views for Sales Reps, Clients, and Staff. Each having a unique view to manage any number of loans going on in the company.',
          photos: ['/LimaOne/1.png']
        },
        {
          name: 'Balanced Aesthetics 👩🏼‍⚕️',
          stack: ['Shopify', 'Liquid', 'CSS'],
          demo: 'https://balancedaestheticsmedspa.com/',
          github: 'https://github.com/colbymchenry/bam-shopify-theme',
          body: 'Balanced Aesthetics Medspa is a medspa located in Altanta, GA. The theme was completely custom and written with customization in mind. By utilizing Shopify\'s section schema I was able to easily offload this website to the client for them to easily maintain and update. Another unique feature is the Google Reviews, which is not implemented through a plugin but rather the Google Places API.',
          photos: ['/BAM/1.png', '/BAM/2.png', '/BAM/3.png']
        },
        {
          name: 'Mifland 👜',
          stack: ['Shopify', 'Liquid', 'SCSS'],
          demo: 'https://mifland.com/',
          body: 'Mifland was another Shopify client of mine in Atlanta, GA. They strive to bring hand made high quality apparel to their customers. Each leather bag is hand made by the owner, Tobi. They asked me to come in and completely customize their storefront. This included a custom quick add to cart on collections, custom navbar and hero video, collection blocks, and more.',
          photos: ['/Mifland/1.png', '/Mifland/2.png', '/Mifland/3.png', '/Mifland/4.png']
        }
      ]
    }, // will be passed to the page component as props
  }
}