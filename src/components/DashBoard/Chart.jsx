import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5C5C', '#A569BD'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
};

const Chart = () => {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolled(courses);
  }, []);

  const chartData = enrolled.map((course, index) => ({
    name: course.skillName,
    uv: course.rating * 20,
    color: colors[index % colors.length],
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        {enrolled.length === 0 ? (
          <p className="text-center text-gray-600">You have not enrolled in any course yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip />
              <Bar dataKey="uv" shape={TriangleBar} label={{ position: 'top', fontSize: 12 }}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Link to="/Skills" className="btn btn-primary">
          Browse More Skills
        </Link>
      </div>
    </div>
  );
};

export default Chart;
