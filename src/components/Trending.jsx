import React, { useEffect, useState } from 'react';
import TopRatedCard from '../components/TopRatedCard';

const Trending = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/Skills.json') // JSON must be in public folder
      .then((res) => res.json())
      .then((data) => {
        const topRated = data
          .sort((a, b) => b.rating - a.rating) // sort descending by rating
          .slice(0, 6); // take top 6
        setSkills(topRated);
      })
      .catch((err) => console.error('Error fetching skills:', err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mt-4 mb-4">Top Rated Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <TopRatedCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
