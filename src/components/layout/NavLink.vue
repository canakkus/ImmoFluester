<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import type { NavItem } from '@/data/navigation'
import { scrollToHash } from '@/router/scroll'

const props = defineProps<{ item: NavItem }>()
const emit = defineEmits<{ navigate: [] }>()

const route = useRoute()
const router = useRouter()

const isActive = computed(
  () => Boolean(props.item.activeRouteName) && route.name === props.item.activeRouteName,
)

/**
 * Ein Klick auf denselben Anker (z. B. zweimal „Ablauf“) ist für den Router
 * eine doppelte Navigation und würde nichts tun – dann scrollen wir selbst.
 */
function onClick(event: MouseEvent): void {
  emit('navigate')
  const target = router.resolve(props.item.to)
  if (target.hash && target.fullPath === route.fullPath) {
    event.preventDefault()
    scrollToHash(target.hash)
  }
}
</script>

<template>
  <RouterLink :to="item.to" :aria-current="isActive ? 'page' : undefined" @click="onClick">
    <slot :active="isActive">{{ item.label }}</slot>
  </RouterLink>
</template>
