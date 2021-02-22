import * as _admin from 'firebase-admin'

_admin.initializeApp()
export const admin = _admin
export const auth = _admin.auth()
