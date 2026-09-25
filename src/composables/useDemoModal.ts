import { ref } from 'vue'

const isDemoModalOpen = ref(false)

export function useDemoModal() {
  function openDemoModal(): void {
    isDemoModalOpen.value = true
  }

  function closeDemoModal(): void {
    isDemoModalOpen.value = false
  }

  return {
    isDemoModalOpen,
    openDemoModal,
    closeDemoModal,
  }
}
