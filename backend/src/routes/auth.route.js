import express from 'express'

import {
	signIn,
	signOut,
	signUp,
	verifyEmail,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/sign-up', signUp)
router.post('/verify-email', verifyEmail)
router.post('/sign-in', signIn)
router.post('/sign-out', signOut)

export default router
