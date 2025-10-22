import React from "react";
import { Link } from 'react-router-dom';

const SkillCard = ({ skill }) => {
  const { image, skillName, rating, price } = skill;

  return (
    <div className="card bg-base-100 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col p-4">
      {/* Image inside a bordered box */}
      <div className=" rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={skillName}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h2 className="text-[18px] font-semibold mb-2">{skillName}</h2>
        <p className="text-yellow-500 mb-2">⭐ {rating}</p>
        <p className="font-bold mb-4">${price}</p>

      {/* Button at the bottom */}
      <Link to={`/Skills/${skill.skillId}`} className="btn btn-primary btn-sm w-full mt-auto">
        View Details
      </Link>
      </div>
    </div>
  );
};

export default SkillCard;
