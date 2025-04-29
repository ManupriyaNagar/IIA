import AboutAMECourse from "@/components/Home/AboutAMECourse";
import AboutUs from "@/components/Home/AboutUs";
import AcademyInfo from "@/components/Home/AcademyInfo";
import ApplySection from "@/components/Home/ApplySection";
import CampusGallery from "@/components/Home/CampusGallery";
import Card from "@/components/Home/Card";
import CourseSection from "@/components/Home/CourseSection";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import HowToBecomeAME from "@/components/Home/HowAME";
import MissionVision from "@/components/Home/MissionVission";
import ProgramsSection from "@/components/Home/ProgramSection";
import QuoteBox from "@/components/Home/QuoteBox";
import WhyChooseSection from "@/components/Home/WhyChooseUs";



export default function Home() {
  return (
    <div>
      <Hero/>
      <AcademyInfo/>
      <AboutUs/>
      <QuoteBox/>
      {/* <MissionVision/> */}
      <CourseSection/>
      <Card/>
      {/* <ProgramsSection/> */}
     
      
      {/* <CampusGallery/> */}
      <AboutAMECourse/>
      <HowToBecomeAME/>
      <ApplySection/>
      
      <WhyChooseSection/>
      <Gallery/>
    </div>
  );
}
