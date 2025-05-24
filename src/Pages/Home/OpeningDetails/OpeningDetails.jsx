import { IoLocationSharp } from "react-icons/io5";

const OpeningDetails = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-16 mt-8 md:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 sd:gap-10 justify-center">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#07332F] rounded-2xl py-6 px-4 sm:px-6 text-center mb-5">
                <p className="text-white text-xl sm:text-2xl font-semibold mb-2 pt-10 ">Opening Hours</p>
                <p className="text-white text-base sm:text-lg pb-10">Open 9:00 AM to 5:00 PM Every Day</p>
            </div>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#F7A582] rounded-2xl py-6 px-4 sm:px-6 text-center mb-5">
                <div className="flex items-center gap-5">
                    <div className="text-[30px]">
                        <IoLocationSharp />
                    </div>
                    <div className="text-justify">
                        <p className="text-white text-xl sm:text-2xl font-semibold mb-2 pt-10 ">Our Locations</p>
                        <p className="text-white text-base sm:text-lg pb-10">Dhanmondi, Dhaka-1200</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#07332F] rounded-2xl py-6 px-4 sm:px-6 text-center mb-5">
                <p className="text-white text-xl sm:text-2xl font-semibold mb-2 pt-10 ">Contact Us</p>
                <p className="text-white text-base sm:text-lg pb-10">+8801750000000</p>
                {/* <p className="text-white text-base sm:text-lg pb-10">+88 01750 00 00 00</p> */}
            </div>
        </div>
    );
};

export default OpeningDetails;
