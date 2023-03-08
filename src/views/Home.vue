<template>
  <div class="home">
    <button @click="isOpenCamera = !isOpenCamera">Camera</button>
    <Camera v-if="isOpenCamera" />
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
