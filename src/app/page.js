import AboutAMECourse from "@/components/Home/AboutAMECourse";
import AboutUs from "@/components/Home/AboutUs";
import AcademyInfo from "@/components/Home/AcademyInfo";
import ApplySection from "@/components/Home/ApplySection";
import AbesAtAGlance from "@/components/Home/AtGlance";
import CampusGallery from "@/components/Home/CampusGallery";
import Card from "@/components/Home/Card";
import CourseSection from "@/components/Home/CourseSection";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import HexagonGrid from "@/components/Home/HexagonGrid";
import HowToBecomeAME from "@/components/Home/HowAME";
import InfoCard from "@/components/Home/InfoCard";
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
      <AbesAtAGlance/>
      <CourseSection/>
      <Card/>
      <AboutAMECourse/>
      <HowToBecomeAME/>
      <WhyChooseSection/>
      <Gallery/>
    </div>
  );
}
