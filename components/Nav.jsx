'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    const isUserLoggedIn = true
    useEffect(() => {
        const setProviders = async () => {
            const providers = await getProviders()
            setProviders(providers)
        }
        setProviders()
    }, [])

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
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href='/create-prompt' className="black_btn">
                            Создать подсказку
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
                )
                    :
                    (
                        <>
                            {
                                providers &&
                                Object.values(providers).map((provider) => (

                                    <button type="button"
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        className="black_btn">
                                        Войти
                                    </button>
                                ))
                            }
                        </>
                    )
                }
            </div>


            {/* Mobile navigation */}
            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (
                    <div className="flex">
                        <Image src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                            alt="profile" />
                        {
                            toggleDropdown && (
                                <div className="dropdown">
                                    <Link href='/profile'
                                        onClick={() => setToggleDropdown(false)}
                                        className="dropdown_link">
                                        Мой профиль
                                    </Link>
                                    <Link href='/create-prompt'
                                        onClick={() => setToggleDropdown(false)}
                                        className="dropdown_link">
                                        Создать подсказку
                                    </Link>

                                    <button type="button"
                                        onClick={() => {
                                            setToggleDropdown(false)
                                            signOut()
                                        }}
                                        className="mt-5 w-full black_btn">
                                        Выход
                                    </button>
                                </div>
                            )
                        }
                    </div>
                ) :
                    (
                        <>{
                            providers &&
                            Object.values(providers).map((provider) => (

                                <button type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn">
                                    Войти
                                </button>
                            ))
                        }</>
                    )
                }
            </div>
        </nav>
    )
}

export default Nav