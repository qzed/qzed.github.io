'use client'

import { createContext, useState } from "react";

const SidebarContext = createContext({ isVisible: false, setVisible: (state: boolean) => { } });

function SidebarProvider({ children }: { children: any }) {
    const [isVisible, setVisible] = useState(false);

    return (
        <SidebarContext.Provider value={{ isVisible, setVisible }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarContext, SidebarProvider };
