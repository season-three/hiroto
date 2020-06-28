import React, { useState, useEffect } from "react";
// import React, { useState } from "react";

const Test = () => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);
  const num = 0;
  console.log(num);
  const hello = (callback) => {
    console.log(`hello${callback()}`);
  };
  // const getName = () => {
  //   return "ヒロト";
  // };

  // const getFirstName = () => {
  //   return "code";
  // };

  // hello(() => {
  //   return "code";
  // });

  // const family = (many, name) => {
  //   console.log(many);
  //   console.log(`兄弟の一人に${many(name)}がいます`);
  // };

  // const family2 = () => {
  //   return "2000にん";
  //   return "伊藤真斗";
  // };

  // family((lastName) => {
  //   return `2000にんの${lastName}`;
  // }, "イトーユート");

  const doSomething = (a, b, callback) => {
    const result = callback(a, b);
    console.log(result);
  };

  const multiply = (a, b) => {
    return a * b;
  };

  const plus = (a, b) => {
    return a + b;
  };

  doSomething(200, 2, multiply);
  doSomething(900, 1100, plus);

  const countUp = () => {
    counter(count + 1);
  };

  const todos = [
    {
      id: 1,
      title: "Go to school",
      conplete: true,
    },
    {
      id: 2,
      title: "Go to museum",
      conplete: true,
    },
    {
      id: 3,
      title: "Go to shopping",
      conplete: false,
    },
  ];

  for (let todo of todos) {
    console.log(todo);
    if (todo.conplete === true) {
      console.log(todo.conplete);
      console.log(todo.id);
    }
  }

  const arry = [1, 2, 3, 4, 5];

  arry.forEach((v, i, ary) => {
    console.log(ary);
  });

  const str = "animation";
  const strArry = str.split("");

  console.log(strArry);

  strArry.reduce((accu, curr) => {
    console.log(accu, curr);
    return;
  });

  arry.reduce((accu, curr) => {
    console.log(accu, curr);
    return accu * curr;
  }, 10);

  useEffect(() => {
    document.getElementById("counter").addEventListener("click", countUp);
    if (count >= 10) {
      counter(0);
    }

    if (num) {
      console.log("this is ture");
    } else {
      console.log("this is false");
    }

    return () => {
      document.getElementById("counter").removeEventListener("click", countUp);
    };
  }, [limit]);

  return (
    <>
      <button id="counter">いいね数; {count}</button>
      <button onClick={() => release(!limit)}>もっといいねしたい！</button>
    </>
  );
};

export default Test;
