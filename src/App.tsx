import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FIND, UPDATE } from './graphql/demo';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: '1e552089-c4ba-435e-b31f-141ab07304d5',
    },
  });
  const [update] = useMutation(UPDATE);
  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeDescHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  const onClickHandler = () => {
    update({
      variables: {
        id: '1e552089-c4ba-435e-b31f-141ab07304d5',
        params: {
          name,
          desc,
          avatar: 'https://avatars.githubusercontent.com/u/10510251?v=4',
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
      <p>
        name:
        <input type="text" onChange={onChangeNameHandler} />
      </p>
      <p>
        desc:
        <input type="text" onChange={onChangeDescHandler} />
      </p>
      <button type="button" onClick={onClickHandler}>
        更新用户信息
      </button>
    </div>
  );
};

export default App;
