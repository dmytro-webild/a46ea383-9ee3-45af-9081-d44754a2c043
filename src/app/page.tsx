"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, CheckCircle, Phone, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CoreScale"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",            href: "contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Build Your Professional Website"
          description="Create a stunning, high-converting website for your business. No coding required. Affordable pricing for small businesses."
          tag="Professional Websites"
          tagAnimation="slide-up"
          imageSrc="https://images.unsplash.com/photo-1460925895917-adf4e565db40?w=1200&q=80"
          imageAlt="Professional website builder interface"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About CoreScale"
          description={[
            "CoreScale is dedicated to empowering small businesses with professional web presence. We believe every business deserves a website that showcases their value.",            "Our platform combines ease of use with powerful features, allowing business owners to create, customize, and launch their websites in hours, not months.",            "Join hundreds of satisfied business owners who have transformed their online presence with CoreScale."
          ]}
          buttons={[{ text: "Explore Features", href: "features" }]}
          buttonAnimation="blur-reveal"
          showBorder={false}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Why CoreScale"
          description="Everything you need to build and manage your professional website"
          tag="Features"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              id: "01",              title: "Easy to Use",              description: "Intuitive drag-and-drop interface makes it simple to build your website without any technical knowledge.",              imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",              imageAlt: "Easy to use interface"
            },
            {
              id: "02",              title: "Professional Templates",              description: "Choose from professionally designed templates optimized for conversions and customer engagement.",              imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",              imageAlt: "Professional templates"
            },
            {
              id: "03",              title: "Affordable Pricing",              description: "Transparent pricing plans that scale with your business. No hidden fees or surprise charges.",              imageSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80",              imageAlt: "Affordable pricing"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that's right for your business"
          tag="Pricing"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "1",              badge: "Starter",              badgeIcon: Sparkles,
              price: "$250",              subtitle: "One-time payment for your website",              buttons: [
                { text: "Get Started", href: "contact" }
              ],
              features: [
                "Up to 5 pages",                "Free domain for 1 year",                "Mobile responsive",                "Basic analytics",                "Email support"
              ]
            },
            {
              id: "2",              badge: "Professional",              badgeIcon: CheckCircle,
              price: "$50/mo",              subtitle: "Best for managing your website",              buttons: [
                { text: "Get Started", href: "contact" }
              ],
              features: [
                "Unlimited pages",                "Free domain",                "SEO tools",                "Advanced analytics",                "Priority support",                "Email marketing integration"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-background">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get Started Today
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Join CoreScale and build your professional website in hours.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4 p-6 rounded-lg bg-card">
                <Phone className="w-8 h-8 text-primary-cta flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Phone</p>
                  <a
                    href="tel:1-800-555-0123"
                    className="text-lg font-semibold text-foreground hover:text-primary-cta transition"
                  >
                    1-800-555-0123
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-lg bg-card">
                <Mail className="w-8 h-8 text-primary-cta flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <a
                    href="mailto:support@corescale.com"
                    className="text-lg font-semibold text-foreground hover:text-primary-cta transition"
                  >
                    support@corescale.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-card p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                    placeholder="1-800-555-0123"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  >
                    <option>Website Builder</option>
                    <option>E-commerce</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  placeholder="Tell us about your business..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-cta hover:bg-primary-cta/90 text-primary-cta-text font-semibold py-3 px-6 rounded-lg transition"
              >
                Contact Us
              </button>
            </form>
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
            text: "Contact Us",            href: "#contact"
          }}
        />
      </div>
    </ThemeProvider>
  );
}