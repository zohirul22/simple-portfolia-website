import React from 'react';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen  flex items-center  md:px-16 p-3 '>
            <div className="max-w-[1240px] w-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className='uppercase  text-2xl tracking-widest text-blue-300'>about</p>
                    <h2 className='py-2 '>Who I A'm</h2>
                    <p className='py-2 text-gray-600'>// I am not your normal developer-- </p>

                    <p className='py-2 text-gray-600'>I’m Zohirul Islam from Dhaka in Bangladesh. As a professional Front-End Web Developer. I have been working as a Web Developer over the last 2 years. Basically I’m working Web Design & Development, Responsive Design .Now I’m studying Msc honours (Department of Mathematics) at National University of Bangladesh</p>

                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-slate-500 rounded-xl items-center justify-center p-2 hover:scale-105 case-in duration-300">
                    <img className='rounded-xl' src="https://i.ibb.co/g7bxv0z/depositphotos-78113092-stock-photo-programmer-profession-man-writing-programming.jpg" alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;