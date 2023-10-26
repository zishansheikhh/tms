import Topbar from "../components/topbar/topbar.component";
import HeroBanner from "../components/hero-banner/hero-banner.component";
// import PartnerSection from "../components/partners/partners.component";
import HomepageWorkshopHighlight from "../components/studio-booking/studio-booking.component";
import Footer from "../components/footer/footer.component";
import Services from "../components/courses/courses.component";
import Testimonials from "../components/testimonials/testimonails.component";

const LandingPage = () => {
  return (
    <div>
      <Topbar />
      <HeroBanner />
      <HomepageWorkshopHighlight />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
