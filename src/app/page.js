import AboutAMECourse from "@/components/Home/AboutAMECourse";
import AboutUs from "@/components/Home/AboutUs";
import ApplySection from "@/components/Home/ApplySection";
import CampusGallery from "@/components/Home/CampusGallery";
import CourseSection from "@/components/Home/CourseSection";
import Hero from "@/components/Home/Hero";
import MissionVision from "@/components/Home/MissionVission";
import WhyChooseSection from "@/components/Home/WhyChooseUs";



export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <MissionVision/>
      <CourseSection/>
      <CampusGallery/>
      <AboutAMECourse/>
      <ApplySection/>
      <WhyChooseSection/>
    </div>
  );
}
