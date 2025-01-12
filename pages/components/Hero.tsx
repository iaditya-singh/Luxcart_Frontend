import React, { useContext } from 'react'
import Link from 'next/link'
import { CartContext } from '@/lib/Context/CartContext';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type ProductProps = {
    _id: string;
    title: string;
    description: string;
    price: number;
    images: [string]
}

const Hero = (product: ProductProps) => {
    const { addProduct } = useContext(CartContext);

    const addItemToCart = () => {
        addProduct(product._id);
        toast.success('Item added to cart!')
    }

    return (
        <>
            <div className='relative overflow-hidden my-14 md:my-10 ml-6'>
                <div className='min-h-[1000px] lg:py-40 lg:min-h-[650px]'>
                    <div className='relative mx-auto sm:static px-6 lg:px-8'>
                        <div className='max-w-xl text-start '>
                            <h1 className='text-3xl md:text-4xl max-md:mb-6 font-bold tracking-tight text-primary my-1' >AT <span className='text-accent'>50% </span>OFF</h1>
                            <h1 className='text-4xl md:text-5xl max-md:mb-6 font-bold tracking-tight my-2' >{product.title}</h1>
                            <p className='line-clamp-3 text-lg text-gray-500 my-1'>{product.description}</p>


                            <div className='flex gap-4 items-center max-sm:justify-start max-sm:mt-6 mt-10'>
                                <button onClick={addItemToCart} type="button" className="hover:bg-transparent hover:text-primary rounded-lg border border-primary bg-primary px-5 py-2.5 text-center text-md font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">
                                    Add to Cart</button>
                                <Link href="/products" className="bg-transparent hover:text-primary rounded-lg border border-primary px-5 py-2.5 text-center text-md font-medium text-gray-500 shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">
                                    All Products</Link>
                            </div>

                            <div className='lg:block absolute transform lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                                <div className='flex items-center space-x-6 sm:flex lg:flex lg:items-center sm:space-x-6 lg:space-x-6 md:space-x-24'>
                                    <div className='hidden flex-shrink-0 grid-cols-1 gap-y-12 lg:grid lg:flex-shrink-0 lg:grid-cols-1 lg:gap-y-12'>
                                        {(product && product.images && Array.isArray(product.images)) && product.images.slice(0, 2).map((image, index) => (
                                            <div key={index} className='w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out'>
                                                <Image width={200} height={200} src={image} alt="" className='h-full w-full object-cover object-center' />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='my-8 grid flex-shrink-0 grid-cols-1 gap-y-12 lg:grid lg:flex-shrink-0 lg:grid-cols-1 lg:gap-y-12'>
                                        {(product && product.images && Array.isArray(product.images)) && product.images.slice(2, 4).map((image, index) => (
                                            <div key={index} className=' w-60 sm:w-72 sm:h-80 lg:w-72 lg:h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out'>
                                                <Image width={200} height={200} src={image} alt="" className='h-full w-full object-cover object-center' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero