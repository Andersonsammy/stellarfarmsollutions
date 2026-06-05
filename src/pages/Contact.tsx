import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { PremiumImage } from '../components/ui/PremiumImage';
import { Phone, Mail, MapPin, Clock, BadgeCheck } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Please enter your phone number');
      return;
    }
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      setIsSubmitting(false);
      alert('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <section className="bg-ivory pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-grove/20 bg-white mb-6">
                <span className="text-[0.68rem] tracking-[0.2em] uppercase text-grove font-medium">Get in Touch</span>
              </div>
              <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] font-serif font-bold text-ink leading-[1.05] mb-6">
                Let's talk about<br /><em className="italic font-normal text-grove">your farm.</em>
              </h1>
              <p className="text-lg md:text-xl text-body-text font-light max-w-2xl mx-auto mb-12 lg:mb-16">
                Ready to book a soil test? Want to join a farmer group? Just have a question? We would love to hear from you.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2} className="w-full">
            <PremiumImage 
              src="https://i.pinimg.com/originals/fb/bf/be/fbbfbe1639a587f6adeaacd978bf469d.jpg" 
              alt="Discussion on the farm" 
              className="w-full h-[40vh] md:h-[50vh] shadow-2xl" 
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-7 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24 py-24 items-start">
            <div>
              <Reveal>
                <div className="lbl text-grove mb-4">Contact Us</div>
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-ink mb-4 leading-[1.05]">
                  We are based in<br /><em className="text-clay italic">Kisii, Kenya.</em>
                </h2>
                <p className="text-[0.9rem] leading-[1.85] text-body mb-8 font-light max-w-[400px]">
                  Our team is in the field most days visiting farms across Kisii region. The best way to reach us is by phone or WhatsApp — we usually get back to you within a few hours.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: <Phone className="w-5 h-5" strokeWidth={1.5} />, label: 'Phone / WhatsApp', val: '+254 142 062 219' },
                    { icon: <Mail className="w-5 h-5" strokeWidth={1.5} />, label: 'Email', val: 'hello@stellarfarmsolutions.com' },
                    { icon: <MapPin className="w-5 h-5" strokeWidth={1.5} />, label: 'Location', val: 'Kisii Town, Kisii County, Kenya' },
                    { icon: <Clock className="w-5 h-5" strokeWidth={1.5} />, label: 'Working Hours', val: 'Monday – Friday, 8:00 AM – 5:00 PM' }
                  ].map((d, i) => (
                    <div key={i} className="flex gap-3.5 items-start">
                      <div className="w-9 h-9 bg-mist rounded-lg flex items-center justify-center shrink-0 text-grove">
                        {d.icon}
                      </div>
                      <div>
                        <div className="text-[0.6rem] tracking-[0.1em] uppercase text-faint font-medium">
                          {d.label}
                        </div>
                        <div className="text-[0.88rem] text-ink font-medium mt-0.5">
                          {d.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-mist rounded-2xl overflow-hidden border-[1.5px] border-dew">
                  <div className="bg-gradient-to-br from-grove to-field h-[130px] flex items-center justify-center flex-col gap-1.5">
                    <MapPin className="text-white w-8 h-8 mb-1" strokeWidth={1.5} />
                    <div className="font-serif text-[0.98rem] text-white italic">Kisii Region, Kenya</div>
                    <div className="text-[0.64rem] text-white/55 tracking-[0.08em]">KISII COUNTY · KENYA</div>
                  </div>
                  <p className="text-[0.73rem] text-mid py-3.5 px-5 font-light leading-[1.6]">
                    We serve farms across Kisii County. We always come to you — there is no need to travel to an office or meeting point.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="bg-white p-11 rounded-[18px] border-[1.5px] border-dew shadow-[0_8px_30px_rgba(42,92,63,0.07)]">
                {!submitted ? (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* Required hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <div className="font-serif text-2xl font-bold text-ink mb-1.5">Send us a message</div>
                    <div className="text-[0.8rem] text-mid mb-7 font-light">We reply within 24 hours — usually much faster.</div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <label className="block text-[0.63rem] tracking-[0.1em] uppercase text-body font-medium mb-1.5">First Name *</label>
                        <input 
                          type="text"
                          name="firstName"
                          placeholder="Mary"
                          className="w-full py-3 px-4 bg-linen border-[1.5px] border-dew rounded-lg text-[0.87rem] text-ink outline-none transition-colors duration-200 focus:border-sage focus:bg-white"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.63rem] tracking-[0.1em] uppercase text-body font-medium mb-1.5">Last Name</label>
                        <input 
                          type="text"
                          name="lastName"
                          placeholder="Nyaboke"
                          className="w-full py-3 px-4 bg-linen border-[1.5px] border-dew rounded-lg text-[0.87rem] text-ink outline-none transition-colors duration-200 focus:border-sage focus:bg-white"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-[0.63rem] tracking-[0.1em] uppercase text-body font-medium mb-1.5">Phone / WhatsApp *</label>
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="+254 142 062 219"
                        className="w-full py-3 px-4 bg-linen border-[1.5px] border-dew rounded-lg text-[0.87rem] text-ink outline-none transition-colors duration-200 focus:border-sage focus:bg-white"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-[0.63rem] tracking-[0.1em] uppercase text-body font-medium mb-1.5">Your Location</label>
                      <input 
                        type="text"
                        name="location"
                        placeholder="e.g. Nyamira, Kisii"
                        className="w-full py-3 px-4 bg-linen border-[1.5px] border-dew rounded-lg text-[0.87rem] text-ink outline-none transition-colors duration-200 focus:border-sage focus:bg-white"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-[0.63rem] tracking-[0.1em] uppercase text-body font-medium mb-1.5">What can we help with?</label>
                      <select 
                        name="service"
                        className="w-full py-3 px-4 bg-linen border-[1.5px] border-dew rounded-lg text-[0.87rem] text-ink outline-none transition-colors duration-200 focus:border-sage focus:bg-white cursor-pointer appearance-none"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">Choose a service...</option>
                        <option>Soil Testing — Book a Visit</option>
                        <option>Farm Advisory — Annual Subscription</option>
                        <option>Input Supply (Lime / Fertilizer / Seedlings)</option>
                        <option>Joining a Farmer Group</option>
                        <option>Produce Aggregation</option>
                        <option>Partnership or Investor Enquiry</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    <div className="mb-5">
                      <label className="block text-[0.63rem] tracking-[0.1em] uppercase text-body font-medium mb-1.5">Tell us about your farm</label>
                      <textarea 
                        name="message"
                        placeholder="What do you grow? How many acres? Any specific challenges?"
                        className="w-full py-3 px-4 bg-linen border-[1.5px] border-dew rounded-lg text-[0.87rem] text-ink outline-none transition-colors duration-200 focus:border-sage focus:bg-white resize-none h-[100px] leading-[1.6]"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-grove text-white font-medium text-[0.85rem] tracking-wide rounded-full transition-all duration-250 cursor-pointer hover:bg-clay hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(42,92,63,0.2)] disabled:opacity-75 disabled:cursor-wait">
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                    <div className="text-[0.68rem] text-faint text-center mt-3.5 font-light">
                      We do not share your information with anyone. Ever.
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-16 px-8">
                    <span className="flex justify-center mb-6 text-grove">
                      <BadgeCheck className="w-16 h-16" strokeWidth={1.2} />
                    </span>
                    <h3 className="font-serif text-[1.6rem] font-bold text-grove mb-2.5">Message received!</h3>
                    <p className="text-[0.87rem] text-body leading-[1.75] font-light">
                      Thank you. We will get back to you within 24 hours.<br />
                      WhatsApp us directly at <strong className="text-grove font-semibold text-[0.9em]">+254 142 062 219</strong> if you need us sooner.
                    </p>
                    <Link to="/" className="btn btn-grove mt-8 inline-flex">
                      Back to Home
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
