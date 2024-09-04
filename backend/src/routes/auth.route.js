import express from 'express'

import { verifyToken } from '../middleware/verifyToken.js'
import {
	checkAuth,
	forgotPassword,
	resetPassword,
	signIn,
	signOut,
	signUp,
	verifyEmail,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.get('/check-auth', verifyToken, checkAuth)

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)
router.post('/sign-out', signOut)

router.post('/verify-email', verifyEmail)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:token', resetPassword)

export default router
