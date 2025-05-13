"use client";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const examPattern = [
  {
    title: "Physics",
    description:
      "Focus on key principles related to aerodynamics, mechanics, and material science."
  },
  {
    title: "Mathematics",
    description:
      "Questions on algebra, calculus, geometry, and other essential mathematical concepts."
  },
  {
    title: "Chemistry",
    description:
      "Basic chemistry knowledge, with a focus on materials science and chemistry used in aviation."
  },
  {
    title: "Number of Questions",
    description: "100 Objective-Type Questions."
  },
  {
    title: "Duration",
    description: "2 Hours"
  },
  {
    title: "Medium",
    description: "Available in both English and Hindi."
  },
  {
    title: "Negative Marking",
    description: "No negative marking, allowing students to attempt all questions with confidence."
  }
];

export default function AMEEEExamPattern() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue text-center mb-12">
          AMEEE Exam Pattern
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {examPattern.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-blue-50 rounded-xl shadow-md p-6 border-l-4 border-blue"
            >
              <div className="flex items-center mb-3">
                <BookOpen className="text-blue mr-3" />
                <h3 className="text-lg font-semibold text-blue">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
