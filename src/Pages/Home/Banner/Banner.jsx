import banner1 from '../../../assets/Resource/Banner/Group 34991.png';
import banner2 from '../../../assets/Resource/Banner/Group 7.png';
import banner3 from '../../../assets/Resource/Banner/Group 6.png';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="w-full bg-[#54a39d]">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-12 py-12 min-h-[600px] lg:min-h-[800px] relative">
                <motion.img
                    animate={{
                        x: [0, 50, 0],
                        scale: [1, 1.5, 1.5, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{ ease: "easeOut", duration: 5, repeat: Infinity, }}
                    className='absolute top-25 z-1' src={banner3} alt="" />
                {/* Text Section */}
                <div className="text-center lg:text-left max-w-xl relative">
                    <motion.img
                        animate={{ x: [0, 100, 0], y: [10, 30, 0], opacity: 1, scale: 1 }}
                        transition={{ ease: "easeOut", duration: 5, repeat: Infinity, }}

                        className='absolute -right-5' src={banner2} alt="" />
                    <h1 className="text-3xl md:text-5xl font-bold text-white">Your Best Medical Help Center</h1>
                    <p className="py-4 text-white text-base md:text-lg">
                        Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.
                    </p>

                    <button className="btn btn-primary bg-[#F7A582] rounded-lg mt-2">All Service</button>
                </div>

                {/* Image Section */}
                <div className="mb-8 lg:mb-0">
                    <img
                        src={banner1}
                        alt="Banner"
                        className="w-60 md:w-80 lg:w-[400px] rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
