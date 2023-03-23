import api from "@/lib/api";
import { useLoadingStore } from "@/lib/contexts/loading";
import { AxiosResponse, isAxiosError, RawAxiosRequestConfig } from "axios";

type HTTPMethod = "get" | "post" | "put" | "delete";

interface RequestProps {
  url: string;
  method: HTTPMethod;
  data?: RawAxiosRequestConfig<unknown> | undefined;
}

export const useRequest = () => {
  const { showLoading, hideLoading } = useLoadingStore();
  const request = <T>({
    method,
    url,
    data,
  }: RequestProps): Promise<AxiosResponse<T>> => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        hideLoading();
        return response;
      },
      (error) => {
        hideLoading();

        if (isAxiosError(error)) {
          return Promise.reject(error.message);
        }
      }
    );

    showLoading();

    try {
      const response = api[method](url, data);
      return response;
    } finally {
      api.interceptors.response.eject(responseInterceptor);
    }
  };

  return { request };
};
