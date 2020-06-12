export default function payloadCreator(payloadValueArray, property) {
  const payloadObj = {};
  for (let i = 0; i < payloadValueArray.length; i++) {
    const propValue = payloadValueArray[i][property];
    payloadObj[[propValue]] = payloadValueArray[i].value;
  }
  return payloadObj;
}
