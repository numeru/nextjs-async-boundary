import { rest } from 'msw';

export const handlers = [
	rest.get('/api/main', (req, res, ctx) => {
		return res(
			ctx.delay(1000),
			ctx.json({
				value: 'main',
			}),
		);
	}),
	rest.get('/api/header', (req, res, ctx) => {
		return res(
			ctx.delay(2000),
			ctx.json({
				value: 'header',
			}),
		);
	}),
	rest.get('/api/footer', (req, res, ctx) => {
		return res(
			ctx.delay(3000),
			ctx.json({
				value: 'footer',
			}),
		);
	}),
	rest.get('/api/aside', (req, res, ctx) => {
		return res(
			ctx.delay(4000),
			ctx.json({
				value: 'aside',
			}),
		);
	}),
];
