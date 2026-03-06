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

export default function LandingPage() {
  const handlePhoneClick = () => {
    window.location.href = "tel:206-741-9017";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:CoreScale.co@gmail.com";
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
        <ContactFaq
          ctaTitle="Ready to Get Your Website?"
          ctaDescription="Contact CoreScale today and let's discuss how we can help your business grow online. We're ready to answer your questions and get you started."
          ctaButton={{
            text: "Contact Us Now",            onClick: handlePhoneClick
          }}
          ctaIcon={Phone}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",              title: "How much does a website cost?",              content: "Website design starts at $250, and you pay after the website is completed. This includes professional modern design, mobile-friendly layout, fast loading pages, and everything needed to build customer trust. We also offer ongoing maintenance for $50/month."
            },
            {
              id: "2",              title: "How long does it take to get a website?",              content: "It can take up to 1-2 weeks depending on the complexity and how quickly you provide content and feedback. We work efficiently to get your website live as soon as possible."
            },
            {
              id: "3",              title: "Will my website work on mobile phones?",              content: "Absolutely! All CoreScale websites are mobile-friendly and responsive. They look and work perfectly on smartphones, tablets, and desktop computers."
            },
            {
              id: "4",              title: "Can I update my website myself?",              content: "Yes! We design websites that are easy to manage. We can train you on how to make updates, or we offer monthly maintenance packages to handle updates for you."
            },
            {
              id: "5",              title: "What if I already have a website?",              content: "If your current website is outdated or not performing well, we can redesign it with modern design and better functionality. Let's discuss your needs!"
            },
            {
              id: "6",              title: "Do you provide support after launch?",              content: "Yes! We offer ongoing support through our Website Maintenance & Edits service ($50/month). We can handle updates, improvements, and technical support to keep your site running smoothly."
            },
          ]}
        />
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