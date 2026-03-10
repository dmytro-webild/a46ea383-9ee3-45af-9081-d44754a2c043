"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, CheckCircle, Phone, Mail, Scissors, Users, Star } from "lucide-react";

export default function LandingPage() {
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
          brandName="Nathan's Barbershop"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Why Choose Us", id: "why-matters" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",            href: "contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Premium Barbershop Experience in Your Community"
          description="At Nathan's Barbershop, we deliver precision cuts, expert styling, and a welcoming atmosphere. Experience professional grooming that sets the standard for quality and service."
          tag="Your Local Barbershop"
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/joyous-coworkers-having-fun-vibrant-office-while-reviewing-financial-graphs_482257-126650.jpg"
          imageAlt="Professional barbershop environment"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Book Your Appointment", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Nathan's Barbershop"
          description={[
            "Nathan's Barbershop has been a trusted name in professional grooming for years. We specialize in classic barbering techniques combined with modern styling trends.",            "Our experienced barbers are dedicated to providing personalized service to every client. Whether you're looking for a classic fade, detailed lineup, or a complete styling consultation, we've got you covered.",            "We pride ourselves on creating a welcoming atmosphere where every customer feels valued. Visit us today and discover why the community trusts Nathan's for quality grooming and exceptional customer service."
          ]}
          buttons={[{ text: "Schedule Your Visit", href: "contact" }]}
          buttonAnimation="blur-reveal"
          showBorder={false}
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <PricingCardTwo
          title="Our Services"
          description="Professional barbering services tailored to your style and preferences"
          tag="Services & Pricing"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "1",              badge: "Classic Haircut",              badgeIcon: Scissors,
              price: "$20",              subtitle: "Professional haircut with expert styling",              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Expert precision cutting",                "Professional styling",                "Personalized consultation",                "Premium finishing touches",                "Quality grooming experience"
              ]
            },
            {
              id: "2",              badge: "Beard Service",              badgeIcon: CheckCircle,
              price: "$15",              subtitle: "Complete beard trimming and shaping",              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Precision beard trim",                "Expert shaping and design",                "Hot towel treatment",                "Beard conditioning",                "Professional finishing"
              ]
            }
          ]}
        />
      </div>

      <div id="why-matters" data-section="why-matters">
        <FeatureCardThree
          title="Why Choose Nathan's Barbershop"
          description="Experience the difference that professional expertise and customer care make"
          tag="Our Commitment"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              id: "01",              title: "Expert Craftsmanship",              description: "Our skilled barbers bring years of experience to every cut. We combine traditional barbering techniques with modern style trends to deliver results that exceed expectations.",              imageSrc: "http://img.b2bpic.net/free-vector/flat-design-responsive-website-design_23-2149483806.jpg",              imageAlt: "Expert barbering techniques"
            },
            {
              id: "02",              title: "Welcoming Atmosphere",              description: "Step into a space designed for comfort and conversation. Our barbershop is more than a place to get a haircut—it's a community hub where every customer is treated like family.",              imageSrc: "http://img.b2bpic.net/free-photo/website-construction-error-concept_53876-132306.jpg",              imageAlt: "Comfortable barbershop environment"
            },
            {
              id: "03",              title: "Personalized Service",              description: "We listen to what you're looking for and work with you to achieve your ideal look. Every client receives individualized attention and styling recommendations tailored to their needs.",              imageSrc: "http://img.b2bpic.net/free-photo/group-people-working-website-template_53876-25068.jpg",              imageAlt: "Personalized barbering service"
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
                Book Your Appointment
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Ready for a fresh look? Contact Nathan's Barbershop today to schedule your appointment.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4 p-6 rounded-lg bg-card">
                <Phone className="w-8 h-8 text-primary-cta flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Phone</p>
                  <a
                    href="tel:206-555-0123"
                    className="text-lg font-semibold text-foreground hover:text-primary-cta transition"
                  >
                    206-555-0123
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-lg bg-card">
                <Mail className="w-8 h-8 text-primary-cta flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <a
                    href="mailto:info@nathansbarbershop.com"
                    className="text-lg font-semibold text-foreground hover:text-primary-cta transition"
                  >
                    info@nathansbarbershop.com
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
                    placeholder="206-555-0123"
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
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  >
                    <option>Classic Haircut</option>
                    <option>Beard Service</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  placeholder="Tell us about your preferred style or any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-cta hover:bg-primary-cta/90 text-primary-cta-text font-semibold py-3 px-6 rounded-lg transition"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </section>
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Nathan's Barbershop"
          leftLink={{
            text: "Hours: Mon-Sat 9AM-6PM, Sun Closed",            href: "#"
          }}
          rightLink={{
            text: "Contact Us",            href: "#contact"
          }}
        />
      </div>
    </ThemeProvider>
  );
}
