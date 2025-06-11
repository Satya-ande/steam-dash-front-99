
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-white/90 text-lg md:text-xl font-medium mb-4">
              Each Drop Count Every Second Matters
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              VAP'D DASHSTEAM
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We are revolutionizing vehicle care with sustainable innovation and eco-friendly practices. Our 
              mobile steam car wash service offers professional, water-efficient cleaning with convenience and 
              top quality.
            </p>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl">
              Backed by a ₹10 lakh seed fund from the Bihar Startup Policy, we're driving grassroots sustainability 
              with cutting-edge solutions.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
