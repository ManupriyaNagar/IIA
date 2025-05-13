import AMEEEComponent from '@/components/AMEEEE/AMEEComponent';
import AviationHexGrid from '@/components/AMEEEE/AviationGrid';
import Banner from '@/components/AMEEEE/Banner';
import CareerProspects from '@/components/AMEEEE/CareerProspects';
import CoursesEligibility from '@/components/AMEEEE/CourseEligibility';
import AMEEEExamPattern from '@/components/AMEEEE/ExamPattern';
// import RecruitmentSection from '@/components/AMEEEE/RecruitmentSection';
import WhyChooseAMEEE from '@/components/AMEEEE/WhyChooseAMEEE';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Banner/>
            {/* <AmeeeBanner/> */}
            <AMEEEComponent/>
            <WhyChooseAMEEE/>
            {/* <RecruitmentSection/> */}
            <AMEEEExamPattern/>
            <CoursesEligibility/>
            <CareerProspects/>
            <AviationHexGrid/>
            
        </div>
    );
};

export default Page;