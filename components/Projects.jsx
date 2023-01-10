
import React from 'react';
import ProjectDetails from '../components/ProjectsDetails'
import project_1 from '../public/asserts/projects/project-1.png'
import project_2 from '../public/asserts/projects/project-2.png'
import project_3 from '../public/asserts/projects/project-3.png'
import project_4 from '../public/asserts/projects/project-4.png'
import project_5 from '../public/asserts/projects/project-5.png'
import project_6 from '../public/asserts/projects/project-6.png'


const Projects = () => {
    return (
        <div id='project' className='w-full'>
            <div className="max-w-[1240px] mx-auto  px-2 py-16">
                <h2 className=' uppercase  text-2xl tracking-widest text-blue-300 px-10' >Projects</h2>
                <h2 className='py-3 text-gray-600 px-10 mb-2' >What I've Build</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ProjectDetails backgroundImg={project_1} />
                    <ProjectDetails backgroundImg={project_2} />
                    <ProjectDetails backgroundImg={project_3} />
                    <ProjectDetails backgroundImg={project_4} />
                    <ProjectDetails backgroundImg={project_5} />
                    <ProjectDetails backgroundImg={project_6} />
                </div>
            </div>
        </div>
    );
};

export default Projects;