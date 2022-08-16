let options = [
    {
        "optDescription": "Базовая машина",
        "optType": "basic",
        "optNo": "1.524-541.2",
        "optVal": 0,
        "optName": "Базовая машина HDS Trailer (350/500 бар)",
        "optComment": null,
        "optPrice": 7900
    },
    {
        "optDescription": "Насос",
        "optType": "pump",
        "optNo": "DE_20130307",
        "optVal": 0,
        "optName": "350 бар, 21,7 л/мин",
        "optComment": null,
        "optPrice": 2850        
    },
    {
        "optDescription": "Насос",
        "optType": "pump",
        "optNo": "DE_20130297",
        "optVal": 1,
        "optName": "500 бар, 15 л/мин",
        "optComment": null,
        "optPrice": 3500            
    },
    {
        "optDescription": "Насос",
        "optType": "pump",
        "optNo": "DE_XXXXX",
        "optVal": 2,
        "optName": "2500 бар, 15 л/мин",
        "optComment": null,
        "optPrice": 25000            
    },
    {
        "optDescription": "Сбросной клапан",
        "optType": "relief",
        "optNo": "N/A",
        "optVal": 0,
        "optName": "Без сбросного клапана",
        "optComment": null,
        "optPrice": 0 
    },       
    {
        "optDescription": "Сбросной клапан",
        "optType": "relief",
        "optNo": "DE_20130497",
        "optVal": 1,
        "optName": "Со сбросным клапаном",
        "optComment": "Рекомендуется к заказу",
        "optPrice": 1190 
    },
    {
        "optDescription": "Исполнение",
        "optType": "mobility",
        "optNo": "DE_20130397",
        "optVal": 0,
        "optName": "Skid",
        "optComment": "На базовой раме без кожуха, бака для воды и шасси. Не сертифицирована!",
        "optPrice": 1180,
        "optImage": "src/img/hdsDeTrSkid.png"
    },       
    {
        "optDescription": "Исполнение",
        "optType": "mobility",
        "optNo": "DE_20130407",
        "optVal": 1,
        "optName": "Cab",
        "optComment": "",
        "optPrice": 3400,
        "optImage": "src/img/hdsDeTrCab.png"
    },
    {
        "optDescription": "Исполнение",
        "optType": "mobility",
        "optNo": "DE_20130417",
        "optVal": 2,
        "optName": "Trailer",
        "optComment": "",
        "optPrice": 4270,
        "optImage": "src/img/hdsDeTrTrailer.png"
    },               
    {
        "optDescription": "Амортизаторы",
        "optType": "absorbers",
        "optNo": "N/A",
        "optVal": 0,
        "optName": "Без амортизаторов",
        "optComment": "",
        "optPrice": 0,
        "optRequired": "mobility=2"
    },
    {
        "optDescription": "Амортизаторы",
        "optType": "absorbers",
        "optNo": "DE_20130167",
        "optVal": 1,
        "optName": "С амортизаторами",
        "optComment": "",
        "optPrice": 172,
        "optRequired": "mobility=2"
    },
    {
        "optDescription": "Шланговые барабаны",
        "optType": "hoseReels",
        "optNo": "DE_20130427",
        "optVal": 0,
        "optName": "Без шланговых барабанов",
        "optComment": "",
        "optPrice": 353
    },
    {
        "optDescription": "Шланговые барабаны",
        "optType": "hoseReels",
        "optNo": "DE_20130017 + DE_20130027",
        "optVal": 1,
        "optName": "С шланговыми барабанами (350/500 бар)",
        "optComment": "С шланговыми барабанами",
        "optPrice": 960
    },
    {
        "optDescription": "Комплект аксессуаров",
        "optType": "accessories",
        "optNo": "N/A",
        "optVal": 0,
        "optName": "Без аксессуаров",
        "optComment": "",
        "optPrice": 0
    },
    {
        "optDescription": "Комплект аксессуаров",
        "optType": "accessories",
        "optNo": "DE_20130317",
        "optVal": 1,
        "optName": "Комплект аксессуаров HDS 13/35",
        "optComment": "",
        "optPrice": 333,
        "optRequired": "pump=0"
    },
    {
        "optDescription": "Комплект аксессуаров",
        "optType": "accessories",
        "optNo": "DE_20130217",
        "optVal": 2,
        "optName": "Комплект аксессуаров HDS 9/50",
        "optComment": "",
        "optPrice": 298,
        "optRequired": "pump=1"
    }
]

let optTypes = [];
let counter = 0;
options.forEach((item, index, arr) => {
    if(index === 0){
        optTypes[0] = [item];
    }
    if(index > 0){
        if(item.optType !== arr[index-1].optType){
            counter++;
        }
        if(!optTypes[counter]){
            optTypes[counter] = [item];
        } else {
            optTypes[counter] = [...optTypes[counter], item];
        }
    }
});

console.log(optTypes);
