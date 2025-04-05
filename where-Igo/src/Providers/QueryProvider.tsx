import {PropsWithChildren, ReactNode,} from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type  Props = PropsWithChildren;

const queryClient = new  QueryClient()


function QueryProvider({children} : Props) : ReactNode{

    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider >
    )
}

export default QueryProvider;