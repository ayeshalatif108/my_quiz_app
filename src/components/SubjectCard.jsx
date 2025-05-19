'use client';

import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function SubjectCard({ subject }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/quiz/${subject.name.toLowerCase()}`);
  };
  return (
    <div
      onClick={handleClick}
      className="group relative border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.03] bg-white"
    >
      {/* Image with hover zoom and rounded top corners */}
      <div className="overflow-hidden rounded-t-2xl">
        <Image
          src={subject.image}
          alt={`${subject.name} image`}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
  
      {/* Text Content with gradient and glow on hover */}
      <div className="p-5 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <h2 className="text-2xl font-semibold text-center text-gray-800 group-hover:text-blue-700 transition-all duration-300 tracking-wide">
          {subject.name}
        </h2>
        <p className="text-center text-gray-600 text-md mt-2">
          {subject.questions.length} Questions
        </p>
      </div>
  
      {/* Glow Line Decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full shadow-md"></div>
    </div>
  );
  
}
