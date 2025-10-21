import React from 'react';

const TopRatedCard = ({ skill }) => {
  const { image, skillName, rating, price, category } = skill;

  return (
    <div className="card bg-base-100 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col p-4">
      {/* Image inside a bordered box */}
      <div className="rounded-lg overflow-hidden mb-2">
        <img
          src={image}
          alt={skillName}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div>
            <h2 className="text-[18px] font-semibold mb-1">{skillName}</h2>
        </div>
        <div className='flex gap-4 mt-1'>
            <p className="font-semibold">${price}</p>
            <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
            <div className="badge badge-primary text-[12px] py-1 px-2">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedCard;
