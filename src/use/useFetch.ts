import axios from "axios";
import { ref, type Ref } from "vue";

export async function useFetch<T>(
  url: string,
  options?: axios.AxiosRequestConfig<unknown>
) {
  const response: Ref<T | undefined> = ref();
  const isError: Ref<boolean> = ref(false);
  const isLoading: Ref<boolean> = ref(true);

  const request = async () => {
    const res = await axios.get<T>(url, options);
    response.value = await res.data;
  }

  return { response, request, isError, isLoading };
}
