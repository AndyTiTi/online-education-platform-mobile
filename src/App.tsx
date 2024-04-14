/* eslint-disable import/no-extraneous-dependencies */
import { useMutation } from '@apollo/client';
import {
  Form, Input, Button, ImageUploader,
} from 'antd-mobile';
import { UPDATE } from './graphql/demo';
import { useUploadOSS } from './hooks/useUploadOSS';
import styles from './App.module.less';

const App = () => {
  const uploadHandler = useUploadOSS();
  // const { loading, data } = useQuery(FIND, {
  //   variables: {
  //     id: '1e552089-c4ba-435e-b31f-141ab07304d5',
  //   },
  // });
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
    <div className={styles.container}>
      <Form
        className={styles.newForm}
        layout="horizontal"
        onFinish={onClickHandler}
        footer={(
          <Button block type="submit" color="primary" onClick={onClickHandler}>
            提交
          </Button>
      )}
      >
        <Form.Item className={styles.display} name="name" label="姓名">
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
      {/* <p>
        data:
        {JSON.stringify(data)}
      </p>
      <p>
        loading:
        {loading}
      </p> */}
    </div>
  );
};

export default App;
