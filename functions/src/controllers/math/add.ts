import { baseBuilder } from '~/modules/builder'

export const add = baseBuilder.https.onCall((data) => {
  console.log(data)
})
