import Categories from "../Categories/Categories";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Hero from "../Hero/Hero";
import ProductSection from "../ProductSection/ProductSection";
import FAQ from "../WhyChooseUs/FAQ/FAQ";

const Home = () => {
   return (
      <div>
         <Hero/>
         <Categories/>
         <ProductSection/>
         <WhyChooseUs/>
         <FAQ/>
      </div>
   );
};

export default Home;