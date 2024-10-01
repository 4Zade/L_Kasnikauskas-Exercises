import { Icon } from '@iconify/react';
import { Carousel } from './Carousel';

interface CardProps {
    images: string[];
    title: string;
    brand: string;
    sticker: boolean;
    price: number;
    internetOnly: boolean;
}


export function Card({images, title, brand, sticker, price, internetOnly}: CardProps) {
    const calculatedPrice = (price / 36).toFixed(2);
    return (
        <>
            <main className="w-96 bg-white px-5 py-2 flex flex-col gap-10 rounded-lg pb-10 scale-75">
                <section>
                    <div className='flex items-center gap-1 text-gray-500 p-1 cursor-pointer'>
                        <Icon icon="solar:chart-bold" className='text-gray-300'/>
                        <h2>Palyginti</h2>
                    </div>
                    <hr className='w-full h-px bg-gray-600'/>
                </section>

                {internetOnly ?
                <div className='bg-gray-900 w-min p-2 rounded-full text-xs text-white flex items-center gap-1 whitespace-nowrap absolute scale-[.8] top-11 left-2'>
                    <Icon icon="solar:laptop-minimalistic-linear" className='w-4 h-4'/>
                    Tik internetu
                </div>
                : null}

                <section className='relative flex w-full aspect-video'>
                    <Carousel images={images} brand={brand} sticker={sticker} />
                </section>

                <section className='p-2'>
                    <p>{brand}</p>
                    <h1 className='text-xl font-bold text-clip line-clamp-2'>{title}</h1>
                </section>

                <section className='flex justify-between items-end p-2'>
                    <h1 className='text-xl font-bold flex text-green-500 items-end'>{calculatedPrice}€<span className='text-base font-normal'>/mėn</span></h1>
                    <p className='font-bold'>{price}€</p>
                </section>
            </main>
        </>
    )
}