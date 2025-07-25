'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { MenuIcon, DownloadIcon } from 'lucide-react'
import { Card } from './ui/card'

const navLinks = [
    {
        name: '$whoami?',
        link: '#whoami',
    },
    // {
    //     name: 'Services',
    //     link: '#services',
    // },
    {
        name: 'Skills',
        link: '#skills',
    },
    // {
    //     name: 'Testimonials',
    //     link: '#testimonials',
    // },
    {
        name: 'Contact',
        link: '#contact',
    },
]

function Navbar() {
    const { scrollY } = useScroll()
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(({ link }) =>
                document.querySelector(link)
            ) as (HTMLElement | null)[]
            const scrollPosition = window.scrollY + 100

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop
                    const sectionHeight = section.clientHeight

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(navLinks[index].link)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const borderRadius = useTransform(
        scrollY,
        [0, 200, 200],
        ['0rem', '0rem', '3rem']
    )
    const top = useTransform(scrollY, [0, 200, 200], ['0rem', '0rem', '1rem'])
    const width = useTransform(scrollY, [0, 200, 200], ['100%', '100%', '95%'])
    const borderWidth = useTransform(
        scrollY,
        [0, 200, 200],
        ['0px', '0px', '1px']
    )
    const height = useMotionValue<'0' | '1000px'>('0')
    const opacity = useMotionValue<'0' | '1'>('0')

    function toggleNav() {
        if (height.get() === '1000px') {
            height.set('0')
            opacity.set('0')
        } else {
            height.set('1000px')
            opacity.set('1')
        }
    }

    return (
        <motion.div
            className="max-w-[1250px] bg-[var(--nav)]/80 backdrop-blur-md shadow-sm mx-auto fixed z-50 left-0 right-0 transition-all"
            style={{
                borderRadius: borderRadius,
                top: top,
                width: width,
                borderWidth,
            }}
        >
            <div className="wrapper px-7 py-4 w-full relative">
                <div className="mx-auto flex items-center justify-between">
                    <Link href="#home">
                        <header className="flex items-center gap-1">
                            <span>{'< '}</span>
                            <h1 className="text-2xl font-medium"> {'Vivek'}</h1>
                            <span>{' />'}</span>
                        </header>
                    </Link>
                    <nav className="text-muted gap-8 hidden items-center  lg:flex">
                        {navLinks.map(({ name, link }, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={link}
                                    className={`text-xl hover:text-foreground hover:scale-110 transition-all relative ${
                                        activeSection === link
                                            ? 'text-foreground'
                                            : ''
                                    } group`}
                                >
                                    {name}
                                    <span
                                        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                                            activeSection === link
                                                ? 'scale-x-100'
                                                : 'scale-x-0'
                                        } group-hover:scale-x-100`}
                                    />
                                </Link>
                            )
                        })}
                        <Button
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                            asChild
                        >
                            <Link
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2"
                            >
                                Resume
                                <DownloadIcon size={18} />
                            </Link>
                        </Button>
                    </nav>
                    <Button
                        onClick={toggleNav}
                        variant={'ghost'}
                        className="lg:hidden"
                    >
                        <MenuIcon />
                        <div className="sr-only">Menu Button</div>
                    </Button>
                </div>
                <motion.div
                    style={{
                        opacity,
                        maxHeight: height,
                    }}
                    className="mobile-nav absolute lg:hidden top-[120%] mx-auto w-[95vw] left-0 right-0 transition-all overflow-hidden"
                >
                    <Card className="p-4">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(({ name, link }, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={link}
                                        className={`text-xl relative group ${
                                            activeSection === link
                                                ? 'text-foreground'
                                                : ''
                                        }`}
                                    >
                                        {name}
                                        <span
                                            className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                                                activeSection === link
                                                    ? 'scale-x-100'
                                                    : 'scale-x-0'
                                            } group-hover:scale-x-100`}
                                        />
                                    </Link>
                                )
                            })}
                            <Button
                                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2 rounded-full"
                                asChild
                            >
                                <Link
                                    href="/resume.pdf"
                                    download
                                    className="flex items-center justify-center gap-2"
                                >
                                    Resume
                                    <DownloadIcon size={18} />
                                </Link>
                            </Button>
                        </nav>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Navbar
