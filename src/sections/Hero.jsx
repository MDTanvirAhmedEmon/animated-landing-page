import { useRef } from "react";
import watch from "../assets/watch-1.png";
import { motion, useScroll, useTransform } from "framer-motion";


const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  console.log(opacity);

  return (
    <>
    <div className=" bg-black h-[300vh] relative">
       {/* hero blue color section*/}
      <motion.div style={{ opacity: opacity}} ref={heroRef} className=" bg-[#113266] h-[200vh] absolute top-0 right-0 left-0">
        <div className=" sticky top-10  bg-[#2273F8] h-[100vh]"></div>
  
      </motion.div>

      <motion.div className=" relative w-[1100px] mx-auto h-[100vh] flex items-center justify-center">
          <motion.div style={{ }}  whileInView={{ opacity: 1}} exit={{ opacity: 0}} animate={{ opacity:0}} viewport={{ amount: 1}} className=" w-1/2">
            <h1 className="text-white text-6xl font-bold">
              Best Landing Page For Online Product Marketing
            </h1>
            <p className="mt-10 text-slate-200">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non
            </p>
            <button className="mt-10 bg-black text-white py-3 px-5 rounded-full">
              Buy Now
            </button>
          </motion.div>
          <motion.div className=" w-1/2">
            <motion.img style={{}} src={watch} alt="watch" />
          </motion.div>
        </motion.div>

      </div>
    </>
  );
};

export default Hero;
