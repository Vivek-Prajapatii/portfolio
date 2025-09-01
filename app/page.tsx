import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import SkillsSection from '@/components/Skills'
import TestimonialsSection from '@/components/TestimonialsSection'
import ExperienceSection from '@/components/ExperienceSection'

export default function Home() {
    return (
        <main className="min-h-[300vh] bg-background">
            <HeroSection />
            <SkillsSection />
            <ServicesSection />

            <ExperienceSection />
            {/* <TestimonialsSection /> */}
            <ContactSection />
        </main>
    )
}
