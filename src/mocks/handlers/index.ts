import { helloHandler } from "./hello.handler";
import { useRequestHandler } from "./useRequest.handler";

export const mswHandlers = [...helloHandler, ...useRequestHandler];
