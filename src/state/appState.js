import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const squareState = selector({
    key: 'squareState',
    get: ({get}) =>{
        const value = get(countState)
        return value ** 2
    },
    // set: ({set, get}, newValue) =>{
    //   console.log('newValue', newValue)
    //   set(squareState, newValue + 1)
    // }
})

export const getData = selector({
  key: 'getData',
  get: async ({get}) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todos = res.json();
    return todos;
  }
})