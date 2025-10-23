import React, { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true }); // duration = animation time, once = animate only first time

    // Fetch skills data
    fetch("/Skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <title>SkillSwap | Skills</title>
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Skills</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
