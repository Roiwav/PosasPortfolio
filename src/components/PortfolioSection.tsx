import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallback, ...props }) => {
  const [error, setError] = useState<React.SyntheticEvent<HTMLImageElement, Event> | null>(null);

  if (error || !src) {
    return <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">No Image</div>;
  }

  return <img src={src} onError={setError} {...props} />;
};

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: 'Logo Design',
      category: 'Branding',
      image: 'public/Roi Studio Badge Logo.jpg',
      description: 'A comprehensive logo design for a brand',
    },
    {
      id: 2,
      title: 'Poster Design',
      category: 'Digital Design',
      image: 'public/TECHWEEK 2025 FB Poster.png',
      description: 'Creative poster for social media campaign',
    },
    {
      id: 3,
      title: 'Creative Business poster',
      category: 'Digital Design',
      image: 'public/Sip and Dice Coffers Poster_page.jpg',
      description: 'A creative poster design for a coffee brand',
    },
    {
      id: 4,
      title: 'Web Design System',
      category: 'UI/UX',
      image: 'public/UI.png',
      description: 'Comprehensive design system for a mobile app',
    },
    {
      id: 5,
      title: 'Typography Poster',
      category: 'Digital Design',
      image: 'public/Posas_ TypographyBrandPoster.png',
      description: 'A typography-focused poster design',
    },
    {
      id: 6,
      title: 'Brand Logo',
      category: 'Digital Design',
      image: 'public/INSIGNIA HOMES Vertical Logo.jpg',
      description: 'A modern logo design for a real estate brand',
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-black mb-6 tracking-tight">
            Selected Works
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            A curated collection of recent projects demonstrating refined visual solutions across multiple disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="aspect-[4/3] overflow-hidden border border-gray-200 mb-6 bg-gray-50">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-all duration-700 p-4"
                />
              </div>
              <div>
                <div className="text-gray-500 mb-3 tracking-widest">{project.category.toUpperCase()}</div>
                <h3 className="text-black mb-3 tracking-tight">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}