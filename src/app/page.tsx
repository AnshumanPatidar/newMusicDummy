import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MeetMorePeople from "./components/MeetMorePeople";
import TestomonialCards from "./components/TestomonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return <>
       <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection></HeroSection>
        <FeaturedCourses></FeaturedCourses>
        <WhyChooseUs></WhyChooseUs>
        <TestomonialCards></TestomonialCards>
        <UpcomingWebinars></UpcomingWebinars>
        <MeetMorePeople></MeetMorePeople>
        <Footer></Footer>
       </main>
  </>
}
