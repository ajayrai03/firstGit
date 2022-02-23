let car={
    color: "Blue",
    model:"bmw",
    "manufacture date": "23/02/2022",
    available_models:["jaguar", "rangerover", "tesla"]
    };
    console.log(car);
    console.log(car.available_models[0]);
let elon_musk={
space_company:"spacex",
car_comapany:"tesla",
solar_panel:"solarroof",
wives:{
    first_wife:"talulah riley",
    second_wife:"justine musk",
    },
    ambitious:"to settle in mars",
    sayhi: function(){
        console.log(`hello elon musk is famous for his space and car company --> ${this.space_company} ${this.car_comapany}`);
    }
};
console.log(elon_musk);
console.log(elon_musk.car_comapany);
console.log(elon_musk.wives["second_wife"]);
elon_musk.sayhi();