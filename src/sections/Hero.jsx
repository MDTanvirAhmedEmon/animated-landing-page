import { useRef } from 'react';
import watch from '../assets/watch-1.png'
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,

    });
    const scale = useTransform(scrollYProgress, [ 0, -100 ], [ 1, 1.5 ])
    console.log(scale);

    return (
        <div ref={heroRef} className=" bg-[#2273F8] h-[100vh]">
            <div className=" w-[1100px] mx-auto h-full flex items-center justify-center">
                <div className=' w-1/2'>
                    <h1 className='text-white text-6xl font-bold'>Best Landing Page For Online Product Marketing</h1>
                    <p className='mt-10 text-slate-200'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non
                    </p>
                    <button className='mt-10 bg-black text-white py-3 px-5 rounded-full'>Buy Now</button>
                </div>
                <div className=' w-1/2'>
                    <motion.img style={{ scale:scale}} src={watch} alt="watch" />
                </div>

            </div>
        </div>
    );
};

export default Hero;