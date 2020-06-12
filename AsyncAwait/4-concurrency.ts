const getFruit = async name => {
    const fruits = {
      pineapple: 'Pine',
      peach: 'Peach',
      strawberry: 'Berry'
    };
  
    return fruits[name];
  };

const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    return Promise.all([a, b])
}


makeSmoothieFaster().then(data => {
    console.log(data)
})