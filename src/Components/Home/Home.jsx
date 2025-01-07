import Categories from "../Categories/Categories";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Hero from "../Hero/Hero";
import ProductSection from "../ProductSection/ProductSection";
import FAQ from "../FAQ/FAQ";

const Home = () => {
   return (
      <div className="bg-base-200">
         <Hero/>
         <Categories/>
         <ProductSection/>
         <WhyChooseUs/>
         <FAQ/>
      </div>
   );
};

export default Home;