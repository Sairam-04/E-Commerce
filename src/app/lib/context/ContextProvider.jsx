"use client"

import { useState } from "react";
import SearchContext from "./SearchContext"

const ContextProvider = ({children}) =>{
    const [search, setSearch] = useState("");

    return(
        <SearchContext.Provider value={{ searchText: search, setSearch }} >
            {children}
        </SearchContext.Provider>
    )
}

export default ContextProvider;