import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStuListApi, deleteStuByIdApi, addStuApi, editStuByIdApi } from '../api/api';

const getStuListAsync = createAsyncThunk('student/getStuListAsync', async (_, thunkApi) => {
  const { data } = await getStuListApi();
  thunkApi.dispatch(getStuList(data));
})

const delStuAsync = createAsyncThunk('student/delStuAsync', async(id, thunkApi) => {
  await deleteStuByIdApi(id);
  thunkApi.dispatch(delStu(id));
})

const addStuAsync = createAsyncThunk('student/addStuAsync', async(stu, thunkApi) => {
  const { data } = await addStuApi(stu);
  thunkApi.dispatch(addStu(data));
})

const editStuAsync = createAsyncThunk('student/editStuAsync', async(payload, thunkApi) => {
  await editStuByIdApi(payload.id);
  thunkApi.dispatch(editStu(payload));
})

const stuSlice = createSlice({
  name: 'student',
  initialState: {
    stuList: [],
  },
  reducers: {
    getStuList: (state, { payload }) => {
      state.stuList = payload;
    },
    addStu: (state, {payload}) => {
      state.stuList.push(payload);
    },
    delStu: (state, {payload}) => {
      state.stuList.forEach((item, index) => {
        if (item.id === ~~payload) {
          state.stuList.splice(index, 1);
          return
        }
      })
    },
    editStu: (state, {payload}) => {
      state.stuList.forEach((item, index) => {
        if (item.id === ~~payload.id) {
          state.stuList.splice(index, 1, payload.stu)
        }
      })
    }
  }
})

const { getStuList, delStu, addStu, editStu } = stuSlice.actions; // 这个上面的异步函数需要用到
export default stuSlice.reducer; // slice后的reducer
export {
  getStuListAsync,
  delStuAsync,
  addStuAsync,
  editStuAsync,
}