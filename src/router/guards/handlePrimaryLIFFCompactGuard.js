import initialLineLiff from '@/services/initialLIFF'

export default async function handlePrimaryLIFFCompactGuard (_to, _from, next) {
  await initialLineLiff(process.env.VUE_APP_LIFF_COMPACT_ID) === true
    ? next()
    : alert('Error')
}
