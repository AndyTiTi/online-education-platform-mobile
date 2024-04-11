import { useCallback, useState } from 'react';
import useMount from './useMount';

interface IOptions {
  params: Record<string, string>;
  manul?: boolean;
  onSuccess?: (res: unknown) => void;
  onError?: (err: unknown) => void;
}

/**
 *
 * @param service
 * @param params
 * @returns
 */
const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions,
) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const init = useCallback(async (curParams: Record<string, string>) => {
    setLoading(true);
    try {
      const res = await service(curParams);
      setData(res);
      setLoading(false);
      if (options.onSuccess) {
        options.onSuccess(res);
      }
    } catch (error) {
      // 请求失败，loading也要关闭
      setLoading(false);
      if (options.onError) {
        options.onError(error);
      }
    }
  }, [options, service]);

  useMount(() => {
    if (!options.manul) {
      init(options.params);
    }
  });

  const run = (runParams: Record<string, string>) => init(runParams);
  return { loading, data, run };
};

export default useRequest;
