import { baseBuilder } from '~/modules/builder'
import { toRange } from '@/utils/toRange'

type Data = {
  from: number
  to: number
}
export const getRange = baseBuilder.https.onCall((data: Data) => {
  return toRange(data.from, data.to)
})
