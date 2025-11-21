import { Award, Briefcase, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './PortfolioSection';
import { Badge } from './ui/badge';

export function AboutSection() {
  const skills = [
    'Adobe Photoshop',
    'Figma',
    'Canva',
    'Capcut',
    'Adobe Premiere Pro',
    'Blender',
    'Typography',
    'Branding',
    'UI/UX Design',
    'Print Design',
    'Digital Marketing',
    '3D Design'
  ];

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] overflow-hidden border border-gray-200">
              <ImageWithFallback
                src="public/me.jpg"
                alt="About designer"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-black mb-8 tracking-tight">
              About
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hi! I'm Jamil Roi Posas a creative graphic designer just starting out, bringing a fresh perspective and immense energy to every project. I am dedicated to transforming concepts into clear, refined visuals and am excited to partner with clients across various industries to build my experience.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              My design philosophy centers on creating meaningful and impactful visual experiences through simplicity, precision, and timeless elegance.
            </p>

            {/* Skills Section */}
            <div className="mb-12">
              <h3 className="text-black mb-6 tracking-wide">EXPERTISE</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 border border-gray-300 text-gray-700 tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}