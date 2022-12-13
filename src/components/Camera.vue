<template>
  <div id="camera">
    <qrcode-stream @decode="onDecode" :camera="camera"></qrcode-stream>
    <qrcode-capture @decode="onDecode" style="display: none" />
    <div id="button" class="mt-3">
      <button class="btn btn-success" @click="uploadFile">Browse Photo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Camare',
  data () {
    return {
      camera: 'auto'
    }
  },
  beforeMount () {
    this.$isLoading(false)
  },
  methods: {
    async onDecode (decodedString) {
      this.$isLoading(true)
      await this.$liff.openWindow(
        {
          url: decodedString,
          external: true
        })
    },
    uploadFile () {
      document.querySelector('input[type=file]').click()
    }
  }
}
</script>

<style scoped>
#button {}
</style>
