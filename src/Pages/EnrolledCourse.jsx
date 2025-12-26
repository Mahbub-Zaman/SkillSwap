import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SkillCard from '../components/SkillCard';


const EnrolledCourse = () => {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolled(courses);
  }, []);

  if (enrolled.length === 0) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">Enrolled Courses</h1>
        <p className="text-2xl font-semibold text-gray-600">
          You have not enrolled in any course yet.
        </p>
      </div>
    );
  }


  return (
    <div className="max-w-6xl mx-auto py-14">
      <title>SkillSwap | Enrolled Course</title>
      <h1 className="text-3xl font-bold mb-6 text-center">Enrolled Courses</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {enrolled.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Link to="/Skills" className="btn btn-primary">
          Browse More Skills
        </Link>
      </div>
    </div>
  );
};

export default EnrolledCourse;
