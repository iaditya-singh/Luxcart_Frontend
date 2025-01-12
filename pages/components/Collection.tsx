import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type collectionProductProps = {
    _id: string;
    title: string;
    description: string;
    price: number;
    images: [string]
}

const formatPrice = (price: any) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const Collection = (collectionProduct: collectionProductProps) => {
    const { data: session } = useSession();

    return (
        <>
            <section>
                <div className='max-w-screen-2xl  px-4 py-8 mx-auto sm:py-12 lg:px-8'>
                    <header className='text-center'>
                        <h2 className='text-xl font-bold text-accent sm:text-3xl'>
                            New Collection
                        </h2>
                        <p className='max-w-lg mx-auto mt-4 text-gray-500'>
                            Explore out latest arrivals and elevate your style with our exclusive new collection.
                        </p>
                    </header>
                    <div className=''>
                        <div className='mx-w-screen-2xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 flex justify-center'>
                            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch'>
                                <div className='grid h-full bg-gray-100 rounded place-content-center sm:p-4'>
                                    <div className='max-w-lg mx-auto text-center lg:text-left min-h-[250px] flex flex-col justify-center items-center'>
                                        <header>
                                            <h2 className='text-xl font-bold text-accent sm:text-3xl'>
                                                {collectionProduct.title}
                                            </h2>
                                            <p className='mt-4 text-gray-500'>
                                                {collectionProduct.description}
                                            </p>
                                            <p className='mt-1 text-lg mb-10 text-primary'>
                                                ${formatPrice(collectionProduct.price)}
                                            </p>
                                        </header>
                                        <Link href="/products" className="hover:border-secondary bg-transparent hover:text-primary rounded-lg border border-primary px-5 py-2.5 text-center text-md font-medium text-accent shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200">
                                            Shop All</Link>
                                    </div>
                                </div>

                                <div className='lg-col-span-2 lg:py-8 min-w-96'>
                                    <ul className='grid grid-cols-2 gap-4'>
                                        {(collectionProduct && collectionProduct.images && Array.isArray(collectionProduct.images)) && collectionProduct.images.slice(0, 2).map((image, index) => (
                                            <li key={index}>
                                                <div className='block group'>
                                                    <Image
                                                        width={250}
                                                        height={250}
                                                        src={image}
                                                        alt={`product-${index}`}
                                                        className='object-cover w-full rounded aspect-square h-80'
                                                    />
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection