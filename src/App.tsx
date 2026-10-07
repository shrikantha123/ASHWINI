/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import drAshwiniPortrait from './assets/images/dr_ashwini_portrait_1791378136034.jpg';

const U = (id: string, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const P = (id: string, w = 1000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const SITE = {
  name: "Dr. Ashwini K.R",
  fullName: "Dr. Ashwini's Skin, Hair & Cosmetology Clinic",
  phone: "+91 80730 21907",
  phoneHref: "tel:+918073021907",
  whatsappNumber: "080730 21907",
  whatsappHref:
    "https://wa.me/918073021907?text=Hello%20Dr.%20Ashwini%2C%20I%20would%20like%20to%20book%20a%20consultation.",
  hours: "Mon–Sat, 10:00am–9:00pm",
  hoursLong: "Monday to Saturday, 10:00 AM to 9:00 PM (10:00–21:00)",
  address:
    "2094, Ground Floor, 9th Cross, 5th Main Rd, Opp. St. John's High School, Hampi Nagar, Vijayanagar, Bengaluru, Karnataka 560104",
  shortAddress: "Hampi Nagar, Vijayanagar, Bengaluru 560104",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Ashwini's+Skin+Hair+and+Cosmetology+Clinic+2094+9th+cross+5th+Main+Rd+Hampi+Nagar+Vijayanagar+Bengaluru+560104",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Dr%20Ashwini's%20Skin%20Hair%20and%20Cosmetology%20Clinic%202094%209th%20cross%205th%20Main%20Rd%20Hampi%20Nagar%20Vijayanagar%20Bengaluru%20560104&t=&z=16&ie=UTF8&iwloc=&output=embed",
  tagline:
    "Clinical Dermatology, Hair Care, Lasers & Cosmetology Clinic in Vijayanagar, Bengaluru. In-Clinic & Online Consultations Available.",
  nav: [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Meet Our Doctor", "#doctors"],
    ["Reviews", "#reviews"],
    ["FAQs", "#faqs"],
    ["Book Appointment", "#contact"],
  ],
};

const IMAGES = {
  hero: U("1713085085470-fba013d67e65", 1400),
  doctor: drAshwiniPortrait,
  faces: [
    drAshwiniPortrait,
    U("1742280159636-3a06652ac9d9", 600),
    U("1713085085470-fba013d67e65", 600),
  ],
};

const HERO = {
  title: "Skin, Hair and Cosmetology Care in Vijayanagar, Bengaluru",
  sub: "Dr. Ashwini's Skin, Hair and Cosmetology Clinic is a premier Dermatology Clinic in Vijayanagar, Bangalore led by Dr. Ashwini K.R (MBBS, DDVL). Book an in-clinic visit or an online video consultation today.",
  cta: [
    ["Book In-Clinic / Online", "#contact"],
    ["Explore Treatments", "#services"],
  ],
  stats: [
    ["19+ Yrs", "Experience"],
    ["4.5 ★ (194)", "Google Reviews"],
    ["Mon–Sat", "10am–9pm"],
  ],
};

interface ServiceItem {
  name: string;
  desc: string;
  procedureTag: string;
  photo: string;
}

interface ServiceGroup {
  tab: string;
  cta: [string, string];
  items: ServiceItem[];
}

const SERVICES: {
  title: string;
  sub: string;
  groups: ServiceGroup[];
} = {
  title: "Our Treatments & Services",
  sub: "Browse our clinical dermatology, hair restoration, cosmetology, and US-FDA laser treatments in Vijayanagar, Bengaluru. Tap any treatment card to book an in-clinic or online consultation.",
  groups: [
    {
      tab: "Cosmetology & PRP / Anti-Aging",
      cta: ["Book a Cosmetology Consultation", "#contact"],
      items: [
        {
          name: "PRP & GFC Therapy for Scalp & Face",
          desc: "doctor injecting Platelet-Rich Plasma (PRP) & Growth Factor Concentrate directly into the scalp and face for hair regrowth and rejuvenation",
          procedureTag: "PRP / GFC Injection",
          photo: U("1742280159636-3a06652ac9d9", 800),
        },
        {
          name: "Botox & Fillers for Wrinkle Reduction",
          desc: "precision anti-aging Botox and hyaluronic dermal filler injections by dermatologist for wrinkle smoothing and lip/facial contouring",
          procedureTag: "Injectable Procedure",
          photo: U("1746017062285-13c77e29fc25", 800),
        },
        {
          name: "Chemical Peels & Cosmelan Peel",
          desc: "dermatologist applying medical-grade Azelaic, Yellow, Ferulac and Cosmelan peel solutions for pigmentation, acne and glow",
          procedureTag: "Medical Peel",
          photo: U("1713085085470-fba013d67e65", 800),
        },
        {
          name: "Dermapen 4 Microneedling",
          desc: "clinical microneedling pen procedure to stimulate deep collagen for acne scars, open pores and skin texture renewal",
          procedureTag: "Microneedling Pen",
          photo: U("1761718209852-54ca4210183e", 800),
        },
        {
          name: "Hydra Facial | Oxy Facial | Medifacial",
          desc: "multi-step hydro-dermabrasion, vortex cleansing, oxygen infusion and antioxidant serum facial for instant radiance",
          procedureTag: "Hydra-Wand Facial",
          photo: P("3985329", 800),
        },
        {
          name: "HIFU Skin Tightening & Face Lifting",
          desc: "High-Intensity Focused Ultrasound transducer treatment for non-surgical face lifting, double chin reduction and jawline tightening",
          procedureTag: "Ultrasound Lift",
          photo: P("5069432", 800),
        },
        {
          name: "Dermaplaning for Smooth Skin",
          desc: "sterile clinical blade exfoliation removing dead skin cells and fine vellus hair for an ultra-smooth, glowing complexion",
          procedureTag: "Exfoliation Procedure",
          photo: U("1552693673-1bf958298935", 800),
        },
        {
          name: "Radiofrequency (RF) for Warts & Skin Tags",
          desc: "precision radiofrequency cautery procedure for painless, scar-free removal of skin tags, warts, moles and DPN",
          procedureTag: "RF Cautery",
          photo: U("1551601651-09492b5468b6", 800),
        },
        {
          name: "Lip & Eyebrow Micropigmentation",
          desc: "medical-grade semi-permanent cosmetic lip tinting and eyebrow micropigmentation for symmetrical, natural definition",
          procedureTag: "Micropigmentation",
          photo: P("3997989", 800),
        },
      ],
    },
    {
      tab: "Skin, Hair & Online Care",
      cta: ["Book a Dermatology Consultation", "#contact"],
      items: [
        {
          name: "Pimples & Acne Treatment",
          desc: "clinical acne examination, comedone extraction, chemical peels and customized prescription care for active pimples and scars",
          procedureTag: "Acne & Comedone Care",
          photo: P("3997993", 800),
        },
        {
          name: "Hair Loss & Scalp Treatments",
          desc: "trichoscopy scalp analysis, medical hair regrowth therapy, GFC/PRP boosters and alopecia management",
          procedureTag: "Trichology & Scalp",
          photo: P("8460157", 800),
        },
        {
          name: "Melasma & Pigmentation Disorders",
          desc: "targeted depigmentation treatments, Cosmelan peels and laser toning for stubborn facial melasma, dark spots and uneven tone",
          procedureTag: "Pigmentation Care",
          photo: U("1737978697863-5d65495b28ef", 800),
        },
        {
          name: "Online Video Dermatology Consultation",
          desc: "consult Dr. Ashwini K.R from home via video/WhatsApp call with digital prescription for acne, hair fall, rashes and follow-ups",
          procedureTag: "Online Consultation",
          photo: P("4033148", 800),
        },
        {
          name: "Psoriasis & Vitiligo Management",
          desc: "specialized long-term medical dermatology and phototherapy protocols for psoriasis plaques and vitiligo patches",
          procedureTag: "Clinical Dermatology",
          photo: P("7579831", 800),
        },
        {
          name: "Eczema, Lichen Planus & Urticaria",
          desc: "barrier-repair therapy and anti-inflammatory relief for chronic itching, hives, allergic contact dermatitis and eczema",
          procedureTag: "Rash & Itch Relief",
          photo: P("4046567", 800),
        },
        {
          name: "Skin Allergies & Fungal Infections",
          desc: "rapid diagnostic evaluation and targeted antifungal, antibacterial and antiviral treatment for stubborn skin infections",
          procedureTag: "Infection Control",
          photo: U("1579684385127-1ef15d508118", 800),
        },
        {
          name: "Tanning & Burn Care",
          desc: "medical de-tanning procedures, sunburn recovery and specialized scar-preventive dressing and care for superficial burns",
          procedureTag: "Burn & Tan Recovery",
          photo: P("5215024", 800),
        },
        {
          name: "Nail Clinic & Nail Doctor",
          desc: "medical and surgical nail care for fungal nail infections, ingrown toenails, brittle nails and nail bed disorders",
          procedureTag: "Nail Specialist",
          photo: P("3997379", 800),
        },
      ],
    },
    {
      tab: "Advanced Laser Clinic",
      cta: ["Book a Laser Consultation", "#contact"],
      items: [
        {
          name: "Soprano Ice Platinum Laser Hair Removal",
          desc: "award-winning Alma Soprano Ice Platinum triple-wavelength laser handpiece for virtually painless permanent hair reduction",
          procedureTag: "Soprano Ice Laser",
          photo: P("4586726", 800),
        },
        {
          name: "Diode Laser for Permanent Hair Removal",
          desc: "high-speed cooling diode laser hair removal for face, underarms, bikini, arms, legs and full body on Indian skin tones",
          procedureTag: "Diode Hair Laser",
          photo: P("5069609", 800),
        },
        {
          name: "Q-Switched Nd:YAG Laser Toning",
          desc: "Q'Laze Nd:YAG laser toning and Hollywood carbon laser peel for deep pigmentation, melasma, tan removal and bright skin",
          procedureTag: "Q'Laze Nd:YAG",
          photo: U("1616394584738-fc6e612e71b9", 800),
        },
        {
          name: "CO2 Fractional Laser for Scars & Stretch Marks",
          desc: "ablative fractional CO2 laser skin resurfacing for deep boxcar/icepick acne scars, surgical scars, warts and stretch marks",
          procedureTag: "Fractional CO2 Laser",
          photo: U("1629909613654-28e377c37b09", 800),
        },
        {
          name: "MNRF for Acne Scars & Open Pores",
          desc: "Microneedling Radiofrequency thermal energy delivery into the dermis for dramatic acne scar reduction and pore tightening",
          procedureTag: "MNRF Scar Remodeling",
          photo: P("5069494", 800),
        },
        {
          name: "Laser Tattoo Removal",
          desc: "precision Q-switched laser pulses that safely shatter unwanted dark and multicolor tattoo ink without damaging surrounding skin",
          procedureTag: "Tattoo Laser",
          photo: P("4586718", 800),
        },
        {
          name: "Laser Vaginal Rejuvenation",
          desc: "confidential, non-surgical feminine laser tightening and intimate skin rejuvenation performed by a female dermatologist",
          procedureTag: "Feminine Laser Care",
          photo: U("1584515933487-779824d29309", 800),
        },
      ],
    },
  ],
};

const DOCTORS = {
  title: "Meet Our Dermatologist",
  sub: "About Dr. Ashwini's Skin, Hair and Cosmetology Clinic in Vijayanagar, Bangalore: compassionate, evidence-based care led by Dr. Ashwini K.R.",
  items: [
    {
      id: "dr-ashwini",
      tag: "Dr. Ashwini K.R · MBBS, DDVL",
      name: "Dr. Ashwini K.R",
      quals: "MBBS, DDVL · 19+ Years Experience",
      role: "Chief Consultant Dermatologist, Trichologist & Cosmetologist",
      intro:
        "Dr. Ashwini's Skin, Hair and Cosmetology Clinic is a trusted Dermatology Clinic in Vijayanagar, Bangalore. Dr. Ashwini K.R personally evaluates every patient—both in-clinic and via online video consultations—providing customized medical treatments for skin, hair, and nail conditions alongside US-FDA approved laser and anti-aging procedures.",
      more: [
        "19+ years of clinical experience in Dermatology, Venereology, Trichology & Cosmetology",
        "In-house US-FDA approved Alma Soprano ICE Platinum, Q'Laze Nd:YAG, Fractional CO2 Laser, MNRF & Dermapen 4",
        "Both In-Clinic Procedures & Online Video Consultations available Monday to Saturday",
        "4.5★ Google Rating across 194+ verified patient reviews in Hampi Nagar, Vijayanagar, Bengaluru",
      ],
      areas: [
        "PRP & GFC Hair/Face Therapy",
        "Pimples & Acne Scar Revision",
        "Soprano Ice Laser Hair Removal",
        "Melasma & Pigmentation Peels",
        "Hydra / Oxy / Medifacials",
        "Botox, Fillers & HIFU Lift",
        "CO2 & MNRF Laser Resurfacing",
        "Psoriasis, Vitiligo & Eczema",
        "Skin Allergy & Fungal Care",
        "Online Video Consultations",
      ],
      cta: ["Book In-Clinic / Online with Dr. Ashwini", "#contact"],
    },
  ],
};

const REVIEWS = {
  title: "Google Review Summary · 4.5 ★ (194)",
  sub: "Read what patients say about their skin, hair, PRP, and laser treatments with Dr. Ashwini K.R in Vijayanagar, Bengaluru.",
  pageSize: 3,
  items: [
    {
      text: "Dr. Ashwini is the best dermatologist around. Very polite and I recommend for all skin and hair problems.",
      name: "Verified Patient",
      role: "Skin & Hair Consultation",
      rating: 5,
      pic: "women/44",
    },
    {
      text: "Cured all the blemishes by treatment, very patient doctor who listens carefully and explains the root cause.",
      name: "Karthik Gowda",
      role: "Blemishes & Acne Care",
      rating: 5,
      pic: "men/32",
    },
    {
      text: "Highly recommend them for anyone seeking quality skincare solutions in Vijayanagar. Visible improvement within weeks.",
      name: "Divya Rao",
      role: "Skincare & Cosmetology",
      rating: 5,
      pic: "women/68",
    },
    {
      text: "Very polite doctor and clean, well-maintained clinic with advanced laser machines. Soprano Ice hair removal was completely painless.",
      name: "Ananya Shetty",
      role: "Laser Hair Removal",
      rating: 5,
      pic: "women/26",
    },
    {
      text: "Visited for severe hair fall and dandruff. After PRP & GFC therapy injections from Dr. Ashwini, my hair fall has reduced drastically.",
      name: "Prashanth Kumar",
      role: "PRP & GFC Hair Therapy",
      rating: 5,
      pic: "men/46",
    },
    {
      text: "Took an online consultation first and then visited for a chemical peel. Very convenient, transparent pricing and in-house pharmacy.",
      name: "Meghana Murthy",
      role: "Online & Peel Patient",
      rating: 4,
      pic: "women/12",
    },
  ],
};

const FAQS = {
  title: "Frequently Asked Questions",
  sub: "Clear answers about timings, online consultations, laser treatments, and directions to Dr. Ashwini's Skin, Hair & Cosmetology Clinic.",
  items: [
    [
      "What are the clinic timings of Dr. Ashwini's Skin, Hair and Cosmetology Clinic?",
      "The clinic is open Monday to Saturday from 10:00 AM to 9:00 PM (10:00–21:00). Morning sessions run from 10:30 AM to 1:30 PM and evening sessions continue until 8:00 PM–9:00 PM. Call or WhatsApp +91 80730 21907 to confirm your slot.",
    ],
    [
      "Are online consultations available with Dr. Ashwini K.R?",
      "Yes! Both In-Clinic Visits and Online Video / WhatsApp Consultations are available. Select 'Online Consultation' in the vertical booking form below to schedule a video call and receive a digital prescription.",
    ],
    [
      "Where is the clinic located in Vijayanagar, Bengaluru?",
      "We are located at #2094, Ground Floor, 9th Cross, 5th Main Road, Opp. St. John's High School, Hampi Nagar, Vijayanagar, Bengaluru, Karnataka 560104.",
    ],
    [
      "How is PRP & GFC therapy performed for hair loss and facial rejuvenation?",
      "Dr. Ashwini draws a small sample of your blood, concentrates the growth factors (PRP/GFC) in a sterile centrifuge, and gently injects them into the scalp or facial skin using ultra-fine microneedles to stimulate natural hair regrowth and collagen.",
    ],
    [
      "What advanced laser and anti-aging procedures are available at the clinic?",
      "We offer Soprano Ice Platinum & Diode Laser Hair Removal, Q'Laze Nd:YAG Laser Toning, Fractional CO2 Laser, MNRF for acne scars, Laser Tattoo Removal, Botox, Dermal Fillers, HIFU face lifting, Dermapen 4 microneedling, and Hydra/Oxy Medifacials.",
    ],
    [
      "How long does a typical visit take?",
      "Patients typically spend 20 minutes to 1 hour at the clinic depending on whether they are visiting for a consultation, PRP injection, chemical peel, or laser session.",
    ],
  ],
};

const CONTACT = {
  title: "Book In-Clinic or Online Consultation",
  caption:
    "Dr. Ashwini K.R (MBBS, DDVL) · Mon–Sat: 10:00 AM – 9:00 PM · Vijayanagar, Bengaluru",
  form: {
    name: "Enter your full name*",
    phone: "10-digit mobile / WhatsApp number*",
    submitInClinic: "Confirm In-Clinic Appointment",
    submitOnline: "Book Online Video Consultation",
    okInClinic:
      "Thank you! Your In-Clinic appointment request with Dr. Ashwini K.R has been received. We will call or WhatsApp you shortly to confirm your slot.",
    okOnline:
      "Thank you! Your Online Video Consultation request with Dr. Ashwini K.R has been received. Our team will contact you on WhatsApp (+91 80730 21907) with the video link.",
  },
};

const FOOTER = {
  quick: [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Meet Dr. Ashwini", "#doctors"],
    ["Google Reviews", "#reviews"],
    ["FAQs & Timings", "#faqs"],
  ],
  colA: {
    title: "Dermatology & PRP",
    items: [
      "PRP & GFC Hair/Face Therapy",
      "Pimples & Acne Treatment",
      "Melasma & Pigmentation",
      "Hydra | Oxy | Medifacial",
      "Botox, Fillers & HIFU",
      "Online Video Consultation",
    ],
  },
  colB: {
    title: "Laser Treatments",
    items: [
      "Soprano Ice Hair Removal",
      "Diode Laser Hair Removal",
      "Nd:YAG Laser Skin Toning",
      "CO2 Laser for Scars & Warts",
      "MNRF for Acne Scars",
      "Laser Tattoo Removal",
    ],
  },
  legal: ["Privacy Policy", "Terms & Conditions", "Vijayanagar, Bengaluru"],
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [revPage, setRevPage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [consultMode, setConsultMode] = useState<"in-clinic" | "online">("in-clinic");
  const [selectedService, setSelectedService] = useState("PRP & GFC Therapy for Scalp & Face");
  const [formMsg, setFormMsg] = useState<{ text: string; isError: boolean }>({
    text: "",
    isError: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrollProgress(max > 0 ? h.scrollTop / max : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "services", "doctors", "reviews", "faqs", "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setActiveSection(en.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const totalRevPages = Math.max(1, Math.ceil(REVIEWS.items.length / REVIEWS.pageSize));
  const currentReviews = REVIEWS.items.slice(
    revPage * REVIEWS.pageSize,
    revPage * REVIEWS.pageSize + REVIEWS.pageSize
  );

  const handleServiceCardClick = (serviceName: string) => {
    setSelectedService(serviceName);
    if (serviceName.toLowerCase().includes("online")) {
      setConsultMode("online");
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const phoneOk = /^[+\d][\d\s-]{7,}$/.test(phone);

    if (!name || !phoneOk) {
      setFormMsg({
        text: "Please enter your full name and a valid 10-digit phone number.",
        isError: true,
      });
      return;
    }
    setFormMsg({
      text:
        consultMode === "online"
          ? CONTACT.form.okOnline
          : CONTACT.form.okInClinic,
      isError: false,
    });
    e.currentTarget.reset();
  };

  return (
    <>
      <div
        className="progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp with Dr. Ashwini K.R"
      >
        <i className="ri-whatsapp-fill" aria-hidden="true" />
        <span>WhatsApp: {SITE.whatsappNumber}</span>
      </a>

      <div className="wrap">
        {/* NAVBAR - Doctor Name & Dr. Only */}
        <header className="nav" id="home">
          <a className="logo" href="#home">
            <i className="ri-heart-pulse-fill" aria-hidden="true" />
            <span>{SITE.name}</span>
          </a>

          <nav
            className={`nav-links ${menuOpen ? "open" : ""}`}
            id="navLinks"
            aria-label="Primary"
          >
            {SITE.nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={activeSection === href.slice(1) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
              style={{ padding: "8px 12px", fontSize: "13px" }}
              aria-label="WhatsApp Doctor"
            >
              <i className="ico ri-whatsapp-line" aria-hidden="true" />
              <span>080730 21907</span>
            </a>
            <button
              className="tool burger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i
                className={`ico ri-${menuOpen ? "close-line" : "menu-line"}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </header>

        <main>
          {/* HERO - Mobile-First Responsive, No Directions Button */}
          <div className="hero" id="hero">
            <div className="hero-left">
              <div>
                <span className="pill">
                  <i className="ico ri-time-line" aria-hidden="true" />
                  {SITE.hours} · {SITE.phone}
                </span>
                <h1 className="h-xl">{HERO.title}</h1>
                <p className="hero-sub">{HERO.sub}</p>
                <div className="hero-cta">
                  <a
                    className="btn btn-dark"
                    href="#contact"
                    onClick={() => setConsultMode("in-clinic")}
                  >
                    <i className="ico ri-calendar-check-line" aria-hidden="true" />
                    {HERO.cta[0][0]}
                  </a>
                  <a
                    className="btn btn-line"
                    href="#contact"
                    onClick={() => setConsultMode("online")}
                  >
                    <i className="ico ri-vidicon-line" aria-hidden="true" />
                    Online Video Consult
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <img
                className="img"
                src={IMAGES.hero}
                alt="Dr. Ashwini K.R Skin, Hair & Cosmetology Clinic consultation"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="stats">
                {HERO.stats.map(([val, label]) => (
                  <div className="stat" key={label}>
                    <b>{val}</b>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <section id="services">
            <div className="center">
              <h2 className="h-xl">{SERVICES.title}</h2>
              <p className="sub">{SERVICES.sub}</p>
              <div className="svc-tabs" role="tablist">
                {SERVICES.groups.map((grp, i) => (
                  <button
                    key={grp.tab}
                    className="svc-tab"
                    role="tab"
                    aria-selected={activeTab === i}
                    onClick={() => setActiveTab(i)}
                  >
                    {grp.tab}
                    <small>{grp.items.length}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="svc-grid swap" role="tabpanel">
              {SERVICES.groups[activeTab].items.map((item, idx) => (
                <a
                  key={item.name}
                  className="svc"
                  style={{ "--i": idx % 4 } as React.CSSProperties}
                  href="#contact"
                  onClick={() => handleServiceCardClick(item.name)}
                  aria-label={`Book ${item.name}`}
                >
                  <div className="svc-media">
                    <img
                      className="img loaded"
                      src={item.photo}
                      alt={item.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <span className="svc-no">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="svc-badge">{item.procedureTag}</span>
                  </div>
                  <div className="svc-body">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <span className="svc-foot">
                      Book this treatment
                      <span className="circ">
                        <i className="ico ri-arrow-right-up-line" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="center svc-cta">
              <a
                className="btn btn-dark"
                href={SERVICES.groups[activeTab].cta[1]}
                onClick={() => setConsultMode("in-clinic")}
              >
                {SERVICES.groups[activeTab].cta[0]}
              </a>
              <a
                className="btn btn-line"
                href="#contact"
                onClick={() => setConsultMode("online")}
              >
                <i className="ico ri-vidicon-line" aria-hidden="true" />
                Book Online Video Consultation
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* DOCTORS & CLINIC ABOUT BAND */}
      <section className="band" id="doctors">
        <div className="wrap center">
          <h2 className="h-xl">{DOCTORS.title}</h2>
          <p className="sub">{DOCTORS.sub}</p>
          <div className="dprofiles">
            {DOCTORS.items.map((d) => (
              <article className="dprof" id={d.id} key={d.id}>
                <div className="dprof-photo">
                  <img
                    className="img"
                    src={IMAGES.doctor}
                    alt={`${d.name} - Dermatologist in Vijayanagar, Bengaluru`}
                  />
                  <span className="dprof-tag">
                    <i className="ico ri-stethoscope-line" aria-hidden="true" />
                    {d.tag}
                  </span>
                </div>

                <div className="dprof-body">
                  <div>
                    <h3>{d.name}</h3>
                    <p className="dprof-quals">{d.quals}</p>
                    <p className="dprof-role">{d.role}</p>
                  </div>

                  <p className="dprof-intro">{d.intro}</p>

                  <div>
                    <h4>Clinic Highlights &amp; Expertise</h4>
                    <ul className="dprof-list">
                      {d.more.map((m) => (
                        <li key={m}>
                          <span className="tick">
                            <i className="ico ri-check-line" aria-hidden="true" />
                          </span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>Key Areas of Care</h4>
                    <div className="chips">
                      {d.areas.map((n) => (
                        <span className="chip" key={n}>
                          {n}
                        </span>
                      ))}
                      <a className="chip" href="#services">
                        +15 more treatments
                      </a>
                    </div>
                  </div>

                  <div className="dprof-facts">
                    <div className="fact">
                      Timings (In-Clinic &amp; Online)
                      <b>{SITE.hoursLong}</b>
                    </div>
                    <div className="fact">
                      Clinic Address (Vijayanagar)
                      <b>{SITE.address}</b>
                    </div>
                  </div>

                  <div className="dprof-cta">
                    <a
                      className="btn btn-dark"
                      href={d.cta[1]}
                      onClick={() => setConsultMode("in-clinic")}
                    >
                      {d.cta[0]}
                    </a>
                    <a
                      className="btn btn-wa"
                      href={SITE.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ico ri-whatsapp-line" aria-hidden="true" />
                      WhatsApp {SITE.whatsappNumber}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        {/* REVIEWS */}
        <section id="reviews">
          <div className="wrap" style={{ padding: 0 }}>
            <div className="rev-head">
              <h2 className="h-xl">{REVIEWS.title}</h2>
              <p>{REVIEWS.sub}</p>
            </div>

            <div className="rev-grid swap">
              {currentReviews.map((r, i) => {
                const initials = r.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("");
                return (
                  <article
                    className="rev"
                    key={r.name + i}
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <div className="rev-top">
                      <div
                        className="stars"
                        role="img"
                        aria-label={`${r.rating} out of 5 stars`}
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <i
                            key={n}
                            style={{ "--s": n } as React.CSSProperties}
                            className={n <= r.rating ? "ri-star-fill" : "ri-star-line"}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="rating-num">{r.rating}.0</span>
                    </div>
                    <q>{r.text}</q>
                    <div className="rev-foot">
                      <div className="who">
                        <span className="avatar">
                          <img
                            className="img"
                            src={`https://randomuser.me/api/portraits/${r.pic}.jpg`}
                            alt={`Photo of ${r.name}`}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const parent = e.currentTarget.parentElement;
                              if (parent) parent.textContent = initials;
                            }}
                          />
                        </span>
                        <div>
                          <b>{r.name}</b>
                          <small>{r.role}</small>
                        </div>
                      </div>
                      <span className="qmark" aria-hidden="true">
                        <i className="ri-double-quotes-r" />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pager">
              <button
                className="circ"
                aria-label="Previous reviews"
                disabled={revPage === 0}
                onClick={() => setRevPage((p) => Math.max(0, p - 1))}
              >
                <i className="ico ri-arrow-left-s-line" aria-hidden="true" />
              </button>
              <div className="dots" aria-hidden="true">
                {Array.from({ length: totalRevPages }, (_, k) => (
                  <span key={k} className={k === revPage ? "on" : ""} />
                ))}
              </div>
              <button
                className="circ fill"
                aria-label="Next reviews"
                disabled={revPage >= totalRevPages - 1}
                onClick={() => setRevPage((p) => Math.min(totalRevPages - 1, p + 1))}
              >
                <i className="ico ri-arrow-right-s-line" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section id="faqs">
          <div className="center">
            <h2 className="h-xl">{FAQS.title}</h2>
            <p className="sub">{FAQS.sub}</p>
          </div>
          <div className="faq-list">
            {FAQS.items.map(([q, a], i) => (
              <details className="qa" key={q} open={i === 0}>
                <summary>
                  {q}
                  <i className="ico ri-add-line" aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="faq-foot">
            Still have a question? <a href={SITE.phoneHref}>Call {SITE.phone}</a> or{" "}
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp {SITE.whatsappNumber}
            </a>
          </p>
        </section>

        {/* CONTACT / VERTICAL BOOKING + ONLINE CONSULTATION + REAL MAP */}
        <section id="contact">
          <div className="touch">
            <h2 className="h-xl">{CONTACT.title}</h2>
            <div className="faces">
              {IMAGES.faces.map((src, i) => (
                <span className="avatar" key={i}>
                  <img
                    className="img"
                    src={src}
                    alt="Dr. Ashwini K.R"
                    loading="lazy"
                  />
                </span>
              ))}
            </div>
            <p className="touch-cap">{CONTACT.caption}</p>
            <div className="touch-cta">
              <a className="btn btn-white" href={SITE.phoneHref}>
                <i className="ico ri-phone-fill" aria-hidden="true" />
                Call {SITE.whatsappNumber}
              </a>
              <a
                className="btn btn-wa"
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ico ri-whatsapp-fill" aria-hidden="true" />
                WhatsApp {SITE.whatsappNumber}
              </a>
            </div>

            {/* Vertical Appointment Card with In-Clinic & Online Consultation Switch */}
            <div className="book-card">
              <div className="consult-Switch" role="tablist" aria-label="Consultation Type">
                <button
                  type="button"
                  role="tab"
                  aria-selected={consultMode === "in-clinic"}
                  className={`consult-btn ${consultMode === "in-clinic" ? "active" : ""}`}
                  onClick={() => setConsultMode("in-clinic")}
                >
                  <i className="ico ri-hospital-line" aria-hidden="true" />
                  In-Clinic Visit
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={consultMode === "online"}
                  className={`consult-btn ${consultMode === "online" ? "active" : ""}`}
                  onClick={() => setConsultMode("online")}
                >
                  <i className="ico ri-vidicon-line" aria-hidden="true" />
                  Online Consultation
                </button>
              </div>

              <form
                className="form-vertical"
                id="bookForm"
                onSubmit={handleFormSubmit}
                noValidate
              >
                <div className="field-group">
                  <label htmlFor="patientName">Patient Full Name*</label>
                  <input
                    id="patientName"
                    name="name"
                    type="text"
                    placeholder={CONTACT.form.name}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="patientPhone">
                    {consultMode === "online"
                      ? "WhatsApp / Mobile Number (for Video Link)*"
                      : "Mobile / WhatsApp Number*"}
                  </label>
                  <input
                    id="patientPhone"
                    name="phone"
                    type="tel"
                    placeholder={CONTACT.form.phone}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="serviceSelect">Select Treatment / Concern*</label>
                  <select
                    id="serviceSelect"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <optgroup label="Cosmetology & PRP / Anti-Aging">
                      <option value="PRP & GFC Therapy for Scalp & Face">
                        PRP &amp; GFC Therapy for Scalp &amp; Face
                      </option>
                      <option value="Hydra Facial | Oxy Facial | Medifacial">
                        Hydra Facial | Oxy Facial | Medifacial
                      </option>
                      <option value="Chemical Peels & Cosmelan Peel">
                        Chemical Peels &amp; Cosmelan Peel
                      </option>
                      <option value="Botox & Fillers for Wrinkle Reduction">
                        Botox &amp; Fillers for Wrinkle Reduction
                      </option>
                      <option value="HIFU Skin Tightening & Face Lifting">
                        HIFU Skin Tightening &amp; Face Lifting
                      </option>
                      <option value="Dermapen 4 Microneedling">
                        Dermapen 4 Microneedling
                      </option>
                      <option value="Radiofrequency (RF) for Warts & Skin Tags">
                        Radiofrequency (RF) for Warts &amp; Skin Tags
                      </option>
                    </optgroup>
                    <optgroup label="Clinical Skin, Hair & Online Care">
                      <option value="Online Video Dermatology Consultation">
                        Online Video Dermatology Consultation
                      </option>
                      <option value="Pimples & Acne Treatment">
                        Pimples &amp; Acne Treatment
                      </option>
                      <option value="Hair Loss & Scalp Treatments">
                        Hair Loss &amp; Scalp Treatments
                      </option>
                      <option value="Melasma & Pigmentation Disorders">
                        Melasma &amp; Pigmentation Disorders
                      </option>
                      <option value="Psoriasis, Vitiligo & Eczema Care">
                        Psoriasis, Vitiligo &amp; Eczema Care
                      </option>
                      <option value="Skin Allergies & Fungal Infections">
                        Skin Allergies &amp; Fungal Infections
                      </option>
                      <option value="Nail Clinic & Nail Doctor">
                        Nail Clinic &amp; Nail Doctor
                      </option>
                    </optgroup>
                    <optgroup label="Advanced Laser Treatments">
                      <option value="Soprano Ice Platinum Laser Hair Removal">
                        Soprano Ice Platinum Laser Hair Removal
                      </option>
                      <option value="Diode Laser for Permanent Hair Removal">
                        Diode Laser for Permanent Hair Removal
                      </option>
                      <option value="Q-Switched Nd:YAG Laser Toning">
                        Q-Switched Nd:YAG Laser Toning
                      </option>
                      <option value="CO2 Fractional Laser for Scars & Stretch Marks">
                        CO2 Fractional Laser for Scars &amp; Stretch Marks
                      </option>
                      <option value="MNRF for Acne Scars & Open Pores">
                        MNRF for Acne Scars &amp; Open Pores
                      </option>
                      <option value="Laser Tattoo Removal">Laser Tattoo Removal</option>
                    </optgroup>
                  </select>
                </div>

                <div className="field-group">
                  <label htmlFor="preferredTime">Preferred Time Slot (Mon–Sat)</label>
                  <select
                    id="preferredTime"
                    name="timeSlot"
                    defaultValue="Morning (10:00 AM – 1:30 PM)"
                  >
                    <option value="Morning (10:00 AM – 1:30 PM)">
                      Morning Session (10:00 AM – 1:30 PM)
                    </option>
                    <option value="Afternoon (1:30 PM – 5:00 PM)">
                      Afternoon Session (1:30 PM – 5:00 PM)
                    </option>
                    <option value="Evening (5:00 PM – 9:00 PM)">
                      Evening Session (5:00 PM – 9:00 PM)
                    </option>
                  </select>
                </div>

                <button className="btn btn-dark btn-submit" type="submit">
                  <i
                    className={`ico ri-${
                      consultMode === "online" ? "vidicon-fill" : "calendar-check-fill"
                    }`}
                    aria-hidden="true"
                  />
                  {consultMode === "online"
                    ? CONTACT.form.submitOnline
                    : CONTACT.form.submitInClinic}
                </button>

                {formMsg.text && (
                  <p
                    className="form-msg"
                    role="status"
                    style={{ color: formMsg.isError ? "#c0262d" : "#0b2fa8" }}
                  >
                    {formMsg.text}
                  </p>
                )}
              </form>
            </div>

            <div className="details">
              <div>
                <b>
                  <i className="ico ri-map-pin-line" aria-hidden="true" />
                  Clinic Address
                </b>
                {SITE.address}
              </div>
              <div>
                <b>
                  <i className="ico ri-time-line" aria-hidden="true" />
                  Clinic &amp; Online Timings
                </b>
                {SITE.hoursLong}
              </div>
              <div>
                <b>
                  <i className="ico ri-whatsapp-line" aria-hidden="true" />
                  WhatsApp &amp; Phone
                </b>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                  {SITE.phone} (WhatsApp)
                </a>
              </div>
              <div>
                <b>
                  <i className="ico ri-compass-3-line" aria-hidden="true" />
                  Google Maps Directions
                </b>
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Real Interactive Google Map Embed at Bottom */}
            <div className="map-box">
              <iframe
                className="map-frame"
                title="Map of Dr. Ashwini's Skin, Hair & Cosmetology Clinic in Vijayanagar, Bengaluru"
                src={SITE.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer">
          <div className="foot">
            <div>
              <a className="logo" href="#home">
                <i className="ri-heart-pulse-fill" aria-hidden="true" />
                <span>{SITE.name}</span>
              </a>
              <p className="foot-tag">{SITE.tagline}</p>
              <form className="sub-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="tel"
                  placeholder="Enter Phone for Callback"
                  aria-label="Enter Phone for Callback"
                />
                <button type="submit">Request Call</button>
              </form>
              <div className="social">
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="ico ri-whatsapp-fill" aria-hidden="true" />
                </a>
                <a href={SITE.phoneHref} aria-label="Call Clinic">
                  <i className="ico ri-phone-fill" aria-hidden="true" />
                </a>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                >
                  <i className="ico ri-map-pin-fill" aria-hidden="true" />
                </a>
                <a href="#reviews" aria-label="Google Reviews">
                  <i className="ico ri-google-fill" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul>
                {FOOTER.quick.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>{FOOTER.colA.title}</h4>
              <ul>
                {FOOTER.colA.items.map((item) => (
                  <li key={item}>
                    <a href="#services">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>{FOOTER.colB.title}</h4>
              <ul>
                {FOOTER.colB.items.map((item) => (
                  <li key={item}>
                    <a href="#services">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mark" aria-hidden="true">
              Dr. Ashwini K.R
            </div>

            <div className="legal">
              {FOOTER.legal.map((l) => (
                <a href="#contact" key={l}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
