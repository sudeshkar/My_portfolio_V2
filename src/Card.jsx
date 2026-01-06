import React from 'react';

const Card = ({ title, description, repoLink, imageUrl, isHosted, liveDemoLink, driveLink }) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-md transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fadeUp">
      {/* Image Section */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-xl flex justify-center items-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Card Content (Title, Description) */}
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title || 'Project Title'}
        </h5>
        <p className="block font-Bebas text-base font-light leading-relaxed text-inherit antialiased">
          {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.'}
        </p>
      </div>

      {/* Buttons Section */}
      <div className="p-6 pt-0 w-auto flex ">
        <a
          href={repoLink || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="select-none rounded-lg bg-secondary p-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          View on GitHub
        </a>

        {/* Conditionally Render "Live Demo" Button */}
        {isHosted && liveDemoLink && (
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Live Demo
          </a>
        )}
        {/* Conditionally Render "Drive Link" Button */}
        {!isHosted && driveLink && (
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            View Drive
          </a>
        )}

      </div>
    </div>
  );
};

export default Card;
