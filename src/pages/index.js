import Categories from "@component/components/categories";
import Header from "@component/components/header";
import Work from "@component/components/work";

export default function Home() {
  return (
    <div className="bg-[#fbfbfb]">
      <Header />
      <Work />
      <Categories />
    </div>
  )
}
