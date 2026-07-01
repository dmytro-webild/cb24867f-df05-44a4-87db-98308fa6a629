import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import Tag from "@/components/ui/Tag";

export default function BentoFeaturesSection() {
  return (
    <section className="relative w-full py-24 bg-background" data-webild-section="bento-features" id="bento-features">
      <div className="w-content-width mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <ScrollReveal variant="fade">
            <Tag text="Features" className="mb-4" />
          </ScrollReveal>
          <TextAnimation
            text="Advanced Neck Therapy"
            variant="slide-up"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            gradientText={false}
          />
          <ScrollReveal variant="fade" delay={0.1}>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Experience the next level of relaxation with our state-of-the-art neck massager.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal variant="fade" delay={0.2} className="lg:col-span-2">
            <div className="card h-full rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Deep Tissue Relief</h3>
                <p className="text-accent">Targeted pulse technology reaches deep muscle layers to alleviate tension and promote relaxation.</p>
              </div>
              <div className="flex-1 min-h-[300px] relative">
                <ImageOrVideo 
                  imageSrc="https://storage.googleapis.com/webild/users/user_3FtXGZmo2q34ph3RhCNPCt0XPUG/uploaded-1782904038231-5ykedq2f.png" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.3}>
            <div className="card h-full rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <ImageOrVideo 
                  imageSrc="https://storage.googleapis.com/webild/users/user_3FtXGZmo2q34ph3RhCNPCt0XPUG/uploaded-1782904038233-cchs5lwi.png" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Ergonomic Design</h3>
                <p className="text-accent text-sm">Perfectly contours to your neck for maximum comfort during extended use.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.4}>
            <div className="card h-full rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <ImageOrVideo 
                  imageSrc="https://storage.googleapis.com/webild/users/user_3FtXGZmo2q34ph3RhCNPCt0XPUG/uploaded-1782904038234-evwt682d.png?_wi=1" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Sleek Aesthetics</h3>
                <p className="text-accent text-sm">Modern design that looks as good as it feels, blending seamlessly into your lifestyle.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.5} className="lg:col-span-2">
            <div className="card h-full rounded-lg overflow-hidden flex flex-col md:flex-row-reverse">
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Portable Comfort</h3>
                <p className="text-accent">Take your relaxation anywhere you go with our lightweight and travel-friendly design.</p>
              </div>
              <div className="flex-1 min-h-[300px] relative">
                <ImageOrVideo 
                  imageSrc="https://storage.googleapis.com/webild/users/user_3FtXGZmo2q34ph3RhCNPCt0XPUG/uploaded-1782904038234-evwt682d.png?_wi=2" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}