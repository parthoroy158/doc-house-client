import React, { useState } from "react";
import doctorMain from "../../../assets/Resource/Banner/Rectangle 20078.png";
import imgCavity from "../../../assets/Resource/Banner/teet.png";
import imgCosmetic from "../../../assets/Resource/Banner/electro.png";
import imgSurgery from "../../../assets/Resource/Banner/Rectangle 20078.png"; // fallback

/* ------------------------------------------------------------------ */
/* Tab data: add/modify items here – UI updates automatically         */
/* ------------------------------------------------------------------ */
const TABS = [
    {
        key: "cavity",
        title: "Cavity Protection",
        image: imgCavity,
        heading: "Cavity Protection",
        blurb:
            "Early cavity detection and painless filling techniques keep your smile bright and healthy.",
    },
    {
        key: "cosmetic",
        title: "Cosmetic Dentistry",
        image: imgCosmetic,
        heading: "Cosmetic Dentistry",
        blurb:
            "Whitening, veneers, and aligners tailored to give you a brilliant, confident smile.",
    },
    {
        key: "surgery",
        title: "Oral Surgery",
        image: imgCavity,
        heading: "Oral Surgery",
        blurb:
            "From wisdom-tooth extractions to implant placement, our surgeons use minimally-invasive methods.",
    },
];

export default function Body() {
    const [active, setActive] = useState(TABS[0].key);

    const current = TABS.find((t) => t.key === active);

    return (
        <section className="w-full px-4 sm:px-6 lg:px-16 mt-8">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left hero illustration */}
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                    <img
                        src={doctorMain}
                        alt="Doctor"
                        className="w-full h-full rounded-lg shadow-xl object-cover"
                    />
                </div>

                {/* Right content */}
                <div className="w-full max-w-2xl text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight dark:text-white">
                        Our Services
                    </h1>
                    <p className="mt-4 mb-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify dark:text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>

                    {/* Tab buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 dark:text-white">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActive(tab.key)}
                                className={`px-5 py-2 rounded-lg shadow transition
                  ${active === tab.key
                                        ? "bg-[#54a39d] text-white"
                                        : "bg-white text-gray-800 hover:bg-[#F7A582]/20"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab panel */}
                    <div className="flex flex-col items-center lg:items-start gap-4 dark:text-white">
                        <img
                            src={current.image}
                            alt={current.heading}
                            className="w-full max-w-md rounded-lg shadow-md"
                        />

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight dark:text-white">
                            {current.heading}
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify dark:text-white">
                            {current.blurb}
                        </p>

                        <button className="btn btn-outline rounded-xl border-[#54a39d] text-[#F7A582] hover:bg-[#54a39d] hover:text-white transition">
                            More details
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
