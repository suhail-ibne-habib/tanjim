
const data = [
    {
        title: 'Dagopbrengst',
        speed: '107,73 kWh'
    },
    {
        title: 'Maandopbrengst',
        speed: '1.972,05 kWh'
    },
    {
        title: 'Jaaropbrengst',
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
        title: "Stookolie",
        img: '/assets/imgs/stookoli.jpeg'
    },
    {
        q: '159.321 m^3',
        title: 'Aardgas',
        img: '/assets/imgs/gas.jpeg'
    },
    {
        q: '113 t',
        title: 'Steenkool',
        img: '/assets/imgs/chula.jpeg'
    }

]

export function getProduct2(){
    return product2;
}

export function getProduct1(){
    return product1;
}

export default function getData(){
    return data;
}