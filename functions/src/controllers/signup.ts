import { auth } from '~/modules/admin'
import { baseBuilder } from '~/modules/builder'

export const signup = baseBuilder.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') res.status(404).send('invalid method')

  const { email, password } = req.body as { email: string; password: string }
  const user = await auth.createUser({ email, password })

  await auth.setCustomUserClaims(user.uid, {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'user',
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-user-id': user.uid,
    },
  })

  const accessToken = await auth.createCustomToken(user.uid)

  res.status(200).send({ accessToken })
})
