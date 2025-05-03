import Banner from '@/components/IIAG/banner';
import { StickyScrollRevealDemo } from '@/components/IIAG/Stiky';
import TextGenerateEffect from '@/components/IIAG/TextGenrateEffect';
import { TypewriterEffectSmooth, TypewriterEffectSmoothDemo } from '@/components/IIAG/TypeWritting';
import React from 'react';

const Page = () => {
    return (
        <div>
          <Banner/>
        
          <TextGenerateEffect/> 
          {/* <TypewriterEffectSmooth/> */}
          <TypewriterEffectSmoothDemo/>
          <StickyScrollRevealDemo/>
        </div>
    );
};

export default Page;