const addSum = (a, b, callback) => {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number")
      return callback("a, b, must be numbers");
    callback(undefined, a + b);
  }, 3000);
};

let callback = (error, sum) => {
  if (error) return console.log({ error });
  console.log({ sum });
};

addSum(10, "www", callback);

/*
callback 함수는 비동기 처리시 순서의 보장이 필요한 루틴의 경우 사용하는 개념.

다만 동기식 처리가 개수가 많아질 경우 메서드내의 callback를 부르며 그 callback내의 callback가 존재하고 또 그 callback내의 callback이 존재하고 결국 callback 지옥이라는
용어처럼 가독성이 떨어지는 현상 발생.

*/
