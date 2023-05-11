/*
메서드(10, 20)
  .then() // 성공시 호출되는 부분
  .then() // 성공시 호출되는 부분
  .then() // 성공시 호출되는 부분 
  .catch((error) => console.log({ error })); // 실패시 호출되는 부분
promise 방법으로 여러번의 호출이 필요할 경우 .then을 추가하여 작성하면 됨.
Callback을 중복으로 사용하는 것보다 가독성이 좋음.
*/

const addSum = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("a,b must be numbers");
      }
      resolve(a + b);
    }, 300);
  });

addSum(10, 10)
  .then((sum1) => addSum(sum1, 1))
  .then((sum1) => addSum(sum1, 1))
  .then((sum1) => addSum(sum1, 1))
  .then((sum1) => addSum(sum1, 1))
  .then((sum) => console.log({ sum }))
  .catch((error) => console.log({ error }));

/**
 * Promise보다 가독성을 높일 수 있는 방법으로는
 * async()와 await 기법이 존재함.
 *
 * 비동기 개발 시
 * callback -> promise -> async,await 순으로
 * 가독성이 좋아진다.
 *
 */

const totalSum = async () => {
  let sum = await addSum(10, 10);
  let sum2 = await addSum(sum, 10);
  console.log({ sum, sum2 });
};

totalSum();
