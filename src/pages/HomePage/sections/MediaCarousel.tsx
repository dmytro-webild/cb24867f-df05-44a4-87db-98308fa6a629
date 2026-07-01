import React from 'react';
import Carousel from '@/components/ui/Carousel';
import ImageOrVideo from '@/components/ui/ImageOrVideo';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MediaCarouselSection() {
  const images = [
    "https://storage.googleapis.com/webild/users/user_3FtXGZmo2q34ph3RhCNPCt0XPUG/uploaded-1782898092527-2qlsj3la.png",
    "https://storage.googleapis.com/webild/users/user_3FtXGZmo2q34ph3RhCNPCt0XPUG/uploaded-1782898092529-kmn0xb0w.png",
    "https://storage.googleapis.com/webild/users/user_3FtXGZmo2q34ph3RhCNPCt0XPUG/uploaded-1782898092530-w252bepw.png"
  ];

  return (
    <section id="media-carousel" data-webild-section="media-carousel" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="mb-12 text-center">
          <TextAnimation variant="fade-blur" tag="h2" className="text-4xl md:text-5xl font-bold text-foreground mb-4" text="Product Gallery" gradientText={false} />
          <TextAnimation variant="fade-blur" tag="p" className="text-lg text-accent" text="Take a closer look at our product." gradientText={false} />
        </div>
        <ScrollReveal variant="slide-up">
          <Carousel className="w-full">
            {images.map((src, index) => (
              <div key={index} className="w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 pr-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg card">
                  <ImageOrVideo imageSrc={src} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}