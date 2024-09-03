import express from 'express'

import { signUp, verifyEmail } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/sign-up', signUp)
router.post('/verify-email', verifyEmail)

export default router
