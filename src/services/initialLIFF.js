import store from '@/store'

export default function initialLineLiff (liffId) {
  return new Promise(function (resolve, reject) {
    window.liff.init(
      { liffId: liffId },
      () => {
        if (window.liff.isLoggedIn()) {
          initializeProfile().then(
            (result) => resolve(result),
            (error) => reject(error)
          )
        } else {
          loginLine().then(
            (result) => resolve(result),
            (error) => reject(error)
          )
        }
      },
      (err) => reject(new Error(err))
    )
  })
}

function initializeProfile () {
  return new Promise(function (resolve, reject) {
    window.liff
      .getProfile()
      .then((profile) => {
        store.dispatch('lineprofile/setUserId', profile.userId)
        store.dispatch('lineprofile/setDisplayName', profile.displayName)
        store.dispatch('lineprofile/setPictureUrl', profile.pictureUrl)
        resolve(true)
      })
      .catch((err) => reject(new Error(err)))
  })
}

function loginLine () {
  return new Promise(function (resolve, reject) {
    window.liff
      .login()
      .then(
        window.liff.getProfile().then((profile) => {
          store.dispatch('lineprofile/setUserId', profile.userId)
          store.dispatch('lineprofile/setDisplayName', profile.displayName)
          // store.dispatch('lineprofile/setEmail', window.liff.getDecodedIDToken().email)
          store.dispatch('lineprofile/setPictureUrl', profile.pictureUrl)
          resolve(true)
        })
      )
      .catch((err) => reject(new Error(err)))
  })
}
