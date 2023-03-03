module.exports.getValue = function (m, y) {
  const model = [...m];

  let carvalue = 0;
  model.map((car) => {
    carvalue += car.toLowerCase().charCodeAt(0) - 97 + 1;
  });

  return carvalue * 100 + y;
};
