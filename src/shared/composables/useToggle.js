import { ref } from 'vue'

const useToggle = () => {
    const isVisible = ref(false)

    const toggle = () => {
        isVisible.value = !isVisible.value
    }

    const close = () => {
        isVisible.value = false
    }

    const open = () => {
        isVisible.value = true
    }

    return {
        isVisible,
        toggle,
        close,
        open
    }
}

export default useToggle
