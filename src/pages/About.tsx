import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { PremiumImage } from '../components/ui/PremiumImage';
import { Target, Telescope, Handshake, Sprout, Microscope, MessageSquare, MapPin, BadgeDollarSign, Link as LinkIcon } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="bg-linen pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-grove/20 bg-white mb-6">
                <span className="text-[0.68rem] tracking-[0.2em] uppercase text-grove font-medium">About Us</span>
              </div>
              <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] font-serif font-bold text-ink leading-[1.05] mb-6">
                Built in Kisii.<br /><em className="italic font-normal text-grove">Built for farmers.</em>
              </h1>
              <p className="text-lg md:text-xl text-body-text font-light max-w-2xl mx-auto mb-12 lg:mb-16">
                Every smallholder farmer deserves the same professional support that large commercial farms take for granted.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2} className="w-full">
            <PremiumImage 
              src="https://i.pinimg.com/originals/66/14/ef/6614ef9adf82aa734ee6d158dc1ff746.jpg" 
              alt="Community farming" 
              className="w-full h-[40vh] md:h-[60vh] rounded-[2rem] shadow-2xl relative border border-black/5" 
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative group">
                <PremiumImage 
                  src="https://i.pinimg.com/originals/32/0b/eb/320bebf0587e64525588df99bce31b96.jpg" 
                  alt="Farmers" 
                  className="w-full h-[600px] shadow-2xl rounded-3xl"
                  imageClassName="object-top"
                />
                <div className="absolute bottom-8 right-8 z-20 bg-white/95 backdrop-blur-xl rounded-2xl py-5 px-8 shadow-2xl">
                  <div className="font-serif text-3xl font-bold text-grove leading-none">2025</div>
                  <div className="text-xs tracking-[0.08em] uppercase text-ink mt-1 font-bold">Founded in Kisii</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-clay" />
                <span className="text-xs tracking-[0.2em] font-bold text-clay uppercase">Our Story</span>
              </div>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-ink leading-[1.1] mb-6">
                The problem was visible. The solution needed courage.
              </h2>
              <p className="text-base text-body leading-relaxed font-light mb-4 text-justify">
                Walk through any farming area in Kisii and you see the same thing: hardworking farmers applying fertilizer by habit, growing avocados on unknown soil pH, selling to middlemen at whatever price they're offered. Not because they're making mistakes — because they've never had access to the right support.
              </p>
              <p className="text-base text-body leading-relaxed font-light mb-4 text-justify">
                Stellar Farm Solutions was built to change that. We combine soil science with practical advisory, quality input supply, and direct market connections — giving every farmer in our network the full support system that previously only existed for large commercial operations.
              </p>
              <p className="text-base text-body leading-relaxed font-light mb-8 text-justify">
                We are not an NGO. We are a business — and that means we only succeed when our farmers succeed. Our interests are completely aligned with yours.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-grove text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-clay hover:-translate-y-1 transition-all duration-300 shadow-md">
                Work With Us →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-px bg-grove" />
                <span className="text-xs tracking-[0.2em] font-bold text-grove uppercase">Our Purpose</span>
                <div className="w-10 h-px bg-grove" />
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif font-bold text-ink leading-tight">
                Mission. Vision. Commitment.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8" strokeWidth={1.5} />, title: 'Our Mission', desc: 'To give every smallholder farmer in Kisii region access to professional soil science, honest advisory, quality inputs, and fair market connections — so genuine hard work is rewarded with better yields.' },
              { icon: <Telescope className="w-8 h-8" strokeWidth={1.5} />, title: 'Our Vision', desc: 'A Kisii farming community where no farmer loses yield to soil problems they didn\'t know about, and where every farmer has a direct path to fair market prices without middlemen.' },
              { icon: <Handshake className="w-8 h-8" strokeWidth={1.5} />, title: 'Our Commitment', desc: 'We only succeed when our farmers succeed. Our advice is honest, our prices are fair, and our commitment to being present through every season is genuine.' },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 lg:p-12 border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full text-center">
                  <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mx-auto mb-6 text-grove">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-4">{card.title}</h3>
                  <p className="text-[0.95rem] text-body leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-px bg-clay" />
                <span className="text-xs tracking-[0.2em] font-bold text-clay uppercase">How We Work</span>
                <div className="w-10 h-px bg-clay" />
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif font-bold text-ink leading-tight">
                The principles that guide <em className="text-clay italic font-normal">every decision</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Sprout className="w-6 h-6" strokeWidth={1.5} />, title: 'Trust Before Sales', desc: 'We build relationships before asking for money. Honest advice, even when that means saying you don\'t need a product right now.' },
              { icon: <Microscope className="w-6 h-6" strokeWidth={1.5} />, title: 'Science, Not Guesswork', desc: 'Every recommendation comes from your specific soil data. Your land is different — your plan should reflect that.' },
              { icon: <MessageSquare className="w-6 h-6" strokeWidth={1.5} />, title: 'Plain Language, Always', desc: 'Soil science is complex. Our communication never is. Clear explanations you can understand and act on the same day.' },
              { icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />, title: 'We Show Up', desc: 'We visit farms. We answer calls. We follow through. Consistency and presence are how trust is built — and we don\'t take that lightly.' },
              { icon: <BadgeDollarSign className="w-6 h-6" strokeWidth={1.5} />, title: 'Transparent Pricing', desc: 'You always know what you\'re paying and exactly what you\'re receiving. No hidden fees, no surprises.' },
              { icon: <LinkIcon className="w-6 h-6" strokeWidth={1.5} />, title: 'Long-Term Thinking', desc: 'We are building a business that grows with its farmers. Every season we are here, we are more invested in your success.' },
            ].map((v, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}>
                <div className="flex gap-6 p-8 bg-ivory rounded-2xl border border-dew transition-all duration-300 hover:border-sage hover:shadow-md h-full">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 text-grove shadow-sm">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-ink mb-2">{v.title}</h4>
                    <p className="text-sm leading-relaxed text-body font-light">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ivory border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-px bg-grove" />
                <span className="text-xs tracking-[0.2em] font-bold text-grove uppercase">Our Team</span>
                <div className="w-10 h-px bg-grove" />
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif font-bold text-ink leading-tight">
                The people behind <em className="text-clay italic font-normal">every farm visit</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { in: 'SF', name: 'Founder & CEO', role: 'Stellar Farm Solutions', desc: 'Agronomist and entrepreneur building professional farming support.' },
              { in: 'FA', name: 'Lead Agronomist', role: 'Soil & Advisory', desc: 'Leads all on-site soil testing and farm visits in Kisii highlands.' },
              { in: 'FO', name: 'Field Officer', role: 'Farmer Networks', desc: 'Organises farmer groups and runs community advisory sessions.' },
              { in: 'LO', name: 'Logistics Officer', role: 'Supply & Aggregation', desc: 'Coordinates input delivery and produce collection.' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl group h-full flex flex-col items-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-linen rounded-full flex items-center justify-center border-4 border-white shadow-lg text-2xl font-serif text-grove/50 group-hover:bg-mist group-hover:text-grove transition-colors duration-300">
                    {t.in}
                  </div>
                  <div className="font-serif text-lg font-bold text-ink mb-1">{t.name}</div>
                  <div className="text-xs tracking-wider uppercase text-grove font-semibold mb-4">{t.role}</div>
                  <div className="text-sm leading-relaxed text-body font-light group-hover:text-ink">{t.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
