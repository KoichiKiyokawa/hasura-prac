import { getMonthOptions as gmo } from '@/utils/getMonthOptions'
import { baseBuilder } from '~/modules/builder'

export const getMonthOptions = baseBuilder.https.onCall(() => {
  return gmo()
})
