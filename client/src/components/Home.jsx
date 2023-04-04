import React, { useEffect, useState } from 'react'
// import { getStuListApi } from '../api/api';
import { Link, useLocation } from 'react-router-dom';
import Alert from './Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getStuListAsync } from '../redux/stuSlice';

export default function Home() {
  // const [stuList, setStuList] = useState([]);
  const [alert, setAlert] = useState(null);
  const [value, setValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const { stuList } = useSelector(state => state.student);

  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setAlert(location.state)
    }
  }, [location])
  const showAlert = alert ? <Alert alert={alert} /> : null;

  useEffect(() => {
    // getStuListApi().then(({ data }) => {
    //   setStuList(data)
    // })
    if (!stuList.length) {
      dispatch(getStuListAsync());
    }
  }, [stuList, dispatch])

  const handleChange = (e) => {
    setValue(e.target.value.trim())
    if (!e.target.value) {
      setSearchList([])
    }
  }

  const handleSearch = () => {
    const newList = stuList.filter(item => item.name === value);
    setSearchList(newList)
  }

  const list = searchList.length ? searchList : stuList; // 这里不能用value进行判断，因为value还没有异步更新完成

  const renderList = list.map(item => (<tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.email}</td>
      <td><Link to={`/detail/${item.id}`}>详情</Link></td>
    </tr>))

  return (
    <div>
      {showAlert}
      <div className='table-list'>
        <div className="input-group" style={{ marginBottom: 20 }}>
          <input type="text" className="form-control" placeholder="Search for..." onChange={handleChange} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={handleSearch}>Search</button>
          </span>
        </div>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>邮箱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {renderList}
          </tbody>
        </table>
      </div>
    </div>
  )
}
