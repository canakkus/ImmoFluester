<script setup lang="ts">
import AboutSection from '@/components/home/AboutSection.vue'
import AdvantagesSection from '@/components/home/AdvantagesSection.vue'
import BenefitsSection from '@/components/home/BenefitsSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import InspectionGallery from '@/components/home/InspectionGallery.vue'
import ProcessSteps from '@/components/home/ProcessSteps.vue'
import ReferenceStrip from '@/components/home/ReferenceStrip.vue'
import YouTubeSection from '@/components/home/YouTubeSection.vue'
import ContactCta from '@/components/shared/ContactCta.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Ankaufsberatung Wien – Der IMMO-FLÜSTERER | Mag. Ing. Johannes Kirchner',
  description:
    'Beschiss oder Schnäppchen? Ankaufs-Check für Wohnungen und Häuser in Wien: 35 Jahre Erfahrung, über 2.500 Ankaufsberatungen, Bausachverständiger Mag. Ing. Johannes Kirchner.',
  path: '/',
})
</script>

<template>
  <HeroSection />
  <ReferenceStrip />
  <BenefitsSection />
  <ProcessSteps />
  <InspectionGallery />
  <AdvantagesSection />
  <AboutSection />
  <YouTubeSection />
  <ContactCta />
</template>
