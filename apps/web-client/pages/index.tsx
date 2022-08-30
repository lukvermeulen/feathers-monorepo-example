import { Button } from "components";
import { useEffect, useState } from "react";
import client from "../feathers";

export function Index() {
    const [testResponse, setTestResponse] = useState<string>("");

    useEffect(() => {
        const res = client.service("users").find();
        res.catch((error) => {
            console.log(error);
            // setTestResponse(error);
        });
    }, []);

    return (
        <>
            <p>{testResponse}</p>
            <Button />
        </>
    );
}

export default Index;
