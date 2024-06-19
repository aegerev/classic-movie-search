import express from 'express'

const router = express.Router()

router.route('/').get((req, res) => res.send('Ariel is my bestest friend'))

export default router