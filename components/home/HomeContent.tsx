"use client";

import dynamic from "next/dynamic";

const AwardsSection    = dynamic(() => import("./AwardsSection").then(m => ({ default: m.AwardsSection })),    { ssr: false });
const WhyChooseUs      = dynamic(() => import("./WhyChooseUs").then(m => ({ default: m.WhyChooseUs })),        { ssr: false });
const TeacherStory     = dynamic(() => import("./TeacherStory").then(m => ({ default: m.TeacherStory })),      { ssr: false });
const LaunchGallery    = dynamic(() => import("./LaunchGallery").then(m => ({ default: m.LaunchGallery })),    { ssr: false });
const FeaturedSubjects = dynamic(() => import("./FeaturedSubjects").then(m => ({ default: m.FeaturedSubjects })), { ssr: false });
const EnrollmentBanner = dynamic(() => import("./EnrollmentBanner").then(m => ({ default: m.EnrollmentBanner })), { ssr: false });
const TeacherPreview   = dynamic(() => import("./TeacherPreview").then(m => ({ default: m.TeacherPreview })),  { ssr: false });
const NewsPreview      = dynamic(() => import("./NewsPreview").then(m => ({ default: m.NewsPreview })),        { ssr: false });
const ConsultForm      = dynamic(() => import("./ConsultForm").then(m => ({ default: m.ConsultForm })),        { ssr: false });

export function HomeContent() {
  return (
    <>
      <AwardsSection />
      <WhyChooseUs />
      <TeacherStory />
      <LaunchGallery />
      <FeaturedSubjects />
      <EnrollmentBanner />
      <TeacherPreview />
      <NewsPreview />
      <ConsultForm />
    </>
  );
}
