<template>
  <div class="home">
    <Camera />
  </div>
</template>

<script>
import Camera from '../components/Camera.vue'
export default {
  name: 'Home',
  data () {
    return {
      isOpenCamera: false
    }
  },
  components: {
    Camera
  },
  methods: {
  }
}
</script>
