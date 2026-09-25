<script setup lang="ts">
import { computed, ref } from 'vue'
import FilterChip from '@/components/ui/FilterChip.vue'
import {
  otherReferences,
  prominentReferences,
  referenceCategories,
  references,
  type Reference,
} from '@/data/references'

const activeCategoryId = ref<string | null>(null)

const activeCategory = computed(
  () => referenceCategories.find((category) => category.id === activeCategoryId.value) ?? null,
)

const chips = computed(() =>
  referenceCategories
    .map((category) => ({
      ...category,
      count: references.filter((reference) => category.pattern.test(reference.object)).length,
    }))
    .filter((chip) => chip.count > 0),
)

function matches(reference: Reference): boolean {
  return activeCategory.value ? activeCategory.value.pattern.test(reference.object) : true
}

const visibleProminent = computed(() => prominentReferences.filter(matches))
const visibleOthers = computed(() => otherReferences.filter(matches))
const visibleCount = computed(() => visibleProminent.value.length + visibleOthers.value.length)

function select(id: string | null): void {
  activeCategoryId.value = activeCategoryId.value === id ? null : id
}
</script>

<template>
  <div>
    <div role="group" aria-label="Referenzen nach Objekt filtern" class="flex flex-wrap gap-2">
      <FilterChip label="Alle" :count="references.length" :pressed="activeCategoryId === null" @click="select(null)" />
      <FilterChip
        v-for="chip in chips"
        :key="chip.id"
        :label="chip.label"
        :count="chip.count"
        :pressed="activeCategoryId === chip.id"
        @click="select(chip.id)"
      />
    </div>
    <p class="mt-4 text-meta text-ink-muted" aria-live="polite">
      <span class="numeric">{{ visibleCount }}</span> von <span class="numeric">{{ references.length }}</span> Referenzen
    </p>

    <section v-if="visibleProminent.length" class="mt-12" aria-labelledby="prominente-heading">
      <h2 id="prominente-heading" class="text-h3 text-ink">Bekannte Namen</h2>
      <ul class="mt-6 grid border-t border-line md:grid-cols-2 md:gap-x-8">
        <li v-for="person in visibleProminent" :key="person.name" class="border-b border-line py-6">
          <p class="font-serif text-h3 text-ink">{{ person.name }}</p>
          <p v-if="person.role" class="mt-1 text-body text-ink-muted">{{ person.role }}</p>
          <p class="mt-2 text-meta text-ink">{{ person.object }}</p>
        </li>
      </ul>
    </section>

    <section v-if="visibleOthers.length" class="mt-12 md:mt-16" aria-labelledby="weitere-heading">
      <h2 id="weitere-heading" class="text-h3 text-ink">Weitere Käuferinnen und Käufer</h2>
      <ul class="mt-6 grid border-t border-line md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
        <li v-for="person in visibleOthers" :key="person.name" class="border-b border-line py-5">
          <p class="text-h4 text-ink">{{ person.name }}</p>
          <p class="mt-1 text-meta text-ink-muted">
            <template v-if="person.role">{{ person.role }}<br /></template>
            {{ person.object }}
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>
