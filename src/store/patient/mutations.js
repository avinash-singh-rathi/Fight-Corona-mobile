/*
export function someMutation (state) {
}
*/
export const SetSymptoms = (state,data) => {
  state.symptoms=data;
}

export const ClearSymptoms = (state) => {
  state.symptoms=[];
}

export const SetLostPatients = (state,data) => {
  state.lostpatients=data;
}

export const ClearLostPatients = (state) => {
  state.lostpatients=[];
}
