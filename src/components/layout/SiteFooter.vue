<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ExternalLink, FileText, Mail, Phone } from 'lucide-vue-next'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import { useStickyBarHideZone } from '@/composables/useStickyBar'
import { contact, whatsappHref } from '@/data/contact'

const footer = ref<HTMLElement | null>(null)
useStickyBarHideZone(footer)

const year = new Date().getFullYear()

const linkClass =
  'inline-flex min-h-11 items-center gap-3 text-night-muted transition-colors duration-150 hover:text-paper'
const iconProps = { size: 20, 'stroke-width': 1.75, 'aria-hidden': 'true' } as const
</script>

<template>
  <footer ref="footer" class="on-night bg-night pt-16 pb-10 text-paper">
    <div class="container-page">
      <div class="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <!-- Marke -->
        <div class="lg:col-span-4">
          <ResponsiveImage
            src="/images/logo-immo-fluesterer"
            fallback-ext="png"
            :width="300"
            :height="224"
            alt="Der IMMO-FLÜSTERER – Logo mit Engel"
            img-class="h-14 w-auto rounded-sm"
          />
          <p class="mt-5 font-serif text-h3 font-normal text-paper italic">{{ contact.claim }}</p>
          <p class="mt-3 text-meta text-night-muted">{{ contact.person }} · {{ contact.tagline }}</p>
        </div>

        <!-- Kontakt -->
        <div class="lg:col-span-4">
          <h2 class="font-sans text-h4 text-paper">Kontakt</h2>
          <ul class="mt-3">
            <li>
              <a :href="contact.phoneHref" :class="linkClass">
                <Phone v-bind="iconProps" /> {{ contact.phoneDisplay }}
              </a>
            </li>
            <li>
              <a :href="whatsappHref()" :class="linkClass" target="_blank" rel="noopener noreferrer">
                <BrandIcon name="whatsapp" /> WhatsApp
                <span class="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
            <li>
              <a :href="contact.signalHref" :class="linkClass" target="_blank" rel="noopener noreferrer">
                <BrandIcon name="signal" /> Signal
                <span class="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
            <li>
              <a :href="contact.emailHref" :class="linkClass" class="break-all">
                <Mail v-bind="iconProps" /> {{ contact.email }}
              </a>
            </li>
            <li>
              <a :href="contact.youtubeChannelHref" :class="linkClass" target="_blank" rel="noopener noreferrer">
                <BrandIcon name="youtube" /> YouTube-Kanal
                <span class="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Rechtliches -->
        <nav aria-label="Rechtliches und Service" class="lg:col-span-4">
          <h2 class="font-sans text-h4 text-paper">Rechtliches</h2>
          <ul class="mt-3">
            <li>
              <a :href="contact.impressumHref" :class="linkClass" target="_blank" rel="noopener noreferrer">
                Impressum (WKO Firmen A–Z)
                <ExternalLink v-bind="iconProps" :size="18" />
                <span class="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
            <li>
              <RouterLink :to="{ name: 'datenschutz' }" :class="linkClass">Datenschutz</RouterLink>
            </li>
            <li>
              <a :href="contact.priceListHref" :class="linkClass" target="_blank" rel="noopener">
                <FileText v-bind="iconProps" /> Preise &amp; Leistungen (PDF)
                <span class="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
            <li>
              <RouterLink :to="{ name: 'referenzen' }" :class="linkClass">Referenzen</RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <p class="mt-12 border-t border-paper/12 pt-6 text-meta text-night-muted">
        © {{ year }} {{ contact.person }}, {{ contact.city }}
      </p>
    </div>
  </footer>
</template>
