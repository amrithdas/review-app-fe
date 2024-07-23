import React, { useState } from 'react'
import { Transition } from '@headlessui/react';
import { FiChevronLeft, FiChevronRight, } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';



function WriteaReviewSearch() {
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="max-w-2xl mx-64	p-6">
        <div className='flex flex-row	 justify-between items-center		'>
          <h1 className="text-3xl font-bold mb-4">Chuck E. Cheese</h1>
          <p className="text-blue-500 mb-4 cursor-pointer">Read our review guidelines</p>
        </div>
        <div className="border p-4 mb-4 focus:ring-violet-300">
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="text-3xl focus:outline-none text-gray-200 p-2"
            >
              <FaStar className={rating >= star ? 'text-white bg-yellow-400 rounded p-1' : 'text-white bg-gray-100 rounded p-1'}  />
            </button>
          ))}
          <span className="ml-2">Select your rating</span>
        </div>
          <p className="mb-4">A few things to consider in your review</p>
          <div className="flex space-x-2 mb-4">
            <span className="bg-gray-200 px-2 py-1 rounded">Food</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Service</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Ambiance</span>
          </div>
          <textarea

            rows={8}
            className="w-full p-2 focus:outline-none resize-none rows-12 no-scrollbar overflow-hidden"
            style={{ height: 'auto' }}
          />
        </div>
        <button className="mt-12 bg-red-600 text-white px-14 py-2 rounded font-medium">Post Review</button>


      </div>

{/************* Expand and Collapse review bar *********************************************8*/}

      <div className="flex justify-end items-start	 h-screen fixed top-0 right-0">
        <div className="w-full max-w-sm	 ">
        <div className="flex items-start">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="mt-4 bg-white-500 border text-black py-4  rounded-tl-lg rounded-bl-lg flex items-center"
                    >
                        <span className="ml-2">
                            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
                        </span>
                    </button>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="p-4 bg-white border border-gray-200 rounded-lg max-h-screen overflow-y-auto">
              <div className="mt-6 ">
                <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Stephanie W. <span className="text-gray-500">3/24/2024</span></p>
                  <p>If you're hesitant about having your party here don't be. Just book it. The place is clean, staff responsive, and the food is delicious. When you book it'll seem like it goes into the online void but someone will call you a week before your party to confirm details. This is also when you will specify what types of speciality pizzas you want in...</p>
                </div>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Mari A. <span className="text-gray-500">3/6/2024</span></p>
                  <p>Celebrated my daughter's bday here because she is starting to take interest in arcades and games. The party package included a 2hr free play for her and her friends for $38.99/pp and 2 slices of pizza per child and soda/ice cream and goody bag. No extras for having birthday...</p>
                </div>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Mari A. <span className="text-gray-500">3/6/2024</span></p>
                  <p>Celebrated my daughter's bday here because she is starting to take interest in arcades and games. The party package included a 2hr free play for her and her friends for $38.99/pp and 2 slices of pizza per child and soda/ice cream and goody bag. No extras for having birthday...</p>
                </div>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Mari A. <span className="text-gray-500">3/6/2024</span></p>
                  <p>Celebrated my daughter's bday here because she is starting to take interest in arcades and games. The party package included a 2hr free play for her and her friends for $38.99/pp and 2 slices of pizza per child and soda/ice cream and goody bag. No extras for having birthday...</p>
                </div>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Mari A. <span className="text-gray-500">3/6/2024</span></p>
                  <p>Celebrated my daughter's bday here because she is starting to take interest in arcades and games. The party package included a 2hr free play for her and her friends for $38.99/pp and 2 slices of pizza per child and soda/ice cream and goody bag. No extras for having birthday...</p>
                </div>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Mari A. <span className="text-gray-500">3/6/2024</span></p>
                  <p>Celebrated my daughter's bday here because she is starting to take interest in arcades and games. The party package included a 2hr free play for her and her friends for $38.99/pp and 2 slices of pizza per child and soda/ice cream and goody bag. No extras for having birthday...</p>
                </div>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Mari A. <span className="text-gray-500">3/6/2024</span></p>
                  <p>Celebrated my daughter's bday here because she is starting to take interest in arcades and games. The party package included a 2hr free play for her and her friends for $38.99/pp and 2 slices of pizza per child and soda/ice cream and goody bag. No extras for having birthday...</p>
                </div>
                <div className=" p-4 mb-4">
                  <p className="font-bold">Mari A. <span className="text-gray-500">3/6/2024</span></p>
                  <p>Celebrated my daughter's bday here because she is starting to take interest in arcades and games. The party package included a 2hr free play for her and her friends for $38.99/pp and 2 slices of pizza per child and soda/ice cream and goody bag. No extras for having birthday...</p>
                </div>
              </div>
            </div>
          </Transition>
          </div>
        </div>
      </div>

    </>

  );
}

export default WriteaReviewSearch;
