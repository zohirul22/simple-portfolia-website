import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

const SocialLogin = () => {
    return (
        <div>
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
    );
};

export default SocialLogin;