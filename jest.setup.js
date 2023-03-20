import "@testing-library/jest-dom/extend-expect";
import { mswServer } from "./src/mocks/server";
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
      route: '',
      pathname: '',
      query: {},
      asPath: '',
      basePath: '',
      isLocaleDomain: false,
      isFallback: false,
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isReady: true,
      isPreview: false,
    })
}));

beforeEach(() => {
  jest.clearAllMocks();
});

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
