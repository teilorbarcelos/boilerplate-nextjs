import "@testing-library/jest-dom/extend-expect";
import { mswServer } from "./src/mocks/server";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
