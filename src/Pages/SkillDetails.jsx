import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const SkillDetails = () => {
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/Skills.json')
      .then(res => res.json())
      .then(data => {
        const selectedSkill = data.find(s => s.skillId === parseInt(skillId));
        setSkill(selectedSkill);
      })
      .catch(err => console.error(err));
  }, [skillId]);

  // Set page title when skill is loaded
  useEffect(() => {
    if (skill) {
      document.title = `SkillSwap | ${skill.skillName}`;
    }
  }, [skill]);

  if (!skill) return <p className="text-center mt-10">Loading...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (skill.slotsAvailable <= 0) {
      toast.error('No slots available!');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

    const alreadyEnrolled = existing.find(item => item.skillId === skill.skillId);
    if (alreadyEnrolled) {
      toast.error('You have already enrolled in this course!');
      return;
    }

    // Add skill to enrolled courses
    const updated = [...existing, skill];
    localStorage.setItem('enrolledCourses', JSON.stringify(updated));

    // Decrement available slot
    setSkill({ ...skill, slotsAvailable: skill.slotsAvailable - 1 });

    toast.success(`Session booked successfully for ${name}!`);

    // Clear form
    setName('');
    setEmail('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[var(--color-neutral)] rounded-lg shadow-md mt-8">
      <Toaster />
      
      {/* Skill Image */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Skill Info */}
      <h1 className="text-3xl font-bold mb-2">{skill.skillName}</h1>
      <p className="text-gray-600 mb-2">By {skill.providerName}</p>
      <p className="text-yellow-500 font-semibold mb-2">⭐ {skill.rating}</p>
      <p className="font-bold mb-4">${skill.price}</p>
      <p className="mb-4">{skill.description}</p>
      <p className="mb-2">
        <span className="font-semibold">Slots Available:</span> {skill.slotsAvailable}
      </p>
      <p className="badge badge-primary text-[12px] py-1 px-2 mb-4">{skill.category}</p>

      {/* Book Session Form */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Book a Session</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
