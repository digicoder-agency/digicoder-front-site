import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaPalette, FaServer, FaCheckCircle } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const MAIN = '#0bb09b'//'#0b5edd'
  const ACCENT = '#0bb09b'

  // Simple typing for hero subtitle (lightweight)
  const phrases = ['Digital Experiences. Built With Precision.', 'Luxury Web & Mobile Apps', 'Design · Performance · Strategy']
  const [heroPhrase, setHeroPhrase] = useState(phrases[0])
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i = (i + 1) % phrases.length
      setHeroPhrase(phrases[i])
    }, 3000)
    return () => clearInterval(t)
  }, [])

  const scrollToSection = (id, offset = 100) => {
    const el = document.querySelector(id);
    if (!el) return;

    setTimeout(() => {
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 50);
  };

  const partenars = [
    { id: 1, img: './images/partenars/alsayari.webp' },
    { id: 2, img: './images/partenars/dservice.png' },
    { id: 3, img: './images/partenars/sqm.png' },
    { id: 4, img: './images/partenars/jawharatweb.png' },
    { id: 5, img: './images/partenars/ramadia.png' },
    { id: 6, img: './images/partenars/samatours.png' }
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6jxmo1d', 'template_17vkw73', e.target, "ZggzEkrZmGtsqlABd")
      .then(() => {
        toast.success('Email sent successfully!');
      }, () => {
        toast.error('Failed to send email. Please try again later.');
      });



    e.target.reset();

  }

  const [isOpen, setIsOpen] = useState(false);



  return (

    <div className="antialiased text-slate-900 bg-white">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {/* ====== FIXED NAV ====== */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-lg text-slate-800">DigiCoder</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-slate-700">
              <a href="#" onClick={() => scrollToSection('#hero')} className="hover:text-slate-900 transition">Home</a>
              <a href="#" onClick={() => scrollToSection('#about')} className="hover:text-slate-900 transition">About</a>
              <a href="#" onClick={() => scrollToSection('#services')} className="hover:text-slate-900 transition">Services</a>
              <a href="#" onClick={() => scrollToSection('#partners')} className="hover:text-slate-900 transition">Partners</a>
              <a href="#" onClick={() => scrollToSection('#contact')} className="hover:text-slate-900 transition">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" onClick={() => scrollToSection('#contact')} className="hidden md:inline-block px-4 py-2 rounded-xl font-medium text-white" style={{ background: MAIN }}>Get a Quote</a>
              <button
                className="lg:hidden p-2 rounded-md border border-gray-200"
                onClick={() => setIsOpen(!isOpen)} // Toggle القائمة
              >
                ☰
              </button>




            </div>
          </div>
        </div>
      </header>

      {/* popup menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-8 w-4/5 max-w-md flex flex-col gap-6 relative shadow-2xl transform transition-all duration-300">

            <button
              className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <a href="#" onClick={() => { scrollToSection('#hero'); setIsOpen(false); }} className="text-center text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">Home</a>
            <a href="#" onClick={() => { scrollToSection('#about'); setIsOpen(false); }} className="text-center text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">About</a>
            <a href="#" onClick={() => { scrollToSection('#services'); setIsOpen(false); }} className="text-center text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">Services</a>
            <a href="#" onClick={() => { scrollToSection('#partners'); setIsOpen(false); }} className="text-center text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">Partners</a>
            <a href="#" onClick={() => { scrollToSection('#contact'); setIsOpen(false); }} className="text-center text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">Contact</a>

            <a href="#" onClick={() => { scrollToSection('#contact'); setIsOpen(false); }} className="mt-4 px-6 py-3 rounded-2xl font-medium text-white text-center mx-auto" style={{ background: MAIN, minWidth: '140px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>
              Get a Quote
            </a>

          </div>
        </div>
      )}


      <main className="pt-24">
        {/* ====== HERO ====== */}
        <section id="hero" className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-28">
              <div className="lg:col-span-6">
                <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                  We build <span style={{ color: MAIN }}>luxury</span> digital products that <br /> drive growth.
                </motion.h1>

                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-lg text-slate-600 max-w-2xl">
                  {heroPhrase}
                </motion.p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#" onClick={() => scrollToSection('#contact')} className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-medium shadow" style={{ background: MAIN }}>Start Project</a>
                  <a href="#" onClick={() => scrollToSection('#services')} className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-200 text-slate-700">Our Services</a>
                </div>

                <div className="mt-10 flex gap-8 flex-wrap items-center text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100">
                      <FaCheckCircle className="text-slate-800" />
                    </div>
                    <div>
                      <div className="font-semibold">5+ Years</div>
                      <div className="text-xs">In software & product delivery</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L20 8V16L12 22L4 16V8L12 2Z" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold">GCC Focus</div>
                      <div className="text-xs">Saudi, UAE & Qatar</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold">Rapid Delivery</div>
                      <div className="text-xs">MVPs in 2–4 weeks</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-6">
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-2">
                    <img src="/images/hero.png" alt="Hero" className="w-full object-cover" />
                  </div>

                  <div className="absolute -right-8 bottom-8 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-xs text-slate-500">Featured project</div>
                    <div className="font-semibold mt-1">Al Noor Clinics — Booking Platform</div>
                    <div className="text-sm text-slate-600 mt-2">Platform that increased appointments by 42% in 3 months.</div>
                    <div className="mt-4 flex gap-2">
                      <a href="#" onClick={() => scrollToSection('#contact')} className="text-sm font-medium px-3 py-2 rounded-lg text-white" style={{ background: ACCENT }}>Discuss</a>
                      <a href="#" onClick={() => scrollToSection('#partners')} className="text-sm font-medium px-3 py-2 rounded-lg border">Case Study</a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== ADVANCED ABOUT ====== */}
        <section id="about" className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-3xl lg:text-4xl font-bold text-slate-900">About DigiCoder</motion.h2>
                <p className="mt-6 text-lg text-slate-700 leading-relaxed">We are a boutique software studio specialized in premium web & mobile products for businesses in the GCC. Over the last 5 years we shipped enterprise-grade projects, marketplaces, and SaaS platforms — combining design leadership with engineering discipline.
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-slate-900">•</div>
                    <div>
                      <div className="font-semibold">Design-led development</div>
                      <div className="text-sm text-slate-600">From research to pixel-perfect UI.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-slate-900">•</div>
                    <div>
                      <div className="font-semibold">Performance-first</div>
                      <div className="text-sm text-slate-600">Fast load, high availability.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-slate-900">•</div>
                    <div>
                      <div className="font-semibold">Security & Compliance</div>
                      <div className="text-sm text-slate-600">Data protection and best practices.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-slate-900">•</div>
                    <div>
                      <div className="font-semibold">Dedicated support</div>
                      <div className="text-sm text-slate-600">Clear SLAs and long-term partnerships.</div>
                    </div>
                  </li>
                </ul>

              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white shadow">
                    <div className="text-sm text-slate-500">Projects Delivered</div>
                    <div className="text-3xl font-bold mt-2">+120</div>
                    <div className="text-sm text-slate-600 mt-2">Web & Mobile projects for SMBs and enterprises.</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white shadow">
                    <div className="text-sm text-slate-500">Avg. Conversion Lift</div>
                    <div className="text-3xl font-bold mt-2">+34%</div>
                    <div className="text-sm text-slate-600 mt-2">Measured across recent e-commerce projects.</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white shadow">
                    <div className="text-sm text-slate-500">Response Time</div>
                    <div className="text-3xl font-bold mt-2"><span>24</span> hrs</div>
                    <div className="text-sm text-slate-600 mt-2">Typical first response for new leads.</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white shadow">
                    <div className="text-sm text-slate-500">Team Size</div>
                    <div className="text-3xl font-bold mt-2">8</div>
                    <div className="text-sm text-slate-600 mt-2">Designers, engineers, PMs and QA.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ====== SERVICES - advanced cards ====== */}
        <section id="services" className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl lg:text-4xl font-bold text-slate-900 text-center">Services</motion.h3>
            <p className="text-center mt-4 text-slate-600 max-w-3xl mx-auto">End-to-end product delivery — from strategy and design to engineering, deployment and growth.</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -6 }} className="p-8 rounded-2xl bg-white shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-2xl" style={{ color: MAIN }}>
                  <FaCode />
                </div>
                <h4 className="mt-6 font-semibold text-xl">Custom Web Development</h4>
                <p className="mt-3 text-slate-600">Scalable Laravel / Node / React platforms with optimized architecture and clean code.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• API-first architecture</li>
                  <li>• Performance & caching</li>
                  <li>• Payment and integrations</li>
                </ul>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-8 rounded-2xl bg-white shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-2xl" style={{ color: MAIN }}>
                  <FaMobileAlt />
                </div>
                <h4 className="mt-6 font-semibold text-xl">Mobile Apps</h4>
                <p className="mt-3 text-slate-600">Flutter & native apps that deliver premium UX and native performance.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Real-time features & streaming</li>
                  <li>• App store submission</li>
                  <li>• Analytics & monitoring</li>
                </ul>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-8 rounded-2xl bg-white shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-2xl" style={{ color: MAIN }}>
                  <FaPalette />
                </div>
                <h4 className="mt-6 font-semibold text-xl">Design & Branding</h4>
                <p className="mt-3 text-slate-600">Brand systems, UI kits, and high-fidelity prototypes that elevate perception.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Design systems & tokens</li>
                  <li>• Accessibility & UX research</li>
                  <li>• Motion design</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====== PARTNERS (carousel) ====== */}
        <section id="partners" className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-800 text-center mb-2">Trusted by</h3>
            <Swiper modules={[Autoplay]} autoplay={{ delay: 2500 }} pagination={{ clickable: true }} slidesPerView={4} spaceBetween={24} loop>
              {partenars.map((i) => (
                <SwiperSlide key={i.id} className="flex items-center justify-center">
                  <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-transform flex items-center justify-center">
                    <img src={i.img} alt={`partner-${i.img}`} className="h-20 object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ====== CONTACT ====== */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Start a Project</h3>
                <p className="mt-4 text-slate-600">Tell us about your idea and we’ll propose a roadmap and estimate. Fast response within 24 hours.</p>

                <div className="mt-8 space-y-4 text-sm text-slate-600">
                  <div>
                    <div className="font-semibold">Email</div>
                    <a
                      href="mailto:support@digicoder.sa"
                      className="hover:underline"
                    >
                      support@digicoder.sa
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a
                      href="tel:+201556751214"
                      className="hover:underline"
                    >
                      +20 155 675 1214
                    </a>
                  </div>
                </div>


                <div className="mt-8 flex gap-3">
                  <a href="https://api.whatsapp.com/send/?phone=%2B201556751214&text&type=phone_number&app_absent=0" className="px-4 py-2 rounded-lg text-sm font-medium" style={{ border: '1px solid rgba(15,23,42,0.06)' }}>WhatsApp</a>
                </div>
              </div>

              <form className="space-y-4" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type='text' className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="Full name" name='name' />
                  <input type='text' className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="Company / Brand" name='company' />
                </div>
                <input type='email' className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="Email" name='email' />
                <input type='tel' className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="Phone" name='phone' />
                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200" rows={5} placeholder="Brief project description" name='message' />
                <div className="flex items-center gap-4">
                  <input type="checkbox" id="subscribe" name='subscribe' />
                  <label htmlFor="subscribe" className="text-sm text-slate-600">I agree to be contacted regarding my enquiry.</label>
                </div>
                <button className="w-full py-3 rounded-2xl text-white font-medium" style={{ background: MAIN }} type='submit'>Send</button>
              </form>
            </div>
          </div>
        </section>

        {/* ====== FOOTER ====== */}
        <footer className="bg-slate-900 text-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/images/logo.png" alt="digicoder" className="h-10" />
              <p className="mt-4 text-sm text-slate-400">DigiCoder is a boutique software studio focused on building premium web & mobile products for GCC businesses.</p>
            </div>
            <div>
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><a href="#" onClick={() => scrollToSection('#services')}>Services</a></li>
                <li><a href="#" onClick={() => scrollToSection('#partners')}>Partners</a></li>
                <li><a href="#" onClick={() => scrollToSection('#contact')}>Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Contact</div>
              <div className="mt-4 text-sm text-slate-400 space-y-1">
                <a
                  href="mailto:contact@digicoder.agency"
                  className="block hover:text-blue-500 transition-colors"
                >
                  contact@digicoder.agency
                </a>
                <a
                  href="tel:+201556751214"
                  className="block hover:text-blue-500 transition-colors"
                >
                  +20 155 675 1214
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} DigiCoder. All rights reserved.</div>
        </footer>
      </main>
    </div>
  )
}
