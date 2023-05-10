const addSum = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("a,b must be numbers");
      }
      resolve(a + b);
    }, 3000);
  });

addSum(10, 20)
  .then((sum) => console.log({ sum })) // 성공시 호출되는 부분
  .catch((error) => console.log({ error })); // 실패시 호출되는 부분

/*
  Promise는 Callback의 가독성 문제를 해결하기 위해 생긴 개념
  비동기 처리시 callback에서 발생할 수 있는 여러 단점을 보완한 기능

  Promise라는 객체를 생성하여 처리하기 떄문에 다른 함수에 객체를 넘겨서 
  처리하는것도 가능.

  Promise는 new Promise()메서드로 호출하면 pending상태가 된다.

  이때 Callback 함수를 선언 가능
  함수 인자는 resolve, reject로 
  success -> resolve만 호출
  failed -> reject만 호출
*/
