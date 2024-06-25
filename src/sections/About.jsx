import { useRef } from 'react';
import watchInHand from '../assets/about-img.jpg'
import { motion, useScroll, useTransform } from 'framer-motion';
const About = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end end"]
    });
    const margin = useTransform(scrollYProgress, [0.1, 0.5, 0.9], ['1600px', '800px', '0px'])
    const marginLeft = useTransform(scrollYProgress, [0.1, 0.5, 0.9], ['-800px', '-400px', '0px'])
    return (
        <div className=' py-24'>
            <div className="  w-[1100px] mx-auto flex gap-8 items-center ">
                <motion.div style={{ marginLeft: marginLeft }} className=' w-1/2 '> 
                    <h3 className='text-2xl text-[#2273F8] mb-2'>About The Watch</h3>
                    <h4 className='text-3xl font-bold mb-4'>Best and Fashionable Smart Watch For Easy Life.</h4>
                    <p className='text-slate-600'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    </p>
                </motion.div>
                <div className=' w-1/2'>
                    <motion.img style={{ marginLeft: margin }} className=' rounded-xl' src={watchInHand} alt="watch" />
                </div>
            </div>
        </div>
    );
};

export default About;