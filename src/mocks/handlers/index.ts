import { helloHandler } from "./hello.handler";
import { loginHandler } from "./login.handler";
import { useRequestHandler } from "./useRequest.handler";

export const mswHandlers = [
  ...helloHandler,
  ...useRequestHandler,
  ...loginHandler,
];
