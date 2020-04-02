/*
export function someMutation (state) {
}
*/
export const SetCountries = (state,data) => {
  state.countries=data;
}

export const SetStates = (state,data) => {
  state.states=data;
}

export const SetDistricts = (state,data) => {
  state.districts=data;
}

export const SetCities = (state,data) => {
  state.cities=data;
}

export const SetSubDistricts = (state,data) => {
  state.subdistricts=data;
}

export const SetSuppliers = (state,data) => {
  state.suppliers=data;
}

export const ClearStates = (state) => {
  state.states=[];
}

export const ClearDistricts = (state) => {
  state.districts=[];
}

export const ClearCities = (state) => {
  state.cities=[];
}

export const ClearSubDistricts = (state) => {
  state.subdistricts=[];
}

export const ClearSuppliers = (state) => {
  state.cities=[];
}
