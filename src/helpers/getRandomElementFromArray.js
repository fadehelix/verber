const getRandomElementFromArray = (array) => {
  const randomIndex = Math.ceil(Math.random() * array.length)
  return array[randomIndex];
}

export default getRandomElementFromArray;