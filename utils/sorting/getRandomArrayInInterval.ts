import getRandomNumberInInterval from "./getRandomNumberInInterval";

const getRandomArrayInInterval = (min: number, max: number, numberOfElements: number) =>
    Array.from({ length: numberOfElements }, () =>
        getRandomNumberInInterval(min, max)
    )

export default getRandomArrayInInterval