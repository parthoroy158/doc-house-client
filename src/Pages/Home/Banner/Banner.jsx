import banner1 from '../../../assets/Resource/Banner/Group 34991.png';
import banner2 from '../../../assets/Resource/Banner/Group 7.png';
import banner3 from '../../../assets/Resource/Banner/Group 6.png';
import { motion } from 'framer-motion';   // ← use “framer-motion” (the package that exports <motion.*>)

const Banner = () => {
    return (
        <section className="w-full bg-[#54a39d] overflow-hidden">

            <div className="relative flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 lg:gap-0
                      px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-24 max-w-screen-xl mx-auto">
                <motion.img
                    src={banner3}
                    alt=""
                    className="absolute -z-10 w-40 sm:w-56 md:w-72 lg:w-96
                     top-4 sm:top-10 lg:top-20
                     left-1/2 -translate-x-1/2 lg:left-auto lg:right-4"
                    animate={{
                        x: [0, 40, 0],
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        borderRadius: ['0%', '30%', '50%', '30%', '0%'],
                    }}
                    transition={{ ease: 'easeInOut', duration: 8, repeat: Infinity }}
                />
                <div className="relative z-20 max-w-xl text-center lg:text-left">
                    <motion.img
                        src={banner2}
                        alt=""
                        className="absolute w-24 sm:w-32 md:w-40 lg:w-52
                       -top-6 right-1/2 translate-x-1/2
                       lg:static lg:translate-x-0 lg:ml-8"
                        animate={{ y: [0, 20, 0], opacity: [1, 0.8, 1], scale: [1, 1.1, 1] }}
                        transition={{ ease: 'easeInOut', duration: 6, repeat: Infinity }}
                    />
                    <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Your Best Medical Help Center
                    </h1>
                    <p className="mt-4 mb-6 text-white text-sm sm:text-base md:text-lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        It has been the industry’s standard dummy text ever since the 1500s.
                    </p>

                    <button className="btn bg-[#F7A582] border-none text-white px-8 py-3 rounded-lg shadow-md
                             hover:shadow-lg transition">
                        All Service
                    </button>
                </div>
                <div className="flex-shrink-0 z-10">
                    <img
                        src={banner1}
                        alt="Doctor illustration"
                        className="w-52 sm:w-64 md:w-80 lg:w-[420px] xl:w-[480px]
                       rounded-lg shadow-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
