const state = {
  object: {
    gh: 59,
    zod: 10,
  },
}

const initialState = state

const object = {
  gh: 59,
  zod: 10,
}

const ban = { ...initialState, object: { ...object } }

console.log(ban)

