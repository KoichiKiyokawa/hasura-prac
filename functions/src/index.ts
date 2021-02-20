import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
const auth = admin.auth()

export const signup = functions.region('asia-northeast1').https.onRequest(async (req, res) => {
  if (req.method !== 'POST') res.status(404).send('invalid method')

  const { email, password } = req.body as { email: string; password: string }
  const user = await admin.auth().createUser({ email, password })

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
