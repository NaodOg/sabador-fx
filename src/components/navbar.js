'use client';

import { buttonVariants } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MobileNav } from '@/components/ui/navbar'

// Navigation links for all pages
const navigationLinks = [
    {
        name: 'Main',
        items: [
            { href: '/', label: 'Home', active: true },
            { href: '/about', label: 'About Us' },
            { href: '/products', label: 'Products' },
            { href: '/contact', label: 'Contact Us' },
        ],
    },
]

export default function Navbar() {
    return (
        <header className="w-full flex h-24 items-center justify-between gap-4 py-2 px-4 md:px-6 fixed top-0 left-0 right-0 z-50 bg-black overflow-hidden">
            <Link
                href="/"
                className="flex items-center pt-3"
            >
                <img
                    src="/FX LOGO.png"
                    alt="Sabador FX Logo"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
            </Link>

            <div className="flex items-center justify-end gap-2">
                <MobileNav nav={navigationLinks} />
            </div>

            <NavigationMenu className="max-md:hidden">
                <NavigationMenuList>
                    {navigationLinks[0].items.map((link, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                                href={link.href}
                                asChild
                                data-active={link.active}
                                className="rounded-md px-3 py-1.5 font-medium text-yellow-400 hover:text-yellow-300"
                            >
                                <Link>{link.label}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}