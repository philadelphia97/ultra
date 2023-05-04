import { Climate_Crisis } from "next/font/google";
import { defaultHead } from "next/head";
import { useState } from "react";


const Banner = () => {

    const slides = [
        {'url': 'one', 'title': 'order policies'},
        {'url': 'two', 'title': 'contact information'},
        {'url': 'three', 'title': 'stock page'}
    ]

    

    const [currentIndex,setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ?  slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {    
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ?  0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return(
        <div className="banner">
        <div className="leftArrow" onClick={goToPrevious}>&#x2039;</div>
        <h1 className="banner">{`check out our ${slides[currentIndex].title}`}</h1>
        {console.log(slides[0])}
        <div className="rightArrow" onClick={goToNext}>&#x203A;</div>
        </div>
    )
}

export default Banner;