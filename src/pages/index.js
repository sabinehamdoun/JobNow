import Categories from "@component/components/categories";
import Feedback from "@component/components/feedback";
import Footer from "@component/components/footer";
import Header from "@component/components/header";
import Jobs from "@component/components/jobs";
import Register from "@component/components/register";
import Work from "@component/components/work";

export default function Home() {
  return (
    <div className="bg-[#fbfbfb]">
      <Header />
      <Work />
      <Categories />
      <Jobs />
      <Feedback />
      <div className="relative">
        <div className="absolute w-full z-30">
          <Register />
        </div>
        <div className="relative top-28 sm:top-40 left-0 z-20 w-full bg-[#00cc99] pt-32 sm:pt-40">
          <Footer />
        </div>
      </div>
    </div>
  );
}
