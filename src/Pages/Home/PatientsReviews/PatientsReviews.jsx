import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ReviewCard Component
const ReviewCard = ({ review }) => {
    return (
        <article className="flex flex-col justify-between h-55 rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10  ">
            <svg
                aria-hidden="true"
                width="105"
                height="78"
                className="absolute left-6 top-6 fill-slate-100"
            >
                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
            </svg>

            <blockquote className="relative">
                <p className="text-base sm:text-lg tracking-tight text-slate-900">
                    {review.review}
                </p>
            </blockquote>

            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.profession}</p>
                </div>
                <img
                    className="h-14 w-14 rounded-full object-cover"
                    src={review.image}
                    alt={review.name}
                />
            </figcaption>
        </article>
    );
};

// Main Component
const PatientsReviews = () => {
    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then((res) => res.json())
            .then(setUserReview)
            .catch((err) => console.error('Failed to load reviews:', err));
    }, []);

    return (
        <section
            id="testimonials"
            aria-label="What our customers are saying"
            className="bg-slate-50 py-5 sm:py-32 "
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-2xl text-center mb-5 md:mb-16">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl font-bold">
                        What Our Patients Says
                    </h2>
                    <p className='dark:text-black'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </header>

                <Swiper
                    navigation
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {userReview.map((review, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PatientsReviews;
