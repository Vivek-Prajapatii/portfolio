'use client'

import React from 'react'
import Link from 'next/link'
import { socialLinks } from '@/configs/socialLinks'

const quickLinks = [
    { name: '$whoami?', href: '#whoami' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-accent/5 border-t border-accent/20 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="#home" className="inline-block mb-4">
                            <h2 className="text-2xl font-bold">Thank you for visiting here!</h2>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            MERN Stack Developer passionate about creating amazing web experiences. 
                            Let&apos;s build something incredible together!
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ name, href, icon: Icon }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                                    aria-label={name}
                                >
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(({ name, href }) => (
                                <li key={name}>
                                    <Link
                                        href={href}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold mb-4">Get In Touch</h3>
                        <div className="space-y-2 text-muted-foreground">
                            <p>
                                <Link
                                    href={socialLinks.find(link => link.name === 'Email')?.href || 'mailto:vivekprajapati.dev@gmail.com'}
                                    className="hover:text-foreground transition-colors"
                                >
                                    {socialLinks.find(link => link.name === 'Email')?.id}
                                </Link>
                            </p>
                            <p>Open to new opportunities</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-accent/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        {currentYear} Vivek Prajapati. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-sm">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
