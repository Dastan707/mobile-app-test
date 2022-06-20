<template>
  <q-page class="q-pa-md">
      <img style="width: 100px; height: 100px" :src="imageSrc" />
      <q-btn class="q-ml-md" label="Get Image" @click="downloadImage" />
      <div class="text-dark">{{batteryStatus}}</div>
  </q-page>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue'
export default {
  name: 'PageThree',
  setup () {
    const imageSrc = ref('https://tl.rulate.ru/i/book/19/10/18925.jpg')
    const batteryStatus = ref('')

    function updateBatteryStatus (status) {
      batteryStatus.value = `Level: ${status.level}, plugged: ${status.isPlugged}`
    }

    onBeforeUnmount(() => {
      window.removeEventListener('batterystatus', updateBatteryStatus, false)
    })

    onMounted(() => {
      window.addEventListener('batterystatus', updateBatteryStatus, false)
      console.log(navigator.camera, 'camera')
      console.log(batteryStatus, 'battery')
    })

    function downloadImage () {
      navigator.camera.getPicture(
        data => {
          console.log('data', data)
          imageSrc.value = `data:image/jpeg;base64,${data}`
          console.log(imageSrc.value)
        },
        () => {
          console.log('failed')
        },
        {
          quality: 75,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          mediaType: navigator.camera.MediaType.PICTURE,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          direction: navigator.camera.Direction.BACK,
          encodingType: navigator.camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100
        }
      )
    }
    return {
      imageSrc,
      downloadImage,
      batteryStatus
    }
  }
}
</script>
