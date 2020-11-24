import React, { useEffect, useState } from 'react';
import './App.css';
import { Image } from 'antd';
import { SearchInput, PostsTable } from './component';
import useFetch from './Hooks/useFetch';

const DEBOUNCE = 200;
const columns = [
  {
    title: 'AlbumId',
    dataIndex: 'albumId',
    key: 'albumId',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'URL',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'thumbnailUrl',
    dataIndex: 'thumbnailUrl',
    key: 'thumbnailUrl',
    render: (record: any) => <Image width={50} src={record} />,
  },
];

function App() {
  const [value, setValue] = useState('');
  const [response, error, loading, fetchIt] = useFetch<any>('https://jsonplaceholder.typicode.com/photos');
  const [filteredPost, setFilteredPost] = useState(response);

  useEffect(() => {
    if (!response) {
      fetchIt();
    }
  }, [response, fetchIt]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = response.filter((data: any) => data.title.toLowerCase().includes(value));
      setFilteredPost(next);
    }, DEBOUNCE);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [response, value]);

  const onInputChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <SearchInput onInputChange={onInputChange} value={value} />
      <PostsTable columns={columns} dataSource={filteredPost} />
    </div>
  );
}

export default App;
