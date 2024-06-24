import watch from '../assets/watch-1.png'

const Hero = () => {
    return (
        <div className=" bg-[#2273F8] h-[100vh]">
            <div className=" w-[1100px] mx-auto h-full flex items-center justify-center">
                <div className=''>
                    <h1 className='text-white text-7xl font-bold'>Best Landing Page For Online Product Marketing</h1>
                    <p className='mt-10 text-slate-200'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non
                    </p>
                    <button className='mt-10 bg-black text-white py-3 px-5 rounded-full'>Buy Now</button>
                </div>
                <div>
                    <img width='1000px' src={watch} alt="watch" />
                </div>

            </div>
        </div>
    );
};

export default Hero;