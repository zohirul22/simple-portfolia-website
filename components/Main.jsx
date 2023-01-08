import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {FiFacebook } from 'react-icons/fi';
import {  AiOutlineMail} from 'react-icons/ai';

const Main = () => {
    return (
        <div className='text-center h-screen w-full'>
            <div className="max-w-[1240px] h-full w-full mx-auto flex justify-center items-center">
                <div className="">
                    <p className='uppercase text-sm  tracking-widest text-gray-400'>Lets Builds something Together.</p>
                    <h1 className='py-3 text-gray-800'>Hi , I'm <span className='text-blue-700'>Clint</span></h1>
                    <h1 className='py-3 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='mx-auto max-w-[70%] text-gray-600 text-justify'>I’m Zohirul Islam from Dhaka in Bangladesh. As a professional Front-End Web Developer. I have been working as a Web Developer over the last 2 years. Basically I’m working Web Design & Development, Responsive Design .Now I’m studying Msc honours (Department of Mathematics) at National University of Bangladesh</p>
               
                <div className="flex justify-center align-between max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200  ease-in duration-300 mx-2 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200  ease-in duration-300 mx-2">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200  ease-in duration-300 mx-2">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-slate-600 hover:text-yellow-200  ease-in duration-300 mx-2">
                  <FiFacebook />
                </div>
                

                </div>
            </div>
            </div>
        </div>
    );
};

export default Main;