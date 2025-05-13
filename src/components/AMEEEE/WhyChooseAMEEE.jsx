"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "National Recognition",
    description:
      "AMEEE is recognized as a top-level exam in the aviation sector, providing access to the best aviation education."
  },
  {
    title: "Up to 100% Scholarship",
    description:
      "Scholarships are awarded to the top performers, reducing financial barriers for deserving candidates."
  },
  {
    title: "Wide Career Options",
    description:
      "Qualifying AMEEE opens the door to numerous career paths within aviation, from aircraft maintenance to pilot training, and beyond."
  }
];

export default function WhyChooseAMEEE() {
  return (
    <section className="bg-blue-50 py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue mb-10">
          Why Choose AMEEE?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 text-left border-t-4 border-blue"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-blue mr-2" />
                <h3 className="text-xl font-semibold text-blue">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
