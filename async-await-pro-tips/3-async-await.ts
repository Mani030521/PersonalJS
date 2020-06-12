// Basic
const getFruit = async name => {
  const fruits = {
    pineapple: 'Pine',
    peach: 'Peach',
    strawberry: 'Berry'
  };

  return fruits[name];
};

getFruit('peach').then(console.log);

// Async + Await

const makeSmoothie = async () => {
  const a = await getFruit('pineapple');
  const b = await getFruit('strawberry');

  return [a, b];
};

makeSmoothie().then(data => {
  console.log(data)
})

const makeSmoothie2 = () => {
  let a = [];
  return getFruit('pineapple')
    .then(v => {
      a.push(v)
      return getFruit('strawberry');
    })
    .then(v => {
      a.push(v);
      return a;
    });
};

makeSmoothie2().then(data => {
  console.log(data)
})
