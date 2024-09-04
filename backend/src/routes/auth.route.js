import express from 'express'

import {
	forgotPassword,
	signIn,
	signOut,
	signUp,
	verifyEmail,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)
router.post('/sign-out', signOut)

router.post('/verify-email', verifyEmail)
router.post('/forgot-password', forgotPassword)

export default router
