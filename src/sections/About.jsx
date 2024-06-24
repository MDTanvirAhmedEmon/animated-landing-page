import watchInHand from '../assets/about-img.jpg'

const About = () => {
    return (
        <div className=' py-24'>
            <div className="  w-[1100px] mx-auto flex gap-8 items-center ">
                <div className=' w-1/2'> 
                    <h3 className='text-2xl text-[#2273F8] mb-2'>About The Watch</h3>
                    <h4 className='text-3xl font-bold mb-4'>Best and Fashionable Smart Watch For Easy Life.</h4>
                    <p className='text-slate-600'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    </p>
                </div>
                <div className=' w-1/2'>
                    <img className=' rounded-xl' src={watchInHand} alt="watch" />
                </div>
            </div>
        </div>
    );
};

export default About;