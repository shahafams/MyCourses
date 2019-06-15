export const ADD_COURSES = 'ADD_COURSES';
export const REMOVE_COURSES = 'REMOVE_COURSES';

export const addCourseAction = (data: { id: number, title: string, price: number }) => ({
  type: ADD_COURSES,
  payload: data,
});

export const removeCourseAction = (data: { id: number, title: string, price: number }) => ({
  type: REMOVE_COURSES,
  payload: data,
});
