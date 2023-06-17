import {createContext, useContext} from "react";
import RootStore from "./root-store";


export const rootStore = createContext<RootStore | null>(null)

export const useStores = () => {
    const context = useContext(rootStore)

    if(context === null ) {
        throw new Error('e,kfy')
    }

    return context
}