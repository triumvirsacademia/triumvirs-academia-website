"use client";

import { useState, Fragment } from "react";
import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

interface Tab {
  title: string;
  tag: string;
  excerpt: string;
  link: string;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
      <div>
        {/* Buttons */}
        <div className="flex justify-center">
          <TabList className="mb-8 inline-flex flex-wrap justify-center rounded-xl p-1 md:mb-12">
            {tabs.map((tab, index) => (
              <Tab key={index} as={Fragment}>
                <button
                  className={`h-8 flex-1 whitespace-nowrap px-4 ${index !== 0 ? "border-l border-l-black" : ""} font-serif text-lg md:text-xl tracking-tighter transition-colors duration-150 ease-in-out focus-visible:outline-none ui-focus-visible:outline-none decoration-accent ${selectedTab === index ? "underline underline-offset-[1rem]" : ""}}`}
                >
                  {tab.title}
                </button>
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Tab panels */}
        <TabPanels className="mx-auto max-w-[30rem] md:max-w-[640px]">
          <div className="relative flex flex-col">
            {tabs.map((tab, index) => (
              <TabPanel key={index} as={Fragment} static={true}>
                <Transition show={selectedTab === index}>
                  <article className="[background:linear-gradient(45deg,#FFFFFF,theme(colors.white)_50%,#FFFFFF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white)_80%,_theme(colors.accent)_86%,_theme(colors.accent)_90%,_theme(colors.accent)_94%,_theme(colors.white))_border-box] border border-transparent animate-border w-full items-stretch rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-accent flex transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-x-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-12">    
                    <figure className="relative p-2 w-1/4">
                        <div className="absolute -right-9 md:-right-10 top-4 rounded-full h-32 w-32 md:h-40 md:w-40 bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute right-[27px] md:right-10 -bottom-[1px] h-[93px] md:h-[98px] bg-black w-[0.0625rem]"></span>
                    </figure>
                    <div className="flex flex-col justify-center p-5 pl-3 w-3/4">
                      <div className="mb-2 md:mb-3 flex justify-between">
                        <header className="">
                          <div className="pl-4 font-serif text-2xl md:text-3xl tracking-tighter md:pb-1">
                            {tab.tag}
                          </div>
                          <h1 className="pl-2 md:pl-0 text-5xl md:text-7xl font-bold tracking-tighter">
                            {tab.title}
                          </h1>
                        </header>
                      </div>
                      <div className="pl-4 mb-2 line-clamp-3 font-sans text-lg tracking-tighter leading-6">
                        {tab.excerpt}
                      </div>
                      <div className="text-right">
                        <Link
                          className="text-lg font-medium tracking-tighter transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring focus-visible:ring-accent"
                          href={tab.link}
                        >
                            <div className="flex items-center justify-end">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </Link>
                      </div>
                    </div>
                  </article>
                </Transition>
              </TabPanel>
            ))}
          </div>
        </TabPanels>
      </div>
    </TabGroup>
  );
}