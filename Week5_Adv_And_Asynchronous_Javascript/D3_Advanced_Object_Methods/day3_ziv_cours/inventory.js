/**
 *
 */

const inventory = [
  //   { id: 0, car_make: "Honda", car_model: "Civic", car_year: 1998 },
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarMake = (carInventoryArr, car_make) => {
  const indx = carInventoryArr.findIndex((item) => item.car_make === car_make);
  //   console.log(car);
  return `This is a ${carInventoryArr[indx].car_make} ${carInventoryArr[indx].car_model} from ${carInventoryArr[indx].car_year}`;
};

// console.log(getCarMake(inventory, "Honda"));

const sortCarInventoryByYear = (arr) => {
  return arr.sort((a, b) => {
    // console.log(a,b);
    // return a.car_year - b.car_year;
    const nameA = a.car_make.toLowerCase();
    const nameB = b.car_make.toLowerCase();

    if(nameA < nameB) {
        return -1
    }
    if(nameA > nameB) {
        return 1
    }
    return 0;
  });
};


console.log(sortCarInventoryByYear(inventory));
