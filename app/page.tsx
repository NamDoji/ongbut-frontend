import { HeroSection } from "@/components/home/HeroSection";
import { AwardsSection } from "@/components/home/AwardsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeacherStory } from "@/components/home/TeacherStory";
import { FeaturedSubjects } from "@/components/home/FeaturedSubjects";
import { EnrollmentBanner } from "@/components/home/EnrollmentBanner";
import { TeacherPreview } from "@/components/home/TeacherPreview";
import { NewsPreview } from "@/components/home/NewsPreview";
import { ConsultForm } from "@/components/home/ConsultForm";
import { LaunchGallery } from "@/components/home/LaunchGallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
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
