'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type MobileNavProps = {
    nav: {
        name: string
        items: {
            label: string
            href: string
        }[]
    }[]
}

export function MobileNav({ nav }: MobileNavProps) {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    'extend-touch-target block size-8 touch-manipulation items-center justify-start gap-2.5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent md:hidden dark:hover:bg-transparent'
                )}
                onClick={() => setOpen(true)}
            >
                <div className="relative flex items-center justify-center">
                    <div className="relative size-4">
                        <span
                            className={cn(
                                'bg-white absolute left-0 block h-0.5 w-4 transition-all duration-100',
                                open ? 'top-2 -rotate-45' : 'top-1'
                            )}
                        />
                        <span
                            className={cn(
                                'bg-white absolute left-0 block h-0.5 w-4 transition-all duration-100',
                                open ? 'opacity-0' : 'top-2.5 opacity-100'
                            )}
                        />
                        <span
                            className={cn(
                                'bg-white absolute left-0 block h-0.5 w-4 transition-all duration-100',
                                open ? 'top-2 rotate-45' : 'top-4'
                            )}
                        />
                    </div>
                    <span className="sr-only">Toggle Menu</span>
                </div>
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 right-0 h-full w-[300px] max-w-[80%] bg-black/80 backdrop-blur-lg text-white z-[999] overflow-y-auto p-6"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="flex justify-end mb-6">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setOpen(false)}
                                    className="text-white hover:text-yellow-400"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </Button>
                            </div>

                            <div className="flex flex-col gap-6 min-h-full">
                                {nav.map((category, index) => (
                                    <div className="flex flex-col gap-4" key={index}>
                                        <p className="text-white text-xs font-medium uppercase tracking-wider">
                                            {category.name}
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            {category.items.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href as string}
                                                    className="text-lg font-medium text-white hover:text-yellow-400 py-2 border-b border-gray-800 block"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}