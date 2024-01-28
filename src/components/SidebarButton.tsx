'use client'

import icons from "@/components/icons";
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

export default function SidebarButton() {
    const { isVisible, setVisible } = useContext(SidebarContext)

    const Icon = isVisible ? icons.Close : icons.Menu;

    return (
        <button onClick={() => setVisible(!isVisible)}>
            <Icon className='h-6 hover:text-sky-700 dark:hover:text-sky-500' />
        </button>
    )
}
