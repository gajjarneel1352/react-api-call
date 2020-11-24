import React from 'react';
import { Table } from 'antd';

type Props = {
  columns: any[];
  dataSource: any[];
};

const PostsTable: React.FC<Props> = ({ columns, dataSource }) => {
  return <Table columns={columns} dataSource={dataSource}></Table>;
};

export default PostsTable;
