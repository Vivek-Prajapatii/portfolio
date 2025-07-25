'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { socialLinks } from '@/configs/socialLinks'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'
import { useForm } from 'react-hook-form'
import {
    ContactInput,
    contactInputValidator,
} from '@/validators/contact.validator'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useToast } from '../ui/use-toast'

function ContactSection() {
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactInput>({
        resolver: zodResolver(contactInputValidator),
    })
    const handleFormSubmit = async (data: ContactInput) => {
        try {
            await axios.post('/api/contact', data)
            toast({ title: 'Your message was send successfully!' })
        } catch (err) {
            console.error(err)
            toast({
                title: 'Error Sending Message!',
            })
        }
    }
    return (
        <section id="contact" className="w-full px-10 max-w-7xl mx-auto py-28">
            <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                Contact Me
            </h2>
            <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-10">
                <div className="contacts w-full flex-col flex gap-5">
                    {socialLinks.map(({ name, href, icon: Icon, id }) => {
                        const isEmail = name === 'Email'
                        return (
                            <Link
                                key={name}
                                target="_blank"
                                referrerPolicy="no-referrer"
                                href={href}
                                className={`flex items-center w-full justify-left ${isEmail ? 'text-sm lg:text-2xl' : 'text-xl lg:text-2xl'} gap-5 font-bold px-10 py-5 bg-accent/10 rounded-xl`}
                            >
                                <Icon height={35} width={35} className={isEmail ? "flex-shrink-0" : ""} />
                                {isEmail ? (
                                    <p className="truncate">
                                        <span className="sm:inline">{id}</span>
                                    </p>
                                ) : (
                                    <p>{name}</p>
                                )}
                            </Link>
                        )
                    })}
                </div>
                <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="form w-full h-full overflow-hidden flex-col flex gap-5"
                >
                    <Input
                        {...register('name')}
                        type="text"
                        placeholder="Name"
                    />
                    {errors.name && (
                        <p className="text-destructive -mt-3 -mb-2">
                            Please enter your name
                        </p>
                    )}
                    <Input
                        {...register('email')}
                        type="email"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-destructive -mt-3 -mb-2">
                            Please enter a valid email address
                        </p>
                    )}
                    <Textarea
                        {...register('message')}
                        placeholder="Type your message here."
                        className="resize-none flex-1 h-full"
                    />
                    {errors.message && (
                        <p className="text-destructive -mt-3 -mb-2">
                            Please enter a message
                        </p>
                    )}
                    <Button className="w-full text-xl font-medium">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
