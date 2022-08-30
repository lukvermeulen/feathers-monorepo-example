// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { createClient } from "api";
import rest from "@feathersjs/rest-client";
import authentication from "@feathersjs/authentication-client";

const apiUrl = "http://localhost:3030";

const fetchConnection =
    typeof window !== "undefined" ? window.fetch.bind(window) : fetch;

const restClient = rest(apiUrl);

const client = createClient(restClient.fetch(fetchConnection));
client.configure(authentication());

export default client;
