import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink px-7 md:px-10 pt-16 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">
        <div>
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center transition-colors group-hover:bg-white text-grove">
              <Sprout className="w-4 h-4" strokeWidth={2} />
            </div>
            <div>
              <div className="font-serif text-[1.1rem] font-bold text-white transition-colors">Stellar Farm Solutions</div>
              <span className="text-[0.6rem] text-white/50 tracking-[0.16em] uppercase font-sans block font-light">Kisii Region · Kenya</span>
            </div>
          </Link>
          <p className="text-[0.85rem] text-white/60 leading-relaxed font-light max-w-[280px] my-5 ml-0">
            A farmer-first agribusiness providing soil testing, farm advisory, quality inputs, and produce aggregation to smallholder farmers in Kisii region, Kenya.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-[0.7rem] tracking-[0.16em] uppercase text-white/40 font-semibold mb-4">Services</h5>
          <ul className="list-none flex flex-col gap-3">
            <li><Link to="/services" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Soil Testing</Link></li>
            <li><Link to="/services" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Farm Advisory</Link></li>
            <li><Link to="/services" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Input Supply</Link></li>
            <li><Link to="/services" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Farmer Networks</Link></li>
            <li><Link to="/services" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Produce Aggregation</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-[0.7rem] tracking-[0.16em] uppercase text-white/40 font-semibold mb-4">Company</h5>
          <ul className="list-none flex flex-col gap-3">
            <li><Link to="/about" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">About Us</Link></li>
            <li><Link to="/about" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Our Mission</Link></li>
            <li><Link to="/about" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Our Team</Link></li>
            <li><Link to="/farmers" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">For Farmers</Link></li>
            <li><Link to="/contact" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-[0.7rem] tracking-[0.16em] uppercase text-white/40 font-semibold mb-4">Contact</h5>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="tel:+254700000000" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">+254 700 000 000</a></li>
            <li><a href="mailto:hello@stellarfarmsolutions.co.ke" className="text-[0.85rem] text-white/70 font-light transition-colors hover:text-white">hello@stellar...</a></li>
            <li><span className="text-[0.85rem] text-white/70 font-light">Kisii Town, Kenya</span></li>
            <li><span className="text-[0.85rem] text-white/70 font-light">Mon–Sat, 7AM–6PM</span></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8">
        <p className="text-[0.75rem] text-white/50">© 2025 Stellar Farm Solutions. All rights reserved.</p>
        <div className="font-serif text-[0.9rem] text-white/30 italic">"From soil to export."</div>
      </div>
    </footer>
  );
}
