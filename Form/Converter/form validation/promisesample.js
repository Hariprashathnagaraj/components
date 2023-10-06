const reachedA = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) setTimeout(resolve, 3000, "hari reached");
  else reject("Hari on the go");
});

const reachedB = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) setTimeout(resolve, 2000, "LUCIFER reached");
  else reject("LUCIFER on the go");
});

const reachedC = new Promise((resolve, reject) => {
  const reached = false;
  if (reached) setTimeout(resolve, 1000, "HULK reached");
  else reject("HULK on the go");
});

Promise.allSettled([reachedA, reachedB, reachedC])

  .then((message) => console.log(message))
  .catch((message) => console.log(message));
