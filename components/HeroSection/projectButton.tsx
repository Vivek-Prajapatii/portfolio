'use client'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import React from 'react'
import Link from 'next/link'

function ProjectButton() {
    const { toast } = useToast()
    return (
        <Link
            className={cn(
                buttonVariants({ size: 'lg' }),
                'font-bold text-xl md:w-auto w-full'
            )}
            href={"/#projects"}
            // onClick={() => {
            //    toast({
            //        title: 'Projects page coming soon!',
            //        description: 'Till then you can take a look at my github',
            //    })
            // }}
        >
            My Projects
        </Link>
    )
}

export default ProjectButton
