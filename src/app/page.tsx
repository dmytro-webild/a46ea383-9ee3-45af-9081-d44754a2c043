"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { ArrowRight, CheckCircle, Sparkles, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",    businessName: "",    email: "",    phone: "",    message: ""});

  const handlePhoneClick = () => {
    window.location.href = "tel:206-741-9017";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:CoreScale.co@gmail.com";
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      fullName: "",      businessName: "",      email: "",      phone: "",      message: ""});
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="large"
      background="noiseDiagonalGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CoreScale"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Why We Matter", id: "why-matters" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Get Your Website Today",            href: "contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Affordable Professional Websites for Small Businesses"
          description="At CoreScale, we help small and local businesses build a strong online presence with clean, modern websites that attract customers and build trust."
          tag="Helping Small Businesses Grow Online"
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/joyous-coworkers-having-fun-vibrant-office-while-reviewing-financial-graphs_482257-126650.jpg"
          imageAlt="Modern professional business workspace"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Get Your Website Today", href: "contact" },
            { text: "Learn More", href: "about" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why CoreScale?"
          description={[
            "Most customers search online before visiting or contacting a business. Without a website, your business is missing valuable opportunities to connect with potential customers.",            "CoreScale specializes in helping small businesses get online quickly and affordably. We create professional websites that help businesses look credible, showcase their services, and build lasting customer relationships.",            "We focus on clean design, fast performance, and mobile-friendly layouts that work perfectly on any device. Your website will be a powerful tool to attract new customers and establish trust in your market."
          ]}
          buttons={[{ text: "Start Your Journey", href: "contact" }]}
          buttonAnimation="blur-reveal"
          showBorder={false}
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <PricingCardTwo
          title="Our Services"
          description="Simple, transparent pricing for professional web solutions tailored to small businesses"
          tag="Services & Pricing"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "1",              badge: "Website Design",              badgeIcon: Sparkles,
              price: "Starting at $250",              subtitle: "Professional website starting at $250 built to help your business attract more customers online",              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" },
              ],
              features: [
                "Professional modern design",                "Mobile-friendly layout",                "Fast loading pages",                "Clean and simple user experience",                "Website that builds trust with customers"
              ],
            },
            {
              id: "2",              badge: "Maintenance & Edits",              badgeIcon: CheckCircle,
              price: "$50/month",              subtitle: "Ongoing support to keep your site fresh",              buttons: [
                { text: "Add to Service", href: "contact" },
                { text: "Learn More", href: "#" },
              ],
              features: [
                "Website updates and content edits",                "Image or text updates",                "Small design improvements",                "Ongoing technical support",                "Keep your website running smoothly"
              ],
            },
          ]}
        />
      </div>

      <div id="why-matters" data-section="why-matters">
        <FeatureCardThree
          title="Why a Website Matters"
          description="In today's digital world, a professional online presence is essential for business growth"
          tag="Business Growth"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              id: "01",              title: "Build Trust & Credibility",              description: "A professional website shows customers that you're legitimate and serious about your business. It's often the first impression customers have of your company.",              imageSrc: "http://img.b2bpic.net/free-vector/flat-design-responsive-website-design_23-2149483806.jpg",              imageAlt: "Professional website design"
            },
            {
              id: "02",              title: "Attract More Customers",              description: "When customers search online for services you offer, a well-designed website helps them find you. Don't miss out on valuable business opportunities.",              imageSrc: "http://img.b2bpic.net/free-photo/website-construction-error-concept_53876-132306.jpg",              imageAlt: "Customer attraction through online presence"
            },
            {
              id: "03",              title: "Stand Out from Competitors",              description: "Many local businesses still don't have websites. By getting online with CoreScale, you'll have a competitive advantage and reach customers your competitors are missing.",              imageSrc: "http://img.b2bpic.net/free-photo/group-people-working-website-template_53876-25068.jpg",              imageAlt: "Competitive advantage online"
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-background">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get Your Website Started
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Ready to grow your business online? Contact CoreScale today to get your professional website built quickly and affordably.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4 p-6 rounded-lg bg-card">
                <Phone className="w-8 h-8 text-primary-cta flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Phone</p>
                  <a
                    href="tel:206-741-9017"
                    className="text-lg font-semibold text-foreground hover:text-primary-cta transition"
                  >
                    206-741-9017
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-lg bg-card">
                <Mail className="w-8 h-8 text-primary-cta flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <a
                    href="mailto:CoreScale.co@gmail.com"
                    className="text-lg font-semibold text-foreground hover:text-primary-cta transition"
                  >
                    CoreScale.co@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="bg-card p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="Your Business"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="206-741-9017"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                    placeholder="Tell us about your business and what you're looking for in a website..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-cta hover:bg-primary-cta/90 text-primary-cta-text font-semibold py-3 px-6 rounded-lg transition"
                >
                  Request Website
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <p className="text-lg font-semibold text-green-800 mb-2">
                  Thank you for contacting CoreScale.
                </p>
                <p className="text-green-700">
                  We will reach out shortly to discuss your website.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="CoreScale"
          leftLink={{
            text: "Privacy Policy",            href: "#"
          }}
          rightLink={{
            text: "Terms of Service",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}