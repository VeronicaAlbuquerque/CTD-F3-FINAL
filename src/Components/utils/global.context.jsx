import { createContext, useContext, useEffect, useState, useReducer, useMemo } from "react";
import axios from "axios";
import { reducer } from "./reducer";

export const initialState = {theme: " ", data: []}
export const ContextGlobal = createContext();

const favsReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return [...state, action.payload]
  }
}

export const ContextProvider = ({ children }) => {

const [data, setData] = useState([])
const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
  
  }, [])

const handleTheme = () => state.theme == ""? dispatch({type: "DARK_MODE"}) : dispatch({type: "LIGHT_MODE"}) ;

const [state, dispatch] = useReducer(reducer, initialState)



const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialState.data, initFav)

function initFav(initialValue) {
  return localStorage.getItem("favs")
   ?JSON.parse(localStorage.getItem("favs"))
   :initialValue;
}

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(stateFavs))
}, [stateFavs])

const providerValue = useMemo(()=>({
  data,
  setData,
  stateFavs,
  dispatchFavs,
  state,
  handleTheme

}), [ setData, stateFavs, dispatchFavs, state, handleTheme]
)



  return (
    <ContextGlobal.Provider value={{providerValue}}>
      {children}
    </ContextGlobal.Provider>
  );

};

export default ContextProvider;

export const useEstadosGlobales = () => {
  return useContext(ContextGlobal)
}