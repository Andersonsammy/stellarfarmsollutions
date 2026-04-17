import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { PremiumImage } from '../components/ui/PremiumImage';
import { Phone, CarFront, LineChart, FileText, Package, Coins } from 'lucide-react';

export default function Farmers() {
  return (
    <>
      <section className="bg-mist pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-grove/20 bg-white mb-6">
                <span className="text-[0.68rem] tracking-[0.2em] uppercase text-grove font-medium">For Farmers</span>
              </div>
              <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] font-serif font-bold text-ink leading-[1.05] mb-6">
                You work hard.<br /><em className="italic font-normal text-grove">Let your soil work with you.</em>
              </h1>
              <p className="text-lg md:text-xl text-body-text font-light max-w-2xl mx-auto mb-12 lg:mb-16">
                Whether you have 1 acre or 5, whether you grow avocados or other crops — if you farm in Kisii region, Stellar was built for you.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2} className="w-full">
            <PremiumImage 
                src="https://i.pinimg.com/originals/bc/63/12/bc631233f91401b01aac90daaf457d22.jpg" 
                alt="Kisii farming landscape" 
                className="w-full h-[40vh] md:h-[60vh] rounded-[2rem] shadow-2xl relative border border-black/5" 
            />
          </Reveal>
        </div>
      </section>

      <div className="bg-grove py-20 px-6 lg:py-32">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
          <Reveal>
            <div className="lbl text-white/45 mb-4 before:bg-white/35 justify-center">The Problem</div>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-bold text-white leading-tight mb-8">
              Most farmers lose 30–50% of their yield and don't know why.
            </h2>
            <p className="text-lg md:text-xl text-white/75 leading-[1.7] font-light">
              Acid soil is the silent problem on thousands of farms in Kisii. It destroys nutrients before your crops can use them, makes fertilizer useless, and keeps yields low no matter how hard you work. A single soil test can reveal this within minutes.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-ivory p-8 lg:p-12 relative overflow-hidden flex items-center justify-center order-last lg:order-first">
           <PremiumImage src="https://i.pinimg.com/originals/f1/ad/a4/f1ada4c2e20d1bead875b224bab61702.jpg" alt="Partner success" className="w-full h-[400px] shadow-sm rounded-2xl" />
        </div>
        <div className="bg-white py-16 px-12 lg:px-20 flex flex-col justify-center">
          <Reveal delay={0.2}>
            <div className="lbl text-clay mb-4">What We Give You</div>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-bold text-ink leading-tight mb-4">
              One trusted partner from your soil to the buyer's door.
            </h2>
            <p className="text-[0.88rem] text-body leading-[1.84] font-light">
              We test, we advise, we supply, we collect. You focus on farming. We handle the science, the right inputs, and the market connections that most smallholder farmers in Kisii have never had access to — until now.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto px-7 md:px-10">
          <Reveal>
            <div className="mb-12">
              <div className="lbl text-grove mb-4">Your Journey</div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold">
                How it works, <em className="text-clay italic">step by step.</em>
              </h2>
            </div>
          </Reveal>

          <div>
            {[
              { num: '01', icon: <Phone className="w-7 h-7" strokeWidth={1.5} />, title: 'You Contact Us', desc: 'Call, WhatsApp, or fill in our Contact form. Tell us your name, location, and what you grow. No paperwork, no complicated process — just a simple first step.', chip: 'One message is enough' },
              { num: '02', icon: <CarFront className="w-7 h-7" strokeWidth={1.5} />, title: 'We Visit Your Farm', desc: 'Our agronomist comes to you — no travel needed. We walk your land, understand your situation, and collect soil samples for on-site testing.', chip: 'We always come to you' },
              { num: '03', icon: <LineChart className="w-7 h-7" strokeWidth={1.5} />, title: 'We Test and Explain', desc: 'On-site testing the same day. Every result in plain language — not confusing numbers, but honest answers about what your soil needs and why it has been affecting your harvests all this time.', chip: 'Same-day, plain language' },
              { num: '04', icon: <FileText className="w-7 h-7" strokeWidth={1.5} />, title: 'You Receive Your Farm Plan', desc: 'A written plan — exactly what to apply, when, and how much — specific to your soil and your season. Clear steps you can act on immediately, with real confidence.', chip: 'Your written farm plan' },
              { num: '05', icon: <Package className="w-7 h-7" strokeWidth={1.5} />, title: 'We Supply Your Inputs', desc: 'Lime, fertilizer, and seedlings sourced at bulk prices and delivered to your farm. Only what your soil actually needs — no upselling, no waste, no confusion about what to buy.', chip: 'Delivered at fair prices' },
              { num: '06', icon: <Coins className="w-7 h-7" strokeWidth={1.5} />, title: 'Harvest and Sell at a Fair Price', desc: 'When your avocados are ready, we collect, grade, and sell directly to buyers. A fair price with a clear breakdown — no middlemen, no guessing where your money went.', chip: 'Fair price, clear breakdown' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-[72px_1fr] gap-10 py-9 border-b border-dew items-start transition-all duration-200 hover:bg-ivory hover:px-6 hover:-mx-6 hover:rounded-xl last:border-none">
                  <div className="text-center">
                    <span className="font-serif text-[2.6rem] font-bold text-dew leading-none block line-through decoration-1 decoration-dew/50">{step.num}</span>
                    <span className="flex justify-center mt-3 text-clay bg-mist w-12 h-12 mx-auto rounded-full items-center">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[1.3rem] font-bold text-ink mb-2">{step.title}</h3>
                    <p className="text-[0.88rem] leading-[1.84] text-body font-light max-w-[520px]">{step.desc}</p>
                    <div className="inline-flex items-center gap-1.5 mt-3 bg-mist py-1.5 px-3.5 text-[0.72rem] text-grove font-medium rounded-full before:content-['✓']">
                      {step.chip}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-grove">
        <div className="max-w-[1100px] mx-auto px-7 md:px-10">
          <Reveal>
            <div className="text-center">
              <div className="lbl justify-center text-white/40 before:bg-white/30 mb-4">Our Pricing</div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight">
                Simple, honest pricing.<br /><em className="text-sand italic">No surprises.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {[
              { badge: 'Pay Per Visit', name: 'Single Visit', desc: 'First-time soil test or one-off consultation', val: 'KSh 300–1,500', unit: '/ visit', inc: ['On-site soil testing', 'Same-day results', 'Verbal advisory', 'Input recommendations'], btnstr: 'Book a Visit', featured: false },
              { badge: 'Most Popular', name: 'Annual Advisory', desc: 'Full-season support with written plans and follow-up visits', val: 'KSh 2,000', unit: '/ year', inc: ['Quarterly farm visits', 'Written farm plan', 'WhatsApp support', 'Priority input sourcing', 'Market price updates'], btnstr: 'Subscribe Now', featured: true },
              { badge: 'For Groups', name: 'Farmer Network', desc: 'Join a group for bulk pricing, community, and shared logistics', val: 'Free', unit: 'to join', inc: ['Bulk input pricing', 'Shared transport', 'Regular group sessions', 'Access to aggregation', 'Farming community'], btnstr: 'Join a Group', featured: false },
            ].map((plan, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${plan.featured ? 'bg-white/10 border-sand/40 hover:border-sand/65' : 'bg-white/5 border-white/10 hover:border-white/25'}`}>
                  <span className="text-[0.6rem] tracking-[0.12em] uppercase text-sand font-semibold mb-3 block">{plan.badge}</span>
                  <div className="font-serif text-[1.35rem] font-bold text-white mb-1">{plan.name}</div>
                  <div className="text-[0.78rem] text-white/55 leading-relaxed font-light pb-5 border-b border-white/5 mb-5">{plan.desc}</div>
                  <div className="font-serif text-[2.2rem] font-bold text-white leading-none mb-1">
                    {plan.val} <span className="text-[0.9rem] text-white/50 font-light">{plan.unit}</span>
                  </div>
                  <div className="flex flex-col gap-2 mt-5">
                    {plan.inc.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[0.78rem] text-white/75 font-light before:content-['✓'] before:text-sage before:shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className={`mt-6 w-full py-3 text-[0.78rem] font-medium rounded-full tracking-wide transition-all duration-250 text-center block ${plan.featured ? 'bg-clay text-white border-none hover:bg-terra' : 'border-[1.5px] border-white/20 text-white/65 hover:bg-white/10 hover:text-white'}`}>
                    {plan.btnstr}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
