import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully. I\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jtposas@ccc.edu.ph',
      href: 'mailto:jtposas@ccc.edu.ph',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '09916732267',
      href: 'tel:09916732267',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Calamba,Laguna',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-black mb-6 tracking-tight">
            Contact
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Let's discuss your next project and explore how we can create something exceptional together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-3 tracking-wide">
                  NAME
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-gray-300 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-3 tracking-wide">
                  EMAIL
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gray-300 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-3 tracking-wide">
                  SUBJECT
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="border-gray-300 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-3 tracking-wide">
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-gray-300 rounded-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full tracking-wide rounded-none">
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="border border-gray-200 p-12 bg-white h-full">
              <h3 className="text-black mb-8 tracking-wide">
                INFORMATION
              </h3>

              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="pb-6 border-b border-gray-200 last:border-0">
                    <div className="text-gray-500 mb-3 tracking-widest">{info.label.toUpperCase()}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-black hover:text-gray-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-black">{info.value}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200">
                <div className="text-gray-500 mb-6 tracking-widest">CONNECT</div>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/Roiwav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jamil-roi-posas-9652b6345/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/roi.aux/" // Replace with your Instagram URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}