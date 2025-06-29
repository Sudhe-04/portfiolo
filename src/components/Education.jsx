import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Engineering",
      institution: "Your College Name",
      year: "2020-2024",
      specialization: "Computer Science",
      score: "CGPA: X.XX"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Your School Name",
      year: "2018-2020",
      score: "Percentage: XX%"
    },
    {
      degree: "Secondary Education",
      institution: "Your School Name",
      year: "2018",
      score: "Percentage: XX%"
    }
  ];

  return (
    <section id="education" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationDetails.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
              {edu.specialization && (
                <p className="text-gray-500">{edu.specialization}</p>
              )}
              <p className="text-gray-500">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
