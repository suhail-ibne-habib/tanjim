
const data = [
    {
        title: 'Daily yield',
        speed: '107,73 kWh'
    },
    {
        title: 'Maandopbrengst',
        speed: '1.972,05 kWh'
    },
    {
        title: 'Annual yield',
        speed: '28,37 MWh'
    }
]

const frData = [
    {
        title: 'Rendement quotidien',
        speed: '107,73 kWh'
    },
    {
        title: 'Maandopbrengst',
        speed: '1.972,05 kWh'
    },
    {
        title: 'Rendement annuel',
        speed: '28,37 MWh'
    }
]

const product1 = [
    {
        price: 8.618,
        img: '/assets/imgs/fridge.png'
    },
    {
        price: 5.387,
        img: '/assets/imgs/washingMachine.png'
    },
    {
        price: 2.122,
        img: '/assets/imgs/table-fan.png'
    },
    {
        price: 120,
        img: '/assets/imgs/stove.png'
    }
]

const product2 = [

    {
        q: '109.879 l',
        title: "Fuel oil",
        img: '/assets/imgs/stookoli.jpeg'
    },
    {
        q: '159.321 m^3',
        title: 'Natural gas',
        img: '/assets/imgs/gas.jpeg'
    },
    {
        q: '113 t',
        title: 'Coal',
        img: '/assets/imgs/chula.jpeg'
    }

]

export function getProduct2(){
    return product2;
}

export function getProduct1(){
    return product1;
}

export function getFrData(){
    return frData;
}

export default function getData(){
    return data;
}