import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { }
})


export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");

    const handleOpenBuyWWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleClosedBuyWindow = () => {
        setIsBuyWindowOpen(false)
        setSelectedStockUID("")
    };

    return (
        <GeneralContext.Provider
        value={{
            openBuyWindow:handleOpenBuyWWindow,
            closeBuyWindow:handleClosedBuyWindow,
        }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;