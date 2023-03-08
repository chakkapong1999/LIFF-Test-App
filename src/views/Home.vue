<template>
  <div class="home">
    <div class="pt-5">
      <button class="btn btn-secondary" @click="isOpenCamera = !isOpenCamera">Camera</button>
    </div>
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
