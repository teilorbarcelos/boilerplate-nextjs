import { rest } from 'msw';

export const helloHandler = [
  rest.get('https://backend.example.com/api/hello', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: "John Doe" }),
    );
  }),
];
