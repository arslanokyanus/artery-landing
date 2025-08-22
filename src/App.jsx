import { useState } from 'react'
import { Menu, X, ArrowRight, Check, Zap, Rocket, Shield, Palette, Globe, MousePointerClick, Star, Quote } from 'lucide-react'

const TopNav=()=>{ 
  const [open,setOpen]=useState(false)
  const links=[{to:'#work',label:'Work'},{to:'#features',label:'Features'},{to:'#pricing',label:'Pricing'},{to:'#faq',label:'FAQ'}]
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
      <div className="container-xxl h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid size-9 place-items-center rounded-full bg-[#294e9b] text-white">A</span>
          <span className="hidden sm:block">artery.digital</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l=> <a key={l.to} href={l.to} className="hover:text-slate-900">{l.label}</a>)}
          <a href="#contact" className="btn btn-primary text-sm">Get a Quote</a>
        </nav>
        <button className="md:hidden p-2" aria-label="menu" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open&&(
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-xxl py-3 grid gap-2">
            {links.map(l=><a key={l.to} href={l.to} onClick={()=>setOpen(false)} className="py-2">{l.label}</a>)}
            <a href="#contact" onClick={()=>setOpen(false)} className="btn btn-primary">Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}

const Hero=()=>(
  <section className="relative overflow-hidden">
    {/* arka grid + gradient */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(41,78,155,.12),transparent)]"></div>
      <svg className="absolute inset-0 h-full w-full opacity-[.07]" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0v40" fill="none" stroke="currentColor" strokeWidth=".7"/></pattern></defs><rect width="100%" height="100%" fill="url(#p)"/></svg>
    </div>

    <div className="container-xxl py-16 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="badge"><Zap className="size-4"/> Pixel-Perfect • Fast • Accessible</span>
        <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-extrabold tracking-tight">
          Frontends that look <span className="text-[#294e9b]">exactly</span> like the design — shipped fast.
        </h1>
        <p className="mt-4 text-slate-600 max-w-prose">
          I build clean, responsive, detail-oriented UIs with React + Tailwind, match Figma precisely, and QA before anything goes live.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">See Work <ArrowRight className="size-4"/></a>
          <a href="#contact" className="btn btn-ghost">Hire Me</a>
        </div>
        <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          {["Design parity","Responsive-first","Cross-browser QA","A11y basics"].map(x=>
            <li key={x} className="flex items-center gap-2"><Check className="size-4 text-[#294e9b]"/>{x}</li>)}
        </ul>
      </div>

      {/* showcase mockup */}
      <div className="relative">
        <div className="rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
          <div className="aspect-[16/10] bg-gradient-to-br from-indigo-50 to-sky-50"></div>
          <div className="p-4 grid grid-cols-3 gap-3 bg-white">
            {[...Array(6)].map((_,i)=><div key={i} className="h-16 rounded-xl bg-slate-100"/> )}
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white/90 border border-slate-200 rounded-xl p-4 shadow-soft">
          <div className="text-sm flex items-center gap-2"><Shield className="size-4 text-[#294e9b]"/> QA checklist passed</div>
        </div>
      </div>
    </div>
  </section>
)

const FeatureCard=({icon:Icon,title,desc})=>(
  <div className="card p-6 hover:shadow-soft transition">
    <div className="size-10 grid place-items-center rounded-lg bg-[#294e9b]/10 text-[#294e9b] mb-3"><Icon className="size-5"/></div>
    <h3 className="font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-slate-600">{desc}</p>
  </div>
)

const Features=()=>(
  <section id="features" className="py-16">
    <div className="container-xxl">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What I Bring</h2>
      <p className="mt-2 text-slate-600 max-w-prose">From pixel-perfect Tailwind builds to WordPress sites and HTML emails — shipped fast with testing.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard icon={Rocket} title="Pixel-Perfect UI" desc="Exact Figma matches, semantic HTML, tight spacing & rhythm."/>
        <FeatureCard icon={MousePointerClick} title="React Components" desc="Reusable, accessible components with clean state."/>
        <FeatureCard icon={Palette} title="Tailwind Polish" desc="Consistent design tokens & utility-first velocity."/>
        <FeatureCard icon={Globe} title="WordPress" desc="Setup, theme tweaks, content workflows for small sites."/>
        <FeatureCard icon={Shield} title="QA & A11y" desc="Cross-browser checks, Lighthouse & keyboard basics."/>
        <FeatureCard icon={Zap} title="Tight Deadlines" desc="1–4 week sprints, multiple concurrent tracks."/>
      </div>
    </div>
  </section>
)

const Work=()=>(
  <section id="work" className="py-16 bg-slate-50">
    <div className="container-xxl">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Work</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[
          {name:'Corporate Landing',tags:'React • Tailwind • A11y'},
          {name:'WP Blog Theme',tags:'WordPress • Tailwind'},
          {name:'Email Template',tags:'HTML • Responsive'},
          {name:'Promo Banner',tags:'HTML • CSS Animation'},
        ].map((c,i)=>(
          <a key={i} href="#" className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-soft transition">
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-50 group-hover:opacity-90 transition" />
            <div className="p-4 flex items-center justify-between">
              <div><h3 className="font-semibold">{c.name}</h3><p className="text-sm text-slate-600">{c.tags}</p></div>
              <ArrowRight className="size-5 text-slate-400 group-hover:text-[#294e9b]"/>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

const Testimonial=()=>(
  <section className="py-16">
    <div className="container-xxl grid lg:grid-cols-[1fr_.7fr] gap-8 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Clients feel the craft</h2>
        <p className="mt-2 text-slate-600 max-w-prose">Small agency pace with quality. I’m excited, curious, and always improving — feedback in, polish out.</p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          {["Detail-obsessed","Communicates clearly","Owns deadlines","Iterates fast"].map(x=>
            <li key={x} className="flex items-center gap-2"><Check className="size-4 text-[#294e9b]"/>{x}</li>)}
        </ul>
      </div>
      <figure className="card p-6">
        <div className="flex items-center gap-2 text-[#f59e0b] mb-2">{[...Array(5)].map((_,i)=><Star key={i} className="size-5 fill-current"/>)}</div>
        <blockquote className="text-slate-700"><Quote className="inline size-5 mr-2 text-slate-300"/>Matched the design exactly and shipped ahead of schedule. Calm under pressure and thorough in QA.</blockquote>
        <figcaption className="mt-3 text-sm text-slate-500">— Project Lead, Healthcare eLearning</figcaption>
      </figure>
    </div>
  </section>
)

const Pricing=()=>(
  <section id="pricing" className="py-16">
    <div className="container-xxl">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Simple Pricing</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          {t:"Landing Starter",p:"£499",f:["1 page","Pixel-perfect","Responsive","Basic QA"]},
          {t:"Site Bundle",p:"£1,499",f:["3–5 pages","Components","Forms","QA + a11y pass"]},
          {t:"WP Setup",p:"£799",f:["Theme setup","Custom styles","Pages & Blog","Perf tweaks"]},
        ].map((card,i)=>(
          <div key={i} className="card p-6 hover:shadow-soft transition">
            <h3 className="text-lg font-semibold">{card.t}</h3>
            <div className="mt-2 text-3xl font-extrabold">{card.p}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {card.f.map(x=><li key={x} className="flex items-center gap-2"><Check className="size-4 text-[#294e9b]"/>{x}</li>)}
            </ul>
            <a href="#contact" className="btn btn-primary mt-6 w-full justify-center">Start</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const FAQ=()=>(
  <section id="faq" className="py-16 bg-slate-50">
    <div className="container-xxl">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {[
          {q:'Do you match designs exactly?',a:'Yes. I care about spacing, typography, and interaction parity.'},
          {q:'How fast can you ship?',a:'Most small projects take 1–4 weeks with clear scope.'},
          {q:'Do you work with WordPress?',a:'I set up themes, customize styles, and structure content.'},
          {q:'QA & testing?',a:'Cross-browser, accessibility basics, and smoke tests before handoff.'},
        ].map((f,i)=>(
          <details key={i} className="card p-4 open:shadow-soft">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-sm text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

const Contact=()=>(
  <section id="contact" className="py-16">
    <div className="container-xxl grid md:grid-cols-[1.2fr_.8fr] gap-8 items-start">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s Build Something</h2>
        <p className="mt-2 text-slate-600 max-w-prose">I’m excited and eager to learn — tell me about your timeline and goals.</p>
        <form className="mt-6 grid sm:grid-cols-2 gap-3">
          <input required placeholder="Name" className="rounded-xl border border-slate-300 px-4 py-3"/>
          <input required type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3"/>
          <input placeholder="Company / Website" className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3"/>
          <textarea rows={5} required placeholder="Project details" className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3"></textarea>
          <button className="btn btn-primary sm:col-span-2 justify-center">Send</button>
        </form>
        <p className="mt-3 text-sm text-slate-500">Or email: <a className="underline" href="mailto:hello@okeanoss.com">hello@okeanoss.com</a></p>
      </div>
      <aside className="card p-5">
        <h3 className="font-semibold">Quick Facts</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex items-center gap-2"><Check className="size-4 text-[#294e9b]"/> Turkey • Remote-ready</li>
          <li className="flex items-center gap-2"><Check className="size-4 text-[#294e9b]"/> React + Tailwind + WP</li>
          <li className="flex items-center gap-2"><Check className="size-4 text-[#294e9b]"/> HTML email & banner</li>
          <li className="flex items-center gap-2"><Check className="size-4 text-[#294e9b]"/> Fast learner, excited</li>
        </ul>
      </aside>
    </div>
  </section>
)

const Footer=()=>(
  <footer className="py-10 border-t border-slate-200">
    <div className="container-xxl flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-sm text-slate-500">© {new Date().getFullYear()} ech0day — All rights reserved.</p>
      <div className="flex items-center gap-4 text-sm">
        <a href="#" className="hover:underline">GitHub</a>
        <a href="#" className="hover:underline">LinkedIn</a>
        <a href="#" className="hover:underline">Portfolio</a>
      </div>
    </div>
  </footer>
)

export default function App(){
  return (
    <div>
      <TopNav/>
      <main>
        <Hero/>
        <Work/>
        <Features/>
        <Testimonial/>
        <Pricing/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}
