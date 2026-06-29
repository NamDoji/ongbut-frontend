import { HeroSection } from "@/components/home/HeroSection";
import { AwardsSection } from "@/components/home/AwardsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedSubjects } from "@/components/home/FeaturedSubjects";
import { EnrollmentBanner } from "@/components/home/EnrollmentBanner";
import { TeacherPreview } from "@/components/home/TeacherPreview";
import { NewsPreview } from "@/components/home/NewsPreview";
import { ConsultForm } from "@/components/home/ConsultForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AwardsSection />
      <WhyChooseUs />
      <FeaturedSubjects />
      <EnrollmentBanner />
      <TeacherPreview />
      <NewsPreview />
      <ConsultForm />
    </>
  );
}
