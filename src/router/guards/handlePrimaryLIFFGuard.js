import initialLineLiff from '@/services/initialLIFF'

export default async function handlePrimaryLIFFGuard (_to, _from, next) {
  await initialLineLiff(process.env.VUE_APP_LIFF_ID) === true
    ? next()
    : alert('Error')
}
