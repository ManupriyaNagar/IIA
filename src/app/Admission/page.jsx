import AdmissionProcedure from '@/components/Admission/Admission';
import Banner from '@/components/Admission/banner';
import CheckEligibility from '@/components/Admission/CheckEligibility';
import ChooseCourse from '@/components/Admission/ChooseCourse';
import FeesExamInterview from '@/components/Admission/FeesExamInterview';
import FinalSteps from '@/components/Admission/FinalSteps';
import RegistrationAndDocuments from '@/components/Admission/Register';
import { TimelineDemo } from '@/components/Admission/Timeline';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Banner/>
            <AdmissionProcedure/>
            <ChooseCourse/>
            <CheckEligibility/>
            <RegistrationAndDocuments/>
            <FeesExamInterview/>
            <FinalSteps/>
            <TimelineDemo/>
        </div>
    );
};

export default Page;