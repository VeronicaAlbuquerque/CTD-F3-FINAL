export const reducer = (state, action) => {

  switch(action.type) {
    case "LIGHT_MODE": 
    return {theme: action.theme = "" };
    case "DARK_MODE":
    return {theme: action.theme = "dark"}
    default: throw new Error()
    }
}