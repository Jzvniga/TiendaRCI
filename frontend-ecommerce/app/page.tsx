import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";


export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <ChooseCategory />
    </main>
  );
}