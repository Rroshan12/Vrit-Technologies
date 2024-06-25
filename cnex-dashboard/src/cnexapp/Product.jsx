import React from 'react'
import DataTable from '../shared/component/DataTable';



const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Apple Watch ${i}`,
      price: 32,
      stock: 100+i,
    });
  }
function Product() {
  return (
   <>

<h1>Product list</h1>
<DataTable columns={columns} data={data}/>
   </>

  )
}

export default Product