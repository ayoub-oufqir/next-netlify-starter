import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillPhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaReact,FaNodeJs } from 'react-icons/Fa';
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import { useState } from 'react';
import JsScript from '../public/script.js';
import Script from 'next/script'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Ayoub Oufqir Portfolio Website</title>
        <meta name="description" content="Ayoub Oufqir's portfolio website created with reactJS, next.js and Twailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
        <script async src='../public/script.js'/>
        {/* <link rel="stylesheet" href="../public/output.css" /> */}
      </Head>

      <main className='bg-slate-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between '>
            <h1 className='text-xl font-burtons dark:text-gray-50'>Developed By Ayoub</h1>
            <ul className='flex items-center'>
              <li >
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-100' />
              </li>
              <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-4 text-teal-500 font-medium md:text-6xl'>Ayoub Oufqir</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-100'>Software Engineer Soon :)</h3>
            {/* <p className='text-md py-5 leading-8 mx-auto text-gray-800 md:text-xl max-w-lg dark:text-gray-200'>Full Stack JS developement is my Thing <br /> Currently looking for an End of Studies Enternship in Node.js and React/Next.js stack</p> */}
            <p className='text-md py-5 leading-8 mx-auto text-gray-800 md:text-xl max-w-xl dark:text-gray-200 tracking-wide'>Etudiant en cycle d'ingénieur à INSEA Rabat, Filière Data and Software engineering, a la recherche d'un stage PFE en développement full stack react/node.js</p>
            <div className='flex justify-center text-5xl gap-16 '>
              <FaReact style={{color:'#5ed3f3'}} className='font-bold'/>
              <FaNodeJs style={{color:'#539e43'}}/>
            </div>
          </div>
          <div className='flex justify-center text-5xl gap-16 py-3 text-gray-600 dark:text-gray-200'>
            <div className='group'>
              <AiFillPhone className='cursor-pointer transition hover:scale-110 duration-200' />
              <span class="group-hover:inline-block transition-opacity bg-gray-300 text-lg font-semibold text-gray-800 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-5 hidden  mx-auto px-4 py-2">06.57.54.01.91</span>
            </div>

            <a href="https://www.linkedin.com/in/ayoub-oufqir/" target={'_blank'} rel="noreferrer"><AiFillLinkedin className='cursor-pointer text-LinkedinBlue transition hover:scale-110 duration-200' /></a>
            <a href="https://github.com/ayoub-oufqir" target={'_blank'} rel="noreferrer"><AiFillGithub className='cursor-pointer transition hover:scale-110 duration-200' /></a>
          </div>
          <div className='mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 '>
            <Image src={deved} layout="fill" objectFit='cover' />
          </div>
        </section>
        <br />
        {/******************** Time line Section ********************/}
        <section>
          <div className='text-center mb-6'>
            <h3 className='section-title'>Etudes</h3>
            <div>
              <div>
                <h4 className='etude-title'>INSEA - Rabat 2020-2023</h4>
                <p className='dark:text-slate-100'>Filière Ingénierie des Données et des logiciels</p>
              </div>
              <div className='my-6'>
                <h4 className='etude-title'>Classes préparatoires 2018-2020</h4>
                <p className='dark:text-slate-100'>Filière MP, lycée Reda slaoui à Agadir</p>
              </div>
              <div>
                <h4 className='etude-title'>Bacalauréat 2017-2018</h4>
                <p className='dark:text-slate-100'>Science Math A, montion: bien</p>
              </div>
            </div>
            
          </div>
        </section>
        {/******************** Time line Section ********************/}
        <section>
          {/* <div className='text-center'>
            <h3 className='text-4xl py-1 dark:text-gray-100'>Experience</h3>
          </div>
          <div class="timeline mt-60">
            <div class="container left">
              <div class="content">
                <h2 className='text-xl font-semibold'>Freelnace</h2>
                <span className='text-sm text-slate-500 font-semibold'>Fiverr.com</span> <br />
                <span className='text-sm font-bold text-slate-700'>May 2021 - maintenant</span>
                <p>J'ai commencer le freelance sure Fiverr.com il y a une année et demi, parmi les services que j'offre il y a la creation des sites web pour les projets NFT en utilisant ReactJS et les smart contrat en utilisant JavaScript et Solidity et jusqu’à maintenant j'ai travaille avec 7 projets NFT sur le Réseaux Ethereum et Solana.</p>
              </div>
            </div>
            <div class="container right">
            <div class="content">
                <h2 className='text-xl font-semibold'>Stage de Decouverte</h2>
                <span className='text-sm text-slate-500 font-semibold'>IT HAK CONSULTING à Tanger</span> <br />
                <span className='text-sm font-bold text-slate-700'>Juin - Août 2021</span>
                <p>J'ai creer pendant ce stage une application web qui nous permet de générer les descriptifs des filière a partir des données que les responsable des module entrent</p>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2 className='text-xl font-semibold'>Stage de Decouverte</h2>
                <span className='text-sm text-slate-500 font-semibold'>Institut Nationale de Statistique et d'economie Applique à Rabat</span> <br />
                <span className='text-sm font-bold text-slate-700'>Juin - Septembre 2022</span>
                <p>Pendant ce stage j'ai travailler avec 2 autres collègues sur un plateforme de la veille réglementaire, qui permet aux entreprises de voir si elles sont conformes aux regèles et lois marocaine qui en fonction de leur domain d’activité et les autres informations spécifique a l'entreprise.</p>
              </div>
            </div>
          </div> */}
          <div className='text-center'>
            <h3 className='section-title' style={{paddingBlock:'6px'}}>Experience</h3>
          </div>
          <ul class="timeline">

          {/* <!-- Item 1 --> */}
          <li>
            <div class="direction-r ">
              <div class="flag-wrapper ">
                <span class="flag">Freelancer</span>
                <span class="time-wrapper"><span class="time">May 2020 - present</span></span>
              </div>
              <div class="desc dark:text-slate-50 tracking-wide">J'ai commencer le freelance sure Fiverr.com il y a une année et demi, parmi les services que j'offre il y a la creation des sites web pour les projets NFT en utilisant ReactJS et les smart contrat en utilisant JavaScript et Solidity et jusqu’à maintenant j'ai travaille avec 7 projets NFT sur le Réseaux Ethereum et Solana.</div>
            </div>
          </li>

          {/* <!-- Item 2 --> */}
          <li>
            <div class="direction-l ">
              <div class="flag-wrapper">
                <span class="flag">Stage de Decouverte</span>
                <span class="time-wrapper"><span class="time">Juin - Août 2021</span></span>
              </div>
              <div class="desc dark:text-slate-50 tracking-wide">Pendant ce stage j'ai travailler avec 2 autres collègues sur un plateforme de la veille réglementaire, qui permet aux entreprises de voir si elles sont conformes aux regèles et lois marocaine qui en fonction de leur domain d’activité et les autres informations spécifique a l'entreprise.</div>
            </div>
          </li>

          {/* <!-- Item 3 --> */}
          <li>
            <div class="direction-r ">
              <div class="flag-wrapper">
                <span class="flag">Stage d'Application</span>
                <span class="time-wrapper"><span class="time">Juin - Septembre 2022</span></span>
              </div>
              <div class="desc dark:text-slate-50 tracking-wide">J'ai creer pendant ce stage une application web qui nous permet de générer les descriptifs des filière a partir des données que les responsable des module entrent</div>
            </div>
          </li>

          </ul>
        </section>

        {/******************** section 2 ********************/}
        <section>
          <div className='text-center'>
            <h3 className='section-title' style={{paddingBottom:'10px'}}>Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-gray-100'>A travers ma formation a l'ecole et l'auto formation sur internet enplus de mon experience dans le monde proffessionnel et freelance j'ai aquis plusieurs competences en
              <span className='text-teal-500 dark:text-teal-400'> developement full stack</span> en plus de d'autres competences necessaire dans le marche de travaille comme <span className='text-teal-500 dark:text-teal-400'>la communication</span> et <span className='text-teal-500 dark:text-teal-400'>la methode Agile Scrum</span>
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50 basis-1/3 hover:scale-102 transform duration-200'>
              <Image src={design} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Front-End</h3>
              <p className='py-2'>J'ai une bonne maitrise du developement Front-End</p>
              <h4 className='py-4 text-teal-600'>Competences en Front-End</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>Tailwind CSS</p>
              <p className='text-gray-800 py-1'>Bootstrap</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>Next.js</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50 basis-1/3 hover:scale-102 transform duration-200'>
              <Image src={code} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Back-End</h3>
              <p className='py-2'>En plus de Fron-End j'ai de bonnes Competences en developement Back-End</p>
              <h4 className='py-4 text-teal-600'>Les autres Competences</h4>
              <p className='text-gray-800 py-1'>Node.js</p>
              <p className='text-gray-800 py-1'>PHP</p>
              <p className='text-gray-800 py-1'>SQL</p>
              <p className='text-gray-800 py-1'>MongoDB</p>
              <p className='text-gray-800 py-1'>MySQL</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50 basis-1/3 hover:scale-102 transform duration-200 group-div'>
              <Image src={consulting} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Autres</h3>
              <p className='py-2'>En plus des du developement J'ai d'autres competeneces</p>
              <h4 className='py-4 text-teal-600'>design tools I use</h4>
              <p className='text-gray-800 py-1'>Git & GitHub</p>
              <p className='text-gray-800 py-1'>Securite</p>
              <p className='text-gray-800 py-1'>Agile Scrum</p>
              <p className='text-gray-800 py-1'>UML</p>
              <p className='text-gray-800 py-1'>Trello</p>
              <p className='text-gray-800 py-1'>WordPress</p>
            </div>
          </div>
        </section>
        {/******************** section 3 ********************/}
        <section>
          <div className='text-center'>
            <h3 className='section-title' style={{paddingBlock:'12px'}}>Mes Projets</h3>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-gray-100'>Au cours de Ma formation j'ai trailler sur plusieurs projets et aussi des projets de
              <span className='text-teal-500 dark:text-teal-400'> freelance</span> <br />
              Dans Cette section j'ai met quelques projets sur les quelles j'ai travailler
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 hover-scale'>
              <div className='group group-div'>
                <span class="description-span group-hover:inline-block transition-opacity bg-gray-300 text-lg font-semibold text-gray-800 rounded-md absolute left-1/2 
                -translate-x-1/2 translate-y-1/2 hidden  mx-auto px-4 py-4 text-center shadow-xl">J'ai creer ce site web pour un projet NFT nommees House Of Dragons, pendant une mission de freelance sure fiverr</span>
                <div className='group-img'>
                <a href="https://house-of-dragons-v2.netlify.app/" target={'_blank'} rel="noreferrer">
                  <Image src={web1} className='rounded-lg object-cover ' width={'100%'} height={'100%'} layout="responsive" />
                </a>
                </div>
              </div>
            </div>
            <div className='basis-1/3 flex-1 hover-scale'>
              <div className='group'>
              <span class="group-hover:inline-block transition-opacity bg-gray-300 text-lg font-semibold text-gray-800 rounded-md absolute left-1/2 
                -translate-x-1/2 translate-y-1/2 hidden  mx-auto px-4 py-4 text-center shadow-xl">J'ai creer ce site web juste par ce que j'ai aime le design du site originale <a href="https://magicmushroomclubnft.com/" target={'_blank'} className='text-blue-800' rel="noreferrer">https://magicmushroomclubnft.com/</a> </span>
                <a href="https://magic-mushroom1.netlify.app/" target={'_blank'} rel="noreferrer">
                  <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 hover-scale'>
              <div className='group'>
              <span class="group-hover:inline-block transition-opacity bg-gray-300 text-lg font-semibold text-gray-800 rounded-md absolute left-1/2 
                -translate-x-1/2 translate-y-1/4 hidden  mx-auto px-4 py-4 text-center shadow-xl">J'ai creer ce site afin d'etre capable de montrer un example de ce que je peut faire aux clients sur Fiverr et au meme temps J'ai mets mon contact discord, telegram pour que les clients puisse me contacter ailleurs de Fiverr</span>
                <a href="https://starlit-druid-bcf7b8.netlify.app/" target={'_blank'} rel="noreferrer">
                  <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 hover-scale'>
              <div className='group'>
              <span class="group-hover:inline-block transition-opacity bg-gray-300 text-lg font-semibold text-gray-800 rounded-md absolute left-1/2 
                -translate-x-1/2 translate-y-1/4 hidden  mx-auto px-4 py-4 text-center shadow-xl">J'ai cree cette page pour un client sur fiverr en utilisant <span className='green-span-text'>React</span> et <span className='green-span-text'>bootstrap</span>, cette page permet au utilisateur de minter les NFT sur le reseau Solana</span>
                <a href="https://meta-jockey-club.netlify.app/" target={'_blank'} rel="noreferrer">
                  <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 hover-scale'>
              <div className='group'>
              <span class="group-hover:inline-block transition-opacity bg-gray-300 text-lg font-semibold text-gray-800 rounded-md absolute left-1/2 
                -translate-x-1/2 translate-y-1/4 hidden  mx-auto px-4 py-4 text-center shadow-xl">J'ai cree cette application web pendant mon stage d'application, elle nous permet de generer les descriptifs de modules des Filière en utilisant les donnees que les responsables des modules entrent dans un formulaire aussein du site web. <br /> J'ai utiliser <span className='green-span-text'>PHP</span> pour le Back-End et <span className='green-span-text'>Bootstrap</span> pour Front-End en plus de plusieurs <span className='green-span-text'>techniques de securite</span> pour securiser le site web</span>
                <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
