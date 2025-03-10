import { useSession} from "@clerk/clerk-react";
import { useState } from "react";

const useFetch =(cb,Options={})=>{

    const[data,setData]=useState(undefined);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);


    const{session}=useSession();

    const fn= async(...args)=>{
        setLoading(true);
        setError(null);

        try {
            const supabaseAccessToken = await session.getToken({
                template:"supabase",
              });
         const response =await cb(supabaseAccessToken,Options,...args);     
         setData(response);
         setError(null);

            
        } catch (error) {
            setError(error);
            
        }finally{
            setLoading (false);
        }

    };
    return {fn,data,loading,error};

};

export default useFetch;