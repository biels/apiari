import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { persistCache } from 'apollo-cache-persist';


let cache = new InMemoryCache({});

let promise = persistCache({
    cache,
    storage: window.localStorage,
});
export function getSavedConnection(){
    let savedConnectionString = window.localStorage.getItem('connection');
    if(savedConnectionString == null){
        return {
            host: 'localhost',
            environment: 'default'
        }
    }
    return JSON.parse(savedConnectionString);
}

let savedConnection = getSavedConnection();
let host = savedConnection.host || process.env.SERVER_HOST || window.location.hostname;
let httpLink = new HttpLink({
    uri: `http://${host}:${process.env.SERVER_PORT}`,
    credentials: 'same-origin',
});
export const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({graphQLErrors, networkError}) => {
            if (graphQLErrors)
                graphQLErrors.map(({message, locations, path}) =>
                     console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        httpLink
    ]),
    cache: cache
});

