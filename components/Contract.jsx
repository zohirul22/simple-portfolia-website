import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

const Contract = () => {
    return (
        <div id='contract'  className='w-full h-screen mx-auto'>
            <div className="max-w-[1240px] mx-auto   py-16">
                <h1 className=' uppercase  text-2xl tracking-widest text-blue-300 px-10 md:ml-20'>Contract</h1>
                <h2 className='py-3 text-2xl text-gray-600 px-10 md:ml-20'>Get In Touch</h2>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/*------------------- left side  ------------------*/}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl duration-300 md:ml-20">
                        <div className="lg:p-4 h-full">
                            {/*------------------ contract img-------------- */}
                            <div className="">
                                <img className='rounded-xl' src="https://i.ibb.co/g7bxv0z/depositphotos-78113092-stock-photo-programmer-profession-man-writing-programming.jpg" alt="/" />
                            </div>
                            {/*------------------ contract img---------------- */}

                            {/*------------------ contract paragraph-------------- */}
                            <div className="p-10 ">
                                <h2 className='uppercase pt-4   text-black'>Name Here</h2>
                                <h3 className='py-3 text-gray-600'>Front-End Developer</h3>
                                <p className='text-justify '>As a professional Front-End Web Developer. I have been working as a Web Developer over the last 2 years. Basically I’m working Web Design & Development, Responsive Design </p>
                            </div>
                            {/*------------------ contract paragraph-------------- */}


                            <div className="px-10">
                                <p className='py-3 text-xl text-gray-600  '>Contract With Me</p>

                                {/*----------------------- Social icons--------------- */}
                                <div className="flex items-center justify-between my-4 w-full sm:w-[85%]">

                                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200 ease-in duration-300">
                                        <FiFacebook />
                                    </div>
                                </div>
                                {/*----------------------- Social icons--------------- */}
                            </div>
                        </div>
                    </div>
                    {/*------------------- left side  ------------------*/}
                    {/* ------------------------------------------------------------------------- */}
                    {/*-------------------- right side----------------------- */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl duration-300 md:ml-20">
                        <div className="p-4">
                            {/*----------------------- form start------------------------ */}
                            <form >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    {/*-------------------- input field--------------------- */}
                                    <div className="flex flex-col">
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-2 flex border-gray-300' type="text" name="" id="" />
                                    </div>
                                    {/*-------------------- input field--------------------- */}
                                    <div className="flex flex-col">
                                        <label className='uppercase text-sm py-2'>phone Number</label>
                                        <input className='border-2 rounded-lg p-2 flex border-gray-300' type="text" name="" id="" />
                                    </div>
                                    {/*-------------------- input field--------------------- */}

                                </div>
                                {/*-------------------- input field--------------------- */}
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' type="email" name="" id="" />
                                </div>
                                {/*-------------------- input field--------------------- */}
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' type="text" name="" id="" />
                                </div>
                                {/*-------------------- input field--------------------- */}
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-2 flex border-gray-300' cols="10" rows="10"></textarea>
                                </div>
                                {/*-------------------- input field--------------------- */}
                                <button className='w-full p-4 mt-3 text-gray-100 bg-green-700 rounded-lg'>Send message</button>
                                {/*-------------------- input field--------------------- */}
                            </form>
                            {/*----------------------- form End------------------------ */}
                        </div>
                    </div>
                    {/*-------------------- right side----------------------- */}
                </div>

            </div>
        </div>
    );
};

export default Contract;