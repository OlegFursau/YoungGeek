export const parseRequestURL = () => {
    const url = location.hash.slice(2),
        request = {};

    [request.resourse, request.id, request.description, request.img] = url.split('/');

    return request
}
export const genereteID = () => {
    return Math.random().toString(36).substr(2, 10)
}
export const returnArrMath = () => {
    const arr = [` <img src="./assets/images/fruits/1 orange.jpg" alt="">`,
        `<img src="./assets/images/fruits/2.jpg" alt="">`,
        ` <img src="./assets/images/fruits/3.jpg" alt="">`,
        ` <img src="./assets/images/fruits/4 .jpg" alt="">`,
        ` <img src="./assets/images/fruits/5 .jpg" alt="">`,
        ` <img src="./assets/images/fruits/6 .jpg" alt="">`,
        ` <img src="./assets/images/fruits/7.jpg" alt="">`,
        `<img src="./assets/images/fruits/8.jpg" alt="">`,
        `<img src="./assets/images/fruits/9.jpg" alt="">`,
        `<img src="./assets/images/fruits/10 (1).jpg" alt="">`
    ];
    return arr;


}
export const returnArrEnglish = () => {
    const arr = [{
            word: 'water',
            translater: 'вода',
            picture: ' <img src="./assets/images/englishPictures/water.jpg" alt="">',
        },
        {
            word: 'tree',
            translater: 'дерево',
            picture: ' <img src="./assets/images/englishPictures/tree.png" alt="">',
        }, {
            word: 'sea',
            translater: 'море',
            picture: '<img src="./assets/images/englishPictures/sea.jpg" alt="">',
        }, {
            word: 'rock',
            translater: 'скала',
            picture: '<img src="./assets/images/englishPictures/rock.jpg" alt="">',
        }, {
            word: 'plant',
            translater: 'растение',
            picture: '<img src="./assets/images/englishPictures/plant.jpg" alt="">',
        }, {
            word: 'flower',
            translater: 'цветок',
            picture: '<img src="./assets/images/englishPictures/flower.jpg" alt="">',
        }, {
            word: 'forest',
            translater: 'лес',
            picture: '<img src="./assets/images/englishPictures/forest.jpg" alt="">',
        }, {
            word: 'person',
            translater: 'человек',
            picture: '<img src="./assets/images/englishPictures/person.jpg" alt="">',
        },
        {
            word: 'morning',
            translater: 'утро',
            picture: '<img src="./assets/images/englishPictures/morning.jpg" alt="">',
        },
        {
            word: 'evening',
            translater: 'вечер',
            picture: '<img src="./assets/images/englishPictures/evning.jpg" alt="">',
        },
        {
            word: 'elefant',
            translater: 'слон',
            picture: ' <img src="./assets/images/englishPictures/elephant.jpg" alt="">',
        },
        {
            word: 'planet',
            translater: 'планета',
            picture: ' <img src="./assets/images/englishPictures/planet.jpg" alt="">',
        },
        {
            word: 'house',
            translater: 'дом',
            picture: '<img src="./assets/images/englishPictures/house.jpg" alt="">',
        },
        {
            word: 'fire',
            translater: 'огонь',
            picture: '<img src="./assets/images/englishPictures/fire.jpg" alt="">',
        },
        {
            word: 'animal',
            translater: 'животное',
            picture: ' <img src="./assets/images/englishPictures/animals.jpg" alt="">',
        },
        {
            word: 'bird',
            translater: 'птица',
            picture: '<img src="./assets/images/englishPictures/bird.jpg" alt="">',
        },
        {
            word: 'fish',
            translater: 'рыба',
            picture: '<img src="./assets/images/englishPictures/fish.jpg" alt="">',
        },

        {
            word: 'girl',
            translater: 'девочка',
            picture: '<img src="./assets/images/englishPictures/girl.jpg" alt="">',
        },
        {
            word: 'people',
            translater: 'люди',
            picture: ' <img src="./assets/images/englishPictures/people.jpg" alt="">',
        },
        {
            word: 'phone',
            translater: 'телефон',
            picture: '<img src="./assets/images/englishPictures/phone.jpg" alt="">',
        },

        {
            word: 'ticket',
            translater: 'билет',
            picture: '<img src="./assets/images/englishPictures/ticket.jpg" alt="">',
        },
        {
            word: 'map',
            translater: 'карта',
            picture: '<img src="./assets/images/englishPictures/map.jpg" alt="">',
        },

        {
            word: 'wallet',
            translater: 'кошелек',
            picture: '<img src="./assets/images/englishPictures/wallet.jpg" alt="">',
        },

        {
            word: 'bag',
            translater: 'сумка',
            picture: '<img src="./assets/images/englishPictures/bag.jpg" alt="">',
        },
        {
            word: 'hospital',
            translater: 'больница',
            picture: '<img src="./assets/images/englishPictures/hospital-1.jpg" alt="">',
        },
        {
            word: 'question',
            translater: 'вопрос',
            picture: '<img src="./assets/images/englishPictures/Question1.jpg" alt="">',
        },

        {
            word: 'dog',
            translater: 'собака',
            picture: '<img src="./assets/images/englishPictures/dog.jpg" alt="">',
        },

    ]
    return arr
}