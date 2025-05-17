"use client";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials/Animated";

import VideoTestimonials from "@/components/Testimonials/VideoSection";
import { VideoOffIcon } from "lucide-react";
import React from "react";


export default function page() {
  return (
   <div>
     <VideoTestimonials/>
   <AnimatedTestimonialsDemo/>

   </div>
  );
}
