import React from 'react';
import Image from 'next/image';

const ProjectsDetails = ({ backgroundImg }) => {
    return (
        <div>
            <div className="relative flex justify-center align-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-blue-600" >
                <Image className='rounded-xl group-hover:opacity-10 h-96' src={backgroundImg} alt="" />
            </div>
        </div>
    );
};

export default ProjectsDetails;