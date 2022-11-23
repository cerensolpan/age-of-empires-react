import ageOfEmpires from "./age-of-empires-units.json";

export const fetchUnitList = async (filters) => {
  try {
    let response = ageOfEmpires.units;
    Object.keys(filters).forEach((key) => {
      // Age filter
      if (filters[key].value !== "All" && key === "age") {
        response = response.filter((unit) => {
          return unit.age === filters.age.value;
        });
      }

      //Cost Filter
      if (filters[key].isActive && key !== "age")
        // eslint-disable-next-line
        response = response.filter((unit) => {
          if (unit.cost && unit.cost[key]) {
            return unit.cost[key] <= filters[key].value;
          }
        });
    });
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchUnit = async (id) => {
  try {
    let response = ageOfEmpires.units.find((unit) => unit.id === id);
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
