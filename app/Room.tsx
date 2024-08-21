"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
    return (
        <LiveblocksProvider publicApiKey={"pk_prod_v8G-ylwd2cWeeRMGWIN1kTI3wQtnjEsYIVbQ0j13TkiCiJFAR1vFZdOcQGkXIr0x"}>
            <RoomProvider id="my-room">
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}