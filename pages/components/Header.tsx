import { CartContext } from '@/lib/Context/CartContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
import Image from 'next/image'


type Props = {}

const Header = (props: Props) => {
    const router = useRouter()
    const { pathname } = router;
    const active = 'text-primary transition hover:text-secondary p-3 font-bold';
    const inactive = 'text-gray-500 transition hover:text-gray-500/75 p-3 font-medium';
    const { cartProducts } = useContext(CartContext);

    const { data: session } = useSession()
    const mobileActive = "text-primary";
    const mobileInactive = "";

    // if(session){
    return (
        <>
            <header className="bg-white border-b border-primary border-opacity-40 sticky top-0 z-40 px-10">
                <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8">
                    <Link className="text-primary flex items-center font-bold text-3xl pr-4" href="/">
                        LUXCART.
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-lg">
                                <li>
                                    <Link className={pathname === '/' ? active : inactive} href="/"> Home </Link>
                                </li>

                                <li>
                                    <Link className={pathname === '/products' ? active : inactive} href="/products"> All Products </Link>
                                </li>

                                {session && (<li>
                                    <Link className={pathname === '/settings' ? active : inactive} href="/settings"> Settings </Link>
                                </li>)}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="flex justify-center sm:flex sm:gap-4 items-center">
                                {session ? (
                                    <div className='sm:flex sm:gap-2 border-r pr-4'>
                                        <div className='h-9 w-9'>
                                            <Image width={100} height={100} src={session?.user?.image ?? ''} alt={session?.user?.name ?? ''} className='h-full w-full rounded-full object-cover' />
                                        </div>
                                    </div>
                                ) : (
                                    <Link className="block px-5 py-1.5 text-sm  transition border-r border-primary font-bold"
                                        href="/"
                                    >
                                        Account
                                    </Link>

                                )}

                                <Link
                                    className="group px-3 py-2.5 text-md flex font-medium text-teal-600 transition hover:text-teal-600/75 p-2"
                                    href="/cart"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <span className='ml-2 text-primary font-bold group-hover:text-text'>
                                        {cartProducts.length}
                                    </span>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </header>
            <header className='md:hidden w-full flex justify-around items-center my-3 border-b fixed top-12 bg-gray-200 z-50'>
                <div className='inline-flex gap-8 p-1'>
                    <Link className={`${pathname === '/' ? active : inactive} inline-flex items-center gap-2 rounded-md px-4 py-2 text-md hover:text-gray-700 focus:relative`} href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
                        Home
                    </Link>
                    <Link className={`${pathname === '/products' ? active : inactive} inline-flex items-center gap-2 rounded-md px-4 py-2 text-md hover:text-gray-700 focus:relative`} href="/products"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path></svg>
                    Products
                    </Link>
                    <Link className={`${pathname === '/cart' ? active : inactive} inline-flex items-center gap-2 rounded-md px-4 py-2 text-md hover:text-gray-700 focus:relative`} href="/cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>
                    Cart
                    </Link>
                </div>
            </header>
        </>
    )
}
// }

export default Header