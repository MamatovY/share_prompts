'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth'


const Nav = () => {

    const isUserLoggedIn = true

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href='/' className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg" alt="Promptopia Logo" width={30} height={30} className="object-contain" />
                <p className="logo_text">
                    Promptopia
                </p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {isUserLoggedIn && (
                    <div className="flex gap-3 md:gap-5">
                        <Link href='/create-prompt' className="black_btn">
                            Создать сообщение
                        </Link>
                        <button type="button"
                            onClick={signOut}
                            className="outline_btn">
                            Выход
                        </button>
                        <Link href='/profile' className="black_btn">
                            <Image src="/assets/images/logo.svg"
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile" />
                            Профиль
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav