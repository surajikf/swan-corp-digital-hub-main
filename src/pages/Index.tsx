import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroCarousel from '@/components/home/HeroCarousel';
import AboutOverview from '@/components/home/AboutOverview';
import VideoSection from '@/components/home/VideoSection';
import BusinessVerticals from '@/components/home/BusinessVerticals';
import InvestorsSection from '@/components/home/InvestorsSection';
import SustainabilitySection from '@/components/home/SustainabilitySection';
import CareersSection from '@/components/home/CareersSection';

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <AboutOverview />
      <VideoSection />
      <BusinessVerticals />
      <InvestorsSection />
      <SustainabilitySection />
      <CareersSection />
    </Layout>
  );
};

export default Index;
