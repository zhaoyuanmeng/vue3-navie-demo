import { ref } from 'vue'

export default {
  setup() {
    const show = ref(true)
    const vif = () => {
      if (show.value) {
        return <span> vif</span>
      }
      return <span Yellow>velse</span>
    }
    return () => <div>{vif()}</div>
  },
}
