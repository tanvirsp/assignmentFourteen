import Counter from "../compoments/Counter/Counter";
import FeaturedProject from "../compoments/FeaturedProject/FeaturedProject";
import HeroSection from "../compoments/HeroSection/HeroSection";
import WorkList from "../compoments/WorkList/WorkList";

const Home = () => {
    return (
        <>
            <HeroSection />
            <WorkList />
            <Counter />
            <FeaturedProject />
           
            
        </>
    );
};

export default Home;