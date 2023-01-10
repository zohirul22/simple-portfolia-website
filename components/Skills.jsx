import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen px-3'>
            <div className="max-w-[1240px] flex flex-col justify-center h-full ">
                <h1 className=' uppercase  text-2xl tracking-widest text-blue-300 px-10'>Skills</h1>
                <h2 className='py-3 text-gray-600 px-10'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300 bg-slate-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/html (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-2xl tracking-widest text-gray-300'>Html</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300 bg-red-200">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/css (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-2xl tracking-widest text-gray-200' >css</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300 bg-pink-200 ">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/tailwindcss-ar21 (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-xl tracking-widest text-gray-600' >tailwind</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300 bg-green-200">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/javascript (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-xl tracking-widest text-gray-600' >javascript</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300  bg-violet-200">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/react (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-2xl tracking-widest text-gray-600'>react</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300 bg-emerald-200">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/next.js (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-2xl tracking-widest text-gray-600'>next</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300 bg-cyan-200">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/node (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-2xl tracking-widest text-gray-600'>node</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}
                    {/*------------------ single skills------------- */}
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 duration-300 bg-blue-200">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/asserts/Skills/mongodb (1).png" alt="" width='64' height='64' />
                            </div>
                            <div className=" flex justify-center items-center">
                                <p className=' uppercase  text-2xl tracking-widest text-gray-600'>MongDb</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------ single skills------------- */}

                </div>
            </div>
        </div>
    );
};

export default Skills;
