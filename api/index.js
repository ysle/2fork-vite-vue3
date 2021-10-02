const express = require('express')
const { createServer } = require('vite')

const run = async () => {
	const { middlewares } = await createServer({ server: { middlewareMode: 'html' } })

	express() //
		.get('/api', (req, res) => res.json({ rnd: Math.random() }))
		.use(middlewares)
		.listen(8080)
}

run()
