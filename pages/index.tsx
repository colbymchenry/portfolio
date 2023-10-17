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
          photos: ['/FullSchedule/1.jpg', '/FullSchedule/2.jpg', '/FullSchedule/3.jpg', '/FullSchedule/4.jpg', '/FullSchedule/5.jpg', '/FullSchedule/6.jpg']
        },
        {
          name: 'RegenMD 👩🏼‍⚕️',
          stack: ['Shopify', 'Liquid', 'CSS', 'ReactJS', 'TypeScript', 'JS'],
          demo: 'https://regenmdwellness.com/',
          body: 'RegenMD, headquartered in Atlanta, GA, specializes in delivering Telehealth peptide services directly to your home. Their comprehensive range includes peptides and hormone treatments for a wide array of needs. My task was to design a website that exudes professionalism while maintaining a sense of comfort and safety. Additionally, I undertook extensive custom development, including the creation of a React-based peptide finder quiz, seamlessly integrated with Shopify. I also crafted a custom state map selector, allowing users to easily locate providers and services within their coverage area.',
          photos: ['/RegenMD/1.jpg', '/RegenMD/2.jpg', '/RegenMD/3.jpg', '/RegenMD/4.jpg', '/RegenMD/5.jpg', '/RegenMD/6.jpg', '/RegenMD/7.jpg', '/RegenMD/8.jpg', '/RegenMD/9.jpg', '/RegenMD/10.jpg', '/RegenMD/11.jpg']
        },
        {
          name: 'MyGPT 🔧',
          stack: ['ReactJS', 'NodeJS', 'NextJS', 'TypeScript', 'ChatGPT'],
          demo: 'https://gptbinder.vercel.app/',
          github: 'https://github.com/colbymchenry/mygpt',
          body: "My friend, who owns multiple eCommerce brands, once shared his experience of managing various GPT models across his business operations. However, he found that using OpenAI's platform became cluttered and challenging to keep organized. This led to the creation of MyGPT, a platform designed to simplify the process of creating pre-prompted GPT profiles, effectively turning them into useful 'tools.' To get started, simply sign up and add your GPT token to your account through the Settings menu, accessible via the avatar dropdown in the header. Explore the convenience of MyGPT today!",
          photos: ['/MyGPT/1.jpg', '/MyGPT/2.jpg', '/MyGPT/3.jpg', '/MyGPT/4.jpg', '/MyGPT/5.jpg']
        },
        {
          name: 'Simple Portfolio 🫵',
          stack: ['ReactJS'],
          body: "Akanni Marketing is a specialized agency catering exclusively to eCommerce brands. Our mission for this client was clear: create a website that is both elegantly simple and highly readable, while also incorporating compelling calls to action. To streamline the client's workflow, we seamlessly integrated TypeForm, allowing for easy configuration of their intake forms for new business inquiries.",
          demo: 'https://akanni.marketing',
          photos: ['/AkanniMarketing/1.jpg', '/AkanniMarketing/2.jpg', '/AkanniMarketing/3.jpg', '/AkanniMarketing/4.jpg']
        },
        {
          name: 'MightyShop 💎',
          stack: ['SvelteKit', 'SCSS', 'TailwindCSS', 'Firebase', 'Lightspeed'],
          body: 'MightyShop was developed in response to a prominent Vape & CBD chain based in Atlanta, GA, seeking a robust solution for their wholesale product portal and customizable front-end store. To meet their requirements, I implemented Firebase for user authentication, real-time database functionality, file storage, and OTP authentication. Leveraging the Shopify schema, I successfully constructed a similar system that empowered me to create editable widgets and components. Each widget comprises a .json file and a corresponding .svelte file. The .json file serves as the widget\'s schema and settings, which are passed as props and stored in Firebase for specific configurations.<br /><br />To facilitate payment processing, refunds, shipping labels, as well as email and SMS marketing, and customer/cart management, we seamlessly integrated with Lightspeed POS. Due to client confidentiality, the code cannot be shared publicly, as per their request.',
          photos: ['/MightyShop/1.jpg', '/MightyShop/2.jpg', '/MightyShop/3.jpg', '/MightyShop/4.jpg', '/MightyShop/5.jpg', '/MightyShop/6.jpg', '/MightyShop/7.jpg', '/MightyShop/8.jpg', '/MightyShop/9.jpg', '/MightyShop/10.jpg', '/MightyShop/11.jpg']
        },
        {
          name: 'Lima One Capital 🚀',
          stack: ['ReactJS', 'SCSS', 'SalesForce', 'Mulesoft'],
          body: 'At Swarm/SCS, I successfully managed Lima One Capital, the company\'s second-largest client. This encompassed full-stack responsibilities, including developing their ReactJS portal and maintaining the Mulesoft Java backend integrated with SalesForce. Utilizing reusable ReactJS components and SCSS, I delivered a powerful platform enabling lendors to approve/deny loan requests, monitor loan statuses, and manage loans/properties. Unique views were created for Sales Reps, Clients, and Staff, facilitating efficient loan management.',
          photos: ['/LimaOne/1.jpg']
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
          photos: ['/Strata/1.jpg', '/Strata/2.jpg', '/Strata/3.jpg', '/Strata/4.jpg', '/Strata/5.jpg']
        },
        {
          name: 'Balanced Aesthetics 👩🏼‍⚕️',
          stack: ['Shopify', 'Liquid', 'CSS'],
          demo: 'https://balancedaestheticsmedspa.com/',
          github: 'https://github.com/colbymchenry/bam-shopify-theme',
          body: 'Balanced Aesthetics Medspa, situated in Atlanta, GA, boasts a completely customized theme designed with adaptability in focus. Leveraging Shopify\'s section schema, I streamlined the process of transferring website ownership to the client, empowering them to effortlessly maintain and update their online presence.<br /><br />One standout feature is the integration of Google Reviews, which was achieved through direct utilization of the Google Places API, rather than relying on a plugin. This ensures a seamless and reliable display of authentic customer reviews, enhancing the credibility and reputation of the medspa.',
          photos: ['/BAM/1.jpg', '/BAM/2.jpg', '/BAM/3.jpg']
        },
        {
          name: 'Mifland 👜',
          stack: ['Shopify', 'Liquid', 'SCSS'],
          demo: 'https://mifland.com/',
          body: 'In Atlanta, GA, I collaborated with Mifland, a Shopify client dedicated to offering meticulously crafted, high-quality apparel to their customers. With a strong emphasis on handmade leather bags personally crafted by the owner, Tobi, they sought my expertise to fully customize their storefront.<br /><br />I embarked on a comprehensive customization project, tailoring various elements to align with Mifland\'s unique brand identity. This encompassed creating a custom quick add-to-cart functionality for collections, designing a bespoke navbar and captivating hero video, implementing customized collection blocks, and delivering additional tailor-made features to enhance the overall user experience and brand presentation.',
          photos: ['/Mifland/1.jpg', '/Mifland/2.jpg', '/Mifland/3.jpg', '/Mifland/4.jpg']
        }
      ]
    }, // will be passed to the page component as props
  }
}