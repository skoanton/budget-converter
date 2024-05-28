import { fetchDocument } from "@/lib/fetchDocument";
import { Account } from "@/types/accounts";


import { DocumentReference } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetAccountRef = (accountRef: DocumentReference<Account> | undefined) => {


    const [account, setAccount] = useState<Account | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchAccount = async () => {
            setLoading(true);
            const {data,error} = await fetchDocument<Account>(accountRef);
            setAccount(data);
            setError(error);
            setLoading(false);

        }

        fetchAccount();

    },[accountRef]);

    return {account,loading,error};
}