import React, { useState, useEffect } from "react";
import './carousel.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data, autoSlideInterval = 3000 }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    const handleIndicatorClick = (index) => {
        setSlide(index);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        return () => clearInterval(intervalId);
    }, [slide, autoSlideInterval]);

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
            {data.map((item, idx) => (
                <img
                    key={idx}
                    src={item.src}
                    alt={item.alt}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
            ))}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
            <span className="indicators">
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleIndicatorClick(idx)}
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                    ></button>
                ))}
            </span>
        </div>
    )
}
