import { rest } from 'msw';

export const useRequestHandler = [
  rest.get('https://backend.example.com/api/use-request', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: "John Doe" }),
    );
  }),
];