import { useQuery } from '@apollo/client';
import { GET_OSS_INFO } from '../graphql/oss';

export const useUploadOSS = () => {
  // 1 获取到签名信息
  // 2 fetch post 请求把参数传到服务端
  const { data: d } = useQuery(GET_OSS_INFO);

  // 上传到OSS的文件通常需要一个有效的策略（Policy）和签名（Signature），这些是在服务器端生成的，以确保安全性。
  // 这意味着虽然上传操作是在客户端完成的，但是在上传之前，您需要有一个服务器端的接口来生成这些必要的凭证信息。
  const uploadHandler = async (file: File) => {
    const formData = new FormData();
    const data = d.getOSSInfo;
    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    const key = `images/${filename}`;
    formData.append('key', key);
    formData.append('policy', data.policy);
    formData.append('OSSAccessKeyId', data.accessId);
    formData.append('success_action_status', '200');
    formData.append('signature', data.signature);
    formData.append('file', file);
    const res = await fetch(data.host, {
      method: 'POST',
      body: formData,
    });
    console.log(res);
    return { url: res.url + key };
  };

  return uploadHandler;
};
