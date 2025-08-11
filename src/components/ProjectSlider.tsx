// components/ProjectSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
    images: string[];
    name: string;
};

export const ProjectSlider = ({ images, name }: Props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative group w-full h-48 overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="w-full h-[300px] md:h-[450px] relative"
            >
                {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            {/* Blurred Background */}
                            <img
                                src={img}
                                alt="Blurred Background"
                                className="absolute top-0 left-0 w-full h-full object-cover blur-md scale-110"
                            />

                            {/* Foreground Image */}
                            <img
                                src={img}
                                alt={`Slide ${i + 1}`}
                                className="relative z-10 w-[80%] max-w-[600px] object-contain rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Arrows */}
                <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-black/50 text-white text-lg flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80">
                    ‹
                </div>
                <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-black/50 text-white text-lg flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80">
                    ›
                </div>
            </Swiper>


            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Navigation Buttons */}
            <div
                ref={prevRef}
                className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 bg-black/50 text-white text-xs flex items-center justify-center rounded-full cursor-pointer hover:bg-black/70"
            >
                ‹
            </div>
            <div
                ref={nextRef}
                className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 bg-black/50 text-white text-xs flex items-center justify-center rounded-full cursor-pointer hover:bg-black/70"
            >
                ›
            </div>
        </div>
    );
};
