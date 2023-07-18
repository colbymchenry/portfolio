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
          body: 'Full-Schedule offers a comprehensive Medspa appointment scheduling solution that combines essential features such as marketing tools, seamless integration with Google Calendar, a customizable checkout system utilizing Clover, a staff scheduler, SMS/Email marketing capabilities, integration with Clover POS, and more. The platform also incorporates full Pixel tracking and seamless integration with Google Analytics. Notably, this solution was developed from scratch, without relying on any pre-existing UI libraries. Initially built using React with Next.JS, it was subsequently refactored and migrated to SvelteKit, enhancing its performance and user experience.<br /><br />Demo<br />Username: test@test.com | Password: password',
          photos: ['/FullSchedule/1.png', '/FullSchedule/2.png', '/FullSchedule/3.png', '/FullSchedule/4.png', '/FullSchedule/5.png', '/FullSchedule/6.png']
        },
        {
          name: 'MightyShop 💎',
          stack: ['SvelteKit', 'SCSS', 'TailwindCSS', 'Firebase', 'Lightspeed'],
          body: 'MightyShop was developed in response to a prominent Vape & CBD chain based in Atlanta, GA, seeking a robust solution for their wholesale product portal and customizable front-end store. To meet their requirements, I implemented Firebase for user authentication, real-time database functionality, file storage, and OTP authentication. Leveraging the Shopify schema, I successfully constructed a similar system that empowered me to create editable widgets and components. Each widget comprises a .json file and a corresponding .svelte file. The .json file serves as the widget\'s schema and settings, which are passed as props and stored in Firebase for specific configurations.<br /><br />To facilitate payment processing, refunds, shipping labels, as well as email and SMS marketing, and customer/cart management, we seamlessly integrated with Lightspeed POS. Due to client confidentiality, the code cannot be shared publicly, as per their request.',
          photos: ['/MightyShop/1.png', '/MightyShop/2.png', '/MightyShop/3.png', '/MightyShop/4.png', '/MightyShop/5.png', '/MightyShop/6.png', '/MightyShop/7.png', '/MightyShop/8.png', '/MightyShop/9.png', '/MightyShop/10.png', '/MightyShop/11.png']
        },
        {
          name: 'Lima One Capital 🚀',
          stack: ['ReactJS', 'SCSS', 'SalesForce', 'Mulesoft'],
          body: 'At Swarm/SCS, I successfully managed Lima One Capital, the company\'s second-largest client. This encompassed full-stack responsibilities, including developing their ReactJS portal and maintaining the Mulesoft Java backend integrated with SalesForce. Utilizing reusable ReactJS components and SCSS, I delivered a powerful platform enabling lendors to approve/deny loan requests, monitor loan statuses, and manage loans/properties. Unique views were created for Sales Reps, Clients, and Staff, facilitating efficient loan management.',
          photos: ['/LimaOne/1.png']
        },
        {
          name: 'Net Scraper 👾',
          stack: ['ReactJS', 'SCSS', 'TypeScript', 'TailwindCSS', 'ChatGPT', 'Google API', 'BigCommerce API'],
          body: 'Net Scraper is an advanced Platform as a Service (PaaS) solution that leverages a powerful stack of technologies, including Tailwind, TypeScript, ReactJS, Puppeteer, Google Drive API, ChatGPT API, BigCommerce API, and more. Its primary objective is to provide users with a seamless experience in creating their own web-crawling tool. With Net Scraper, users can effortlessly navigate through collection pages and extract comprehensive product information.<br /><br />All the extracted data, along with any scraped images, is securely stored in Google Firebase. This centralized repository enables users to export the collected information to Google Drive sheets or BigCommerce.<br /><br />As an added convenience, Net Scraper facilitates image uploads from Firebase to Google Drive. Additionally, users can leverage the capabilities of ChatGPT to format or rewrite exported data, ensuring the utmost accuracy and precision in their output.',
          photos: ['/NetScraper/1.jpg', '/NetScraper/2.jpg', '/NetScraper/3.jpg', '/NetScraper/4.jpg', '/NetScraper/5.jpg', '/NetScraper/5.1.jpg', '/NetScraper/6.jpg', '/NetScraper/7.jpg', '/NetScraper/8.jpg', '/NetScraper/9.jpg']
        },
        {
          name: 'Strata 😎',
          stack: ['Shopify', 'Liquid', 'SCSS'],
          demo: 'https://strataclothing.com/',
          body: 'During my collaboration with Strata, a Shopify client specializing in premium apparel, I had the opportunity to showcase my skills on their storefront. Strata is known for its commitment to delivering top-notch clothing items while prioritizing effective marketing strategies and establishing a strong brand presence. They sought my expertise in customizing their storefront to reflect their distinctive identity.<br /><br />I undertook an extensive customization initiative, meticulously refining different aspects of the website to impeccably align with Strata\'s brand. This encompassed crafting a personalized quick add-to-cart feature exclusively for their collections, conceptualizing and designing unique custom collections and components, creating a distinct and visually appealing navbar, and integrating customized collection blocks. Moreover, I introduced additional features that were meticulously tailored to elevate the overall user experience and reinforce the brand\'s distinctive presentation.',
          photos: ['/Strata/1.png', '/Strata/2.png', '/Strata/3.png', '/Strata/4.png', '/Strata/5.png']
        },
        {
          name: 'Balanced Aesthetics 👩🏼‍⚕️',
          stack: ['Shopify', 'Liquid', 'CSS'],
          demo: 'https://balancedaestheticsmedspa.com/',
          github: 'https://github.com/colbymchenry/bam-shopify-theme',
          body: 'Balanced Aesthetics Medspa, situated in Atlanta, GA, boasts a completely customized theme designed with adaptability in focus. Leveraging Shopify\'s section schema, I streamlined the process of transferring website ownership to the client, empowering them to effortlessly maintain and update their online presence.<br /><br />One standout feature is the integration of Google Reviews, which was achieved through direct utilization of the Google Places API, rather than relying on a plugin. This ensures a seamless and reliable display of authentic customer reviews, enhancing the credibility and reputation of the medspa.',
          photos: ['/BAM/1.png', '/BAM/2.png', '/BAM/3.png']
        },
        {
          name: 'Mifland 👜',
          stack: ['Shopify', 'Liquid', 'SCSS'],
          demo: 'https://mifland.com/',
          body: 'In Atlanta, GA, I collaborated with Mifland, a Shopify client dedicated to offering meticulously crafted, high-quality apparel to their customers. With a strong emphasis on handmade leather bags personally crafted by the owner, Tobi, they sought my expertise to fully customize their storefront.<br /><br />I embarked on a comprehensive customization project, tailoring various elements to align with Mifland\'s unique brand identity. This encompassed creating a custom quick add-to-cart functionality for collections, designing a bespoke navbar and captivating hero video, implementing customized collection blocks, and delivering additional tailor-made features to enhance the overall user experience and brand presentation.',
          photos: ['/Mifland/1.png', '/Mifland/2.png', '/Mifland/3.png', '/Mifland/4.png']
        }
      ]
    }, // will be passed to the page component as props
  }
}