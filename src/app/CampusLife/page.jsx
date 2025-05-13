import CheckEligibility from '@/components/Admission/CheckEligibility';
import { TimelineDemo } from '@/components/Admission/Timeline';
import AMEEEComponent from '@/components/AMEEEE/AMEEComponent';
import AMEEEExamPattern from '@/components/AMEEEE/ExamPattern';
import WhyChooseSection from '@/components/Home/WhyChooseUs';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TimelineDemo/>
            <CheckEligibility/>
            <WhyChooseSection/>
            <AMEEEComponent/>
            <AMEEEExamPattern/>
        </div>
    );
};

export default Page;