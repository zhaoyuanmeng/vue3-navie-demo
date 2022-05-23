import { ref } from 'vue'

export default {
  setup(props, context) {
    const root = ref(null)
    return () => {
      return <div ref={root}>1234</div>
    }
  },
}
