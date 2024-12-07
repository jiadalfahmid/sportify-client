import Categories from "../Categories/Categories";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Hero from "../Hero/Hero";
import ProductSection from "../ProductSection/ProductSection";

const Home = () => {
   return (
      <div>
         <Hero/>
         <ProductSection/>
         <Categories/>
         <WhyChooseUs/>
      </div>
   );
};

export default Home;