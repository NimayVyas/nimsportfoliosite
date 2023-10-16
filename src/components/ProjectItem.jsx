import React from 'react';

const ProjectItem = ({ image, technologies, name }) => {
  return (
    <div className='projectItem bg-gray-700 bg-opacity-60 p-4 rounded-lg shadow-md my-1'>
      <h1 className='text-xl hover:text-gray-200 font-bold mb-4'>{name}</h1>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className='bgImage w-32 h-32 bg-cover bg-center m-auto mb-4'>
    </div>
      <p className='text-gray-400 hover:text-green-300 text-center'>{technologies}</p>
    </div>
  );
};

export default ProjectItem;

