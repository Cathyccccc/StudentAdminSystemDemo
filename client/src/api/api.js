import instance from './index';

// 获取学生列表
const getStuListApi = () => {
  return instance.get('/students')
}

// 根据id获取某个学生
const getStuByIdApi = (id) => {
  return instance.get(`/students/${id}`)
}

// 根据id删除某个学生
const deleteStuByIdApi = (id) => {
  return instance.delete(`/students/${id}`)
}

// 新增学生
const addStuApi = (data) => {
  return instance.post('/students', data)
}

// 根据id修改某个学生
const editStuByIdApi = (id, data) => {
  return instance.put(`/students/${id}`, data)
}

export {
  getStuListApi,
  getStuByIdApi,
  deleteStuByIdApi,
  addStuApi,
  editStuByIdApi,
}