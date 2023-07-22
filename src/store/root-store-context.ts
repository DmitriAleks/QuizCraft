import {createContext, useContext} from "react";
import RootStore from "./root-store";


export const RootStoreContext = createContext<RootStore | null>(null)

export const useStores = () => {
    const context = useContext(RootStoreContext)

    if(context === null ) {
        throw new Error('всё пизда сломался контекст ')
    }

    return context
}