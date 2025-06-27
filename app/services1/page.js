
'use client';

import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      title: 'Hair Cut',
      image: '/services/hair.jpg',
      description: 'Classic, fade, or modern styles crafted by experienced stylists.',
      category: 'Hair',
    },
    {
      title: 'Hair Trimming',
      image: '/services/hairtriming.jpg',
      description: 'Maintain your look with a clean, precise trim.',
      category: 'Hair',
    },
    {
      title: 'Hair Cut (Kids)',
      image: '/services/kid.jpg',
      description: 'Gentle and stylish cuts for kids of all ages.',
      category: 'Hair',
    },
    {
      title: 'Shaving / Trimming',
      image: '/services/shave.jpg',
      description: 'Smooth shave or a neat trim using premium tools.',
      category: 'Beard',
    },
    {
      title: 'Beard Styling with Scissors',
      image: '/services/beardstyling.jpg',
      description: 'Detailed beard sculpting using professional techniques.',
      category: 'Beard',
    },
    {
      title: 'Beard Coloring',
      image: '/services/beard-color.jpg',
      description: 'Custom beard shades to match your personal style.',
      category: 'Beard',
    },
    {
      title: 'Hair Dye',
      image: '/services/dye.jpg',
      description: 'Vibrant hair coloring using safe and lasting formulas.',
      category: 'Hair',
    },
    {
      title: 'Hair Straightening',
      image: '/services/straightening.jpg',
      description: 'Sleek and smooth styles with long-lasting results.',
      category: 'Hair',
    },
    {
      title: 'Hair Wash & Blow Dry',
      image: '/services/blowdry.jpg',
      description: 'Fresh wash followed by expert blow drying and styling.',
      category: 'Hair',
    },
    {
      title: 'Hair Coloring',
      image: '/services/hair-color.jpg',
      description: 'Customized coloring for a new, fresh look.',
      category: 'Hair',
    },
    {
      title: 'Nose Wax',
      image: '/services/nose-wax.jpg',
      description: 'Painless hair removal for a clean look.',
      category: 'Facial',
    },
    {
      title: 'Sticky Hair Removal',
      image: '/services/sticky-wax.jpg',
      description: 'Effective sticky wax hair removal for smooth skin.',
      category: 'Facial',
    },
    {
      title: 'Nose Mask',
      image: '/services/nose-mask.jpg',
      description: 'Cleansing mask for clear, blackhead-free nose.',
      category: 'Facial',
    },
    {
      title: 'Facial Mask',
      image: '/services/facial-mask.jpg',
      description: 'Skin-rejuvenating masks for a fresh glow.',
      category: 'Facial',
    },
    {
      title: 'Facial',
      image: '/services/facial.jpg',
      description: 'Deep cleansing and hydration for healthy skin.',
      category: 'Facial',
    },
    {
      title: 'Facial (No Steam)',
      image: '/services/facial-no-steam.jpg',
      description: 'Gentle facial without steam for sensitive skin.',
      category: 'Facial',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-black px-6 py-33 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 border-b border-black pb-4">
        Our Services
      </h1>

      <div className="space-y-16">
        {['Hair', 'Beard', 'Facial'].map((section) => (
          <div key={section}>
            <h2 className="text-3xl font-semibold border-l-8 border-black pl-4 mb-8">
              {section} Services
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === section)
                .map((service, index) => (
                  <div
                    key={index}
                    className="cursor-pointer group bg-white border border-gray-300 hover:border-black shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 rounded-2xl overflow-hidden transform hover:scale-[1.02]"
                  >
                    <div className="w-full aspect-square relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-black">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

