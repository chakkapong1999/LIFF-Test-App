import initialLineLiff from '@/services/initialLIFF'

export default async function handlePrimaryLIFFTallGuard (_to, _from, next) {
  await initialLineLiff(process.env.VUE_APP_LIFF_TALL_ID) === true
    ? next()
    : alert('Error')
}
