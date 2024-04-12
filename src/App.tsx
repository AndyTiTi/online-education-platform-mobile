/* eslint-disable import/no-extraneous-dependencies */
import { useQuery, useMutation } from '@apollo/client';
import {
  Form, Input, Button, ImageUploader,
} from 'antd-mobile';
import { FIND, UPDATE } from './graphql/demo';
import { useUploadOSS } from './hooks/useUploadOSS';
import './App.css';

const App = () => {
  const uploadHandler = useUploadOSS();
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: '1e552089-c4ba-435e-b31f-141ab07304d5',
    },
  });
  const [update] = useMutation(UPDATE);
  const onClickHandler = (v:any) => {
    update({
      variables: {
        id: '1e552089-c4ba-435e-b31f-141ab07304d5',
        params: {
          ...v,
        },
      },
    });
  };
  return (
    <div>
      <p>
        data:
        {JSON.stringify(data)}
      </p>
      <p>
        loading:
        {loading}
      </p>
      <Form
        layout="horizontal"
        onFinish={onClickHandler}
        footer={(
          <Button block type="submit" color="primary" onClick={onClickHandler}>
            提交
          </Button>
        )}
      >
        <Form.Item name="name" label="姓名">
          <Input />
        </Form.Item>
        <Form.Item name="desc" label="描述">
          <Input />
        </Form.Item>
        <Form.Item
          name="actor"
          label="头像"
        >
          <ImageUploader upload={uploadHandler} />
        </Form.Item>
        {/* <button type="button" onClick={onClickHandler}>
          更新用户信息
        </button> */}
      </Form>
    </div>
  );
};

export default App;
