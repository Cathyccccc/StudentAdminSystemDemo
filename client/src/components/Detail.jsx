import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
// import { getStuByIdApi, deleteStuByIdApi } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { delStuAsync } from '../redux/stuSlice';

export default function Detail() {
  const [stu, setStu] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {stuList} = useSelector(state => state.student);
  
  useEffect(() => {
    // getStuByIdApi(id).then(({ data }) => {
    //   setStu(data);
    // });
    const stuInfo = stuList.filter(item => item.id === +id)[0];
    setStu(stuInfo);
  }, [])

  const handleDelete = (id) => {
    const result = window.confirm('确认删除该名学生吗?')
    if (result) {
      // deleteStuByIdApi(id).then(() => {
      //   navigate('/home', {
      //     state: {
      //       stat: 'info',
      //       text: '删除成功'
      //     }
      //   })
      // })
      dispatch(delStuAsync(id))
      navigate('/home', {
        state: {
          stat: 'info',
          text: '删除成功'
        }
      })
    }
  }
  return (
    <div>
      <button type="button" className="btn btn-default glyphicon glyphicon-step-backward" aria-hidden="true" onClick={() => navigate('/')}>返回</button>
      <h1 className="page-header">{stu.name}
        <span className="pull-right">
          <button type="button" className="btn btn-default" onClick={() => navigate(`/edit/${stu.id}`)}>修改</button>
          <button type="button" className="btn btn-danger" style={{ marginLeft: 10 }} onClick={() => handleDelete(stu.id)}>删除</button>
        </span>
      </h1>
      <ul className="list-group">
        <li className="list-group-item">
          <span className='glyphicon glyphicon-phone-alt'>电话: {stu.phone}</span>
        </li>
        <li className="list-group-item">
          <span className='glyphicon glyphicon-envelope'>邮箱: {stu.email}</span>
        </li>
        <li className="list-group-item">
          <span className='glyphicon glyphicon-education'>文化水平: {stu.education}</span>
        </li>
        <li className="list-group-item">
          <span className='glyphicon glyphicon-tower'>毕业院校: {stu.graduationschool}</span>
        </li>
        <li className="list-group-item">
          <span className='glyphicon glyphicon-flag'>专业: {stu.profession}</span>
        </li>
        <li className="list-group-item">
          <span className='glyphicon glyphicon-tags'>个人简介: {stu.profile}</span></li>
      </ul>
    </div>
  )
}
