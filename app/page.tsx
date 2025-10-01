import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Testimonials } from '@/components/testimonials';
import { CTA } from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}