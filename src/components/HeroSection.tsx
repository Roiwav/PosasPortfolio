import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './PortfolioSection';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1.5 border border-black rounded-full mb-8 tracking-wider">
              GRAPHIC DESIGNER
            </div>
            <h1 className="text-black mb-8 tracking-tight">
              Crafting Visual Excellence Through Minimalist Design
            </h1>
            <p className="text-gray-500 mb-12 max-w-lg leading-relaxed">
              Creating timeless visual identities and elegant design solutions with precision, clarity, and sophistication.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button 
                onClick={scrollToPortfolio} 
                size="lg"
                className="tracking-wide"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={scrollToContact} 
                variant="outline" 
                size="lg"
                className="tracking-wide"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzMyNjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Designer workspace"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}