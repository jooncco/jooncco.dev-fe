'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {fadeIn, textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import PortfolioCard from './PortfolioCard';
import {
  BlockchainIcon,
  BrainIcon,
  CloudIcon,
  GlobeIcon,
  WrenchScrewdriverIcon,
} from './Icons';

const tabs = [
  {
    id: 'web',
    label: 'Web',
    icon: <GlobeIcon />,
    items: [
      {
        title: 'jooncco.dev-fe',
        thumbnail: '/img/portfolio/jooncco.dev-fe.png',
        linkUrl: 'https://github.com/jooncco/jooncco.dev-fe',
        desc: "Jooncco's knowledge base frontend, built with Next.js 14.",
      },
      {
        title: 'naemo.io',
        thumbnail: '/img/portfolio/nftmarketplace.png',
        linkUrl: 'https://naemo.io',
        desc: "Exchange fancy NFTs with crypto currency such as Ethereum, Solana and more. Built with React.js and now it's maintained by bithumb meta.",
      },
      {
        title: 'Spring Boot API Server Template',
        thumbnail: '/img/portfolio/springapiservertemplate.png',
        linkUrl: 'https://github.com/jooncco/spring-api-server-template',
        desc: 'Spring Boot api server example, aiming to show best practices in production-level.',
      },
      {
        title: 'jooncco.github.io',
        thumbnail: '/img/portfolio/jooncco.github.io.png',
        linkUrl: 'https://github.com/jooncco/jooncco.github.io',
        desc: "[Deprecated] A blog based on github.io and jekyll template 'Minimal Mistakes'.",
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: <CloudIcon />,
    items: [],
  },
  {
    id: 'blockchain',
    label: 'Blockchain',
    icon: <BlockchainIcon />,
    items: [],
  },
  {
    id: 'ml',
    label: 'ML',
    icon: <BrainIcon />,
    items: [
      {
        title: 'Bitcoin Price Predictor',
        thumbnail: '/img/portfolio/bitcoinpricepredictor.png',
        linkUrl: 'https://github.com/jooncco/bitcoin-price-predictor',
        desc: '[Undergraduate] Bitcoin price prediction with market indicators and google trend using regression models & LSTM RNN',
      },
      {
        title: 'Coindrop Game AI Agent',
        thumbnail: '/img/portfolio/coindropgameaiagent.png',
        linkUrl: 'https://github.com/jooncco/coindrop-game-ai-agent',
        desc: '[Undergraduate] Reflex agent trained with reinforcement learning(Q-learning). This agent plays coin drop game implemented using pygame module.',
      },
      {
        title: '"is a" Relationship Teller',
        thumbnail: '/img/portfolio/isarelationshipteller.png',
        linkUrl: 'https://github.com/jooncco/is-A-relationship-teller',
        desc: '[Undergraduate] NLP for Korean words. Returns whether a given {Entity, Concept} pair is in "is-a" relationship or not.',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <WrenchScrewdriverIcon />,
    items: [
      {
        title: 'Kakaotalk Chat Exporter',
        thumbnail: '/img/portfolio/kakaotalkchatexporter.png',
        linkUrl: 'https://github.com/jooncco/kakaotalk-chat-exporter',
        desc: 'Automated text exporter for Kakaotalk messenger.',
      },
      {
        title: 'CP Snippet Java',
        thumbnail: '/img/portfolio/cpsnippetjava.png',
        linkUrl: 'https://github.com/jooncco/cp-snippet-java',
        desc: 'Json for java code snippets. Extremly useful when competitive programming.',
      },
      {
        title: 'CP Stamper C++',
        thumbnail: '/img/portfolio/cpstampercpp.png',
        linkUrl: 'https://github.com/jooncco/cp-stamper-cpp',
        desc: 'Simple comment writer. The comment generated contains author and timestamp.',
      },
    ],
  },
];

const Portfolio = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Art gallery</p>
      <h1 className={styles.sectionHeadText}>Portfolio</h1>
    </motion.div>

    <motion.div className="mt-8" variants={fadeIn('left', 'tween', 0, 1)}>
      <Tabs value={tabs[0].id}>
        <TabsHeader
          indicatorProps={{
            className: 'rounded-lg bg-primary/70 shadow-inner',
          }}
          className="bg-slate-200 dark:bg-zinc-950/40 shadow-xl">
          {tabs.map(({id, label, icon, items}) => (
            <Tab
              key={id}
              value={id}
              className={`rounded-lg font-semibold text-text hover:bg-primary/40 hover:shadow-inner ${
                items.length === 0 ? 'hidden' : ''
              }`}>
              <div className="flex gap-x-2 items-center">
                <div className="hidden sm:block">{icon}</div>
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: {y: 250},
            mount: {y: 0},
            unmount: {y: 250},
          }}
          className="rounded-lg bg-slate-200 dark:bg-stone-950 shadow-inner">
          {tabs.map(({id, items}) => (
            <TabPanel
              key={id}
              value={id}
              className="p-6 flex flex-wrap gap-x-6 gap-y-4">
              {items.map(({title, thumbnail, linkUrl, desc}, index) => (
                <PortfolioCard
                  key={index}
                  title={title}
                  thumbnail={thumbnail}
                  linkUrl={linkUrl}
                  desc={desc}
                />
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </motion.div>
  </>
);

export default SectionWrapper(Portfolio, 'portfolio');
