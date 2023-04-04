import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
// import { getStuByIdApi, editStuByIdApi, addStuApi } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addStuAsync, editStuAsync } from '../redux/stuSlice';

export default function AddOrEdit() {
  const navigate = useNavigate();
  const [stu, setStu] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    education: '本科',
    graduationschool: '',
    profession: '',
    profile: ''
  })
  const dispatch = useDispatch();
  // 判断有路径中无id，有id为edit，无id为add
  const { id } = useParams();
  const { stuList } = useSelector(state => state.student);
  useEffect(() => {
    if (id) {
      // getStuByIdApi(id).then(({data}) => {
      //   setStu(data);
      // })
      const stuInfo = stuList.filter(item => item.id === +id)[0];
      setStu(stuInfo)
    }
  }, []);

  const handleChange = (key, value) => {
    // 年龄输入的不是数字
    if (key === 'age' && isNaN(value)) return;
    const newStuInfo = { ...stu };
    newStuInfo[key] = value;
    setStu(newStuInfo);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let prop in stu) {
      if(!stu[prop]) {
        alert('请将表单信息填写完整！')
        return
      }
    }
    if (id) {
      // editStuByIdApi(id, stu).then(() => {
      //   navigate('/home', {
      //     state: {
      //       stat: 'success',
      //       text: '修改成功！'
      //     }
      //   })
      // })
      dispatch(editStuAsync({ id, stu }))
      navigate('/home', {
        state: {
          stat: 'success',
          text: '修改成功！'
        }
      })
    } else {
      // addStuApi(stu).then(() => {
      //   navigate('/home', {
      //     state: {
      //       stat: 'success',
      //       text: '新增成功！'
      //     }
      //   })
      // })
      dispatch(addStuAsync(stu));
      navigate('/home', {
        state: {
          stat: 'success',
          text: '新增成功！'
        }
      })
    }
  }
  return (
    <div>
      <h3 className='page-header'>{id ? '修改学生' : '新增学生'}</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input type="text" className="form-control" id="name" value={stu.name} placeholder="请输入姓名" onChange={(e) => handleChange('name', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">年龄</label>
          <input type="text" className="form-control" id="age" value={stu.age} placeholder="请输入年龄" onChange={(e) => handleChange('age', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">电话</label>
          <input type="text" className="form-control" id="phone" value={stu.phone} placeholder="请输入电话" onChange={(e) => handleChange('phone', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input type="email" className="form-control" id="email" value={stu.email} placeholder="请输入邮箱" onChange={(e) => handleChange('email', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="education">教育水平</label>
          <select className="form-control" id="education" value={stu.education} placeholder="请选择教育水平" onChange={(e) => handleChange('education', e.target.value)}>
            <option>专科</option>
            <option>本科</option>
            <option>硕士</option>
            <option>博士</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="graduationschool">毕业院校</label>
          <input type="text" className="form-control" id="graduationschool" value={stu.graduationschool} placeholder="请输入毕业院校" onChange={(e) => handleChange('graduationschool', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="profession">专业</label>
          <input type="text" className="form-control" id="profession" value={stu.profession} placeholder="请输入专业" onChange={(e) => handleChange('profession', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="profile">个人简介</label>
          <textarea rows={10} className="form-control" id="profile" value={stu.profile} onChange={(e) => handleChange('profile', e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-default center-block" style={{ marginBottom: 30 }} onClick={handleSubmit}>{id ? '提交修改' : '提交新增'}</button>
      </form>
    </div>
  )
}
