import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x362f19481888825A1d1cABA8C10e47d3F9b57351');
  const address = useAddress()
  const connect = useMetamask()
  const publishCampaign = async (form) => {
    try{
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
      form.image
    ])
    console.log('contract data',data)
  }
  catch(error){
    console.log('contrat call failure',error)
  }
}
return(
  <StateContext.Provider value={{
    address,
    contract,
    createCampaign:publishCampaign,
  }}>
    {children}
  </StateContext.Provider>
)
}
