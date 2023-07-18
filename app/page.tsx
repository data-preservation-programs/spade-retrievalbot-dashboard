import {ParseParams} from "@/components/types";
import Dashboard from "@/components/Dashboard";
import Overview from "@/components/Overview";
import {Typography} from "@mui/material";

export default async function Page({searchParams}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const parsedParams = ParseParams(searchParams)
    return (
        <main>
            <Dashboard
                params={parsedParams}
            >
                <Typography variant='h5'>
                    Overview
                </Typography>
                <Overview params={parsedParams}/>
            </Dashboard>
        </main>
    )
}
