import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonials = (props) => {
    //reviews naam ke variable me data ke andr ke reviews ko store krenge
    let reviews = props.reviews;
    //by default 0th index ka data show krenge
    const [index, setIndex] = useState(0);
    //agr i index pe hai to i ke left index ke data ko show krenge left arrow pe click hoga to
    function leftShiftHandler() {
        //agr 1st index me hai to index ko last index pe set krwa denge
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        //ni to normally left index ka data show krenge
        else {
            setIndex(index - 1);
        }
    }
    //agr i index pe hai to i ke right wale index ka data show krenge right arrow pe click hoga to
    function rightShiftHandler() {
        //agr last index me hai to 1st index set krdenge
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        //agr i index pe hai to i ke right index waale data ko show krenge
        else {
            setIndex(index+1);
        }
    }
    //random index ka data show hoga agr surprise me me click krenge to
    function surpriseHandler() {
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    //card
    //left arrow
    //right arrow
    //surprise me button
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

        <Card review = {reviews[index]}></Card>
     

      <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronRight/>
        </button>
      </div>

      <div className='mt-6'>
        <button
        onClick={surpriseHandler}
         className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
