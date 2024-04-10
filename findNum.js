const arr = [7, 9, 10, 11, 12];
const arrTwo = [5, 0, 1, 3, 2];
const arrThree = [5, 0, 1, 3, 2, -1, 7, 9];

const findNumber = arr => {
  if (arr.length === 0) return 1; // Если массив пустой
  const sortedArr = arr.sort((a, b) => a - b); // Сортировка массива по возрастанию
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
      return sortedArr[i] + 1; // Возвращаем первое число, которого не хватает в массиве
    }
  }
};

console.log(findNumber(arr));
// console.log(findNumber(arrTwo));
// console.log(findNumber(arrThree));
