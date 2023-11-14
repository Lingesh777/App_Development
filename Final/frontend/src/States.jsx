import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
const Context=createContext();
export const States = ({children}) => {
const [searchvalue,setSearchvalue]=useState('');
  return (
   <Context.Provider value={{searchvalue,setSearchvalue}}>
    {children}
   </Context.Provider>
  );
};
export const useStates=()=>useContext(Context);
