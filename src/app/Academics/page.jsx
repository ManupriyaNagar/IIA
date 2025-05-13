import CarouselMarquee from '@/components/Academics/CardMarquee';
import Banner from '@/components/Academics/Main';
import PlacementSheetHighlight from '@/components/Academics/PlacementSheet';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Banner/>
           <CarouselMarquee/>
           <PlacementSheetHighlight/>
        </div>
    );
};

export default Page;