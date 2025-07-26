"use client"
import React, { useState, useEffect } from 'react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import ProjectButton from './projectButton'
import { socialLinks } from '@/configs/socialLinks'
import { developerData } from '@/configs/devdata'

function TypewriterJSON() {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    
    const jsonString = JSON.stringify(developerData, null, 2)
    
    useEffect(() => {
        if (currentIndex < jsonString.length) {
            const timer = setTimeout(() => {
                setDisplayedText(jsonString.slice(0, currentIndex + 1))
                setCurrentIndex(currentIndex + 1)
            }, 50) // Adjust speed here
            
            return () => clearTimeout(timer)
        } else {
            setIsComplete(true)
        }
    }, [currentIndex, jsonString])
    
    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-10">
            <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border border-gray-700 max-w-lg w-full">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-2">developer.json</span>
                </div>
                <pre 
                    className="text-green-400 font-mono text-sm overflow-x-auto overflow-y-hidden whitespace-pre [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    <code>{displayedText}</code>
                    {!isComplete && (
                        <span className="animate-pulse text-green-400">|</span>
                    )}
                </pre>
            </div>
        </div>
    )
}

function HeroSection() {
    return (
        <section
            id="whoami"
            className="lg:h-screen w-full flex flex-col lg:flex-row items-center px-10  max-w-7xl mx-auto py-28"
        >
            <div className="text w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-3xl">
                    I{"'"}m <br />
                    <span className="text-6xl md:text-7xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent">
                        {developerData.name}
                    </span>
                </h1>
                <p className="lg:text-lg text-muted mt-4 font-medium max-w-xl">
                    Greetings! I{"'"}m a passionate Frontend developer at{' '}
                    <span className="font-bold">{developerData.company} </span>
                    with over {developerData.experience} of hands-on experience. I thrive on
                    turning ideas into seamless digital experiences and have a
                    proven track record of delivering exceptional results in
                    dynamic environments. Let{"'"}s craft something
                    extraordinary together!
                </p>
                <div className="links mt-10 flex items-center gap-6">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <Link
                            key={name}
                            href={href}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="hover:scale-110 cursor-pointer"
                        >
                            <Icon height={35} width={35} />
                            <div className="sr-only">{name}</div>
                        </Link>
                    ))}
                </div>
                <div className="button gap-2 flex items-center flex-col md:flex-row my-5">
                    <Link
                        href="#contact"
                        className={cn(
                            buttonVariants({ variant: 'default', size: 'lg' }),
                            'font-bold text-xl md:w-auto w-full'
                        )}
                    >
                        Contact Me
                    </Link>
                    <ProjectButton />
                </div>
            </div>
            {/* <div className="image w-full lg:w-1/2 relative aspect-square -mt-10 ">
                <Image
                    src="/vivek.webp"
                    className="w-full aspect-square"
                    alt=""
                    fill={true}
                    priority={true}
                />
                <div className="gradient absolute w-full h-1/2 bg-gradient-to-t from-background to-transparent bottom-0 left-0 right-0"></div>
            </div> */}
            <TypewriterJSON />
        </section>
    )
}

export default HeroSection
