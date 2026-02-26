import Hero from '../components/Hero';
import Authority from '../components/Authority';
import Services from '../components/Services';
import PremiumQuality from '../components/PremiumQuality';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <Authority />
            <Services />
            <PremiumQuality />
            <Projects />
            <Testimonials />
            <FinalCTA />
        </main>
    );
};

export default Home;
