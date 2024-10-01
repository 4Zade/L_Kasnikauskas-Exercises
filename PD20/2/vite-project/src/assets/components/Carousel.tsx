import { useState } from 'react';
import { Icon } from '@iconify/react';

interface CarouselProps {
    images: string[];
    brand: string;
    sticker: boolean;
}

export function Carousel({images, brand, sticker}: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <main className="w-full aspect-video overflow-hidden relative rounded-md">
                <section className="flex w-full h-full transition-transform ease" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full aspect-video flex justify-center">
                            <img src={"/images/" + brand + "/" + image + ".jpeg"} className="object-contain" alt={brand} />
                        </div>
                    ))}

                    {sticker ? 
                    <div className='w-24 h-24 absolute bg-black -top-2 right-12 text-white rounded-full font-bold flex flex-col items-center justify-center p-2 scale-75 rotate-[10deg]'>
                        <Icon icon="solar:box-linear" className='w-8 h-8'/>
                        <p className='text-xs text-center'>Išsiuntimas tą pačią Dieną</p>
                    </div>
                    : null }
                </section>

                <section className='absolute top-1/2 -translate-y-1/2 w-full h-24 flex justify-between items-center p-2 text-gray-400'>
                    <div className='w-8 h-8 rounded-full grid place-items-center hover:bg-gray-100 bg-opacity-50' onClick={goToPreviousSlide}>
                        <Icon icon="solar:alt-arrow-left-bold-duotone" className="w-6 h-6"/>
                    </div>

                    <div className='w-8 h-8 rounded-full grid place-items-center hover:bg-gray-100 bg-opacity-50' onClick={goToNextSlide}>
                        <Icon icon="solar:alt-arrow-right-bold-duotone" className="w-6 h-6"/>
                    </div>
                </section>
            </main>
        </>
    )
}