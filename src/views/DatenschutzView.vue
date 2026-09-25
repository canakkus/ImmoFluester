<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { useSeo } from '@/composables/useSeo'
import { useStickyBarTrigger } from '@/composables/useStickyBar'
import { contact } from '@/data/contact'

useSeo({
  title: 'Datenschutz & Cookies | Der IMMO-FLÜSTERER',
  description:
    'Cookie-Hinweise und Datenschutz: nur funktionelle Cookies, YouTube-Video erst nach Klick, Schriften lokal ausgeliefert.',
  path: '/datenschutz',
})

const intro = ref<HTMLElement | null>(null)
useStickyBarTrigger(intro)

const linkClass =
  'text-burgundy underline decoration-1 underline-offset-4 transition-colors duration-150 hover:text-burgundy-dark'
</script>

<template>
  <section class="bg-paper pt-10 pb-section md:pt-16 lg:pt-20" aria-labelledby="datenschutz-heading">
    <div class="container-page">
      <div ref="intro">
        <SectionHeader eyebrow="Datenschutz" heading-id="datenschutz-heading" level="h1">
          Cookie-Hinweise
        </SectionHeader>
      </div>

      <div class="mt-10 max-w-prose-body space-y-12 text-body text-ink md:mt-12">
        <section aria-labelledby="cookies-heading">
          <h2 id="cookies-heading" class="text-h3">Cookie-Verwendung</h2>
          <div class="mt-4 space-y-[1em]">
            <p>
              Diese Webseite verwendet ausschließlich technische oder funktionelle Cookies, jedoch keine
              analytischen, Marketing- oder Tracking-Cookies. Es werden keine persönlichen Nutzerdaten gesammelt.
            </p>
            <p>
              Funktionelle Cookies stellen sicher, dass Ihr Besuch auf unserer Webseite reibungslos funktioniert.
              Bei wiederholtem Besuch unserer Webseite werden die zuvor von unserer Webseite in Ihrem Browser
              geladenen Bilder und Webelemente schneller geladen. Das erhöht für Sie den Surfkomfort auf unserer
              Webseite. Wir dürfen diese Cookies laut DSGVO ohne Ihr Einverständnis platzieren.
            </p>
          </div>
        </section>

        <section id="youtube-einbindung" aria-labelledby="youtube-heading-ds">
          <h2 id="youtube-heading-ds" class="text-h3">YouTube-Einbindung</h2>
          <div class="mt-4 space-y-[1em]">
            <p>
              Auf unserer Website ist ein YouTube-Video eingebunden. YouTube ist ein Service von Google LLC. Das
              Video wird erst geladen, wenn Sie auf „Video laden“ klicken. Vorher wird keine Verbindung zu YouTube
              aufgebaut und es werden keine Daten übertragen.
            </p>
            <p>
              Sobald Sie das Video laden, werden Daten an YouTube/Google übertragen. Wir nutzen dafür den
              erweiterten Datenschutzmodus (youtube-nocookie.com). YouTube kann dabei trotzdem Cookies setzen und
              Ihre IP-Adresse sowie weitere Informationen zu Analysezwecken verarbeiten.
            </p>
            <p>
              Mit dem Klick auf „Video laden“ stimmen Sie dieser Datenübertragung an YouTube zu. Weitere
              Informationen zum Datenschutz bei YouTube finden Sie in der
              <a
                href="https://policies.google.com/privacy"
                :class="linkClass"
                target="_blank"
                rel="noopener noreferrer"
              >Datenschutzerklärung von Google<span class="sr-only"> (öffnet in neuem Tab)</span></a>.
            </p>
          </div>
        </section>

        <section aria-labelledby="schriften-heading">
          <h2 id="schriften-heading" class="text-h3">Schriftarten</h2>
          <p class="mt-4">
            Die Schriften dieser Webseite werden direkt von unserem Server ausgeliefert. Es wird keine Verbindung
            zu Google Fonts oder anderen Schrift-Anbietern aufgebaut.
          </p>
        </section>

        <section aria-labelledby="impressum-heading">
          <h2 id="impressum-heading" class="text-h3">Impressum</h2>
          <p class="mt-4">
            Die Angaben zum Unternehmen finden Sie im
            <a :href="contact.impressumHref" :class="linkClass" target="_blank" rel="noopener noreferrer"
              >Firmen A–Z der Wirtschaftskammer Österreich<span class="sr-only"> (öffnet in neuem Tab)</span></a
            >.
          </p>
        </section>
      </div>
    </div>
  </section>
</template>
