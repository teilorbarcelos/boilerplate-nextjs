import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import handler from '../hello';

test('should return John Doe', async () => {
  const { req, res } = createMocks<NextApiRequest, NextApiResponse>();
  await handler(req, res);
  expect(res.statusCode).toBe(200);
  expect(JSON.parse(res._getData())).toEqual({ name: 'John Doe' });
});
