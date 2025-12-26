import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const DashboardSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // To track which skill is being removed
  const navigate = useNavigate();

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setSkills(courses);
  }, []);

  const handleDisenroll = (skillId) => {
    setLoadingId(skillId); // start loading animation

    setTimeout(() => {
      const updatedSkills = skills.filter((skill) => skill.skillId !== skillId);
      setSkills(updatedSkills);
      localStorage.setItem("enrolledCourses", JSON.stringify(updatedSkills));
      window.dispatchEvent(new Event("enrolledCoursesUpdated"));
      setLoadingId(null); // stop loading

      toast.success("Course removed successfully!");
    }, 1500); // simulate delay
  };

  if (skills.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <Toaster />
        <h1 className="text-3xl font-bold mb-4">Your Enrolled Courses</h1>
        <p className="text-gray-600 text-lg">
          You have not enrolled in any courses yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Toaster />
      <h1 className="text-3xl font-bold mb-8 text-center">Your Enrolled Courses</h1>

      <div className="flex flex-col gap-6">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-[var(--color-neutral)] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-4 p-4"
          >
            {/* Image */}
            <div className="rounded-lg overflow-hidden md:w-1/3">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Skill Info */}
            <div className="flex-1 flex flex-col justify-between ml-3">
              <div>
                <h2 className="text-lg font-semibold mb-2">{skill.skillName}</h2>
                <p className="text-gray-500 font-semibold text-sm mb-2">By {skill.providerName}</p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-yellow-500 font-semibold">⭐ {skill.rating}</p>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full font-medium">
                    #{skill.category}
                  </span>
                </div>
                <p className="font-semibold text-sm mb-2 line-clamp-3">{skill.description}</p>
              </div>

              {/* Category & Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-2">
                <p className="font-bold text-green-600">${skill.price}</p>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                    className="btn btn-sm btn-outline btn-error flex items-center gap-2"
                    onClick={() => handleDisenroll(skill.skillId)}
                    disabled={loadingId === skill.skillId}
                  >
                    {loadingId === skill.skillId ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Removing...
                      </>
                    ) : (
                      "Disenroll"
                    )}
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => navigate(`/skills/${skill.skillId}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSkills;
