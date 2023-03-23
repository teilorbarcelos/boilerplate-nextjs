import { rest } from 'msw';

export const useRequestHandler = [
  rest.get('https://backend.example.com/api/use-request', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: "John Doe" }),
    );
  }),

  rest.get('https://backend.example.com/api/wrong-route', (req, res, ctx) => {
    return res(
      ctx.status(404),
    );
  }),
];