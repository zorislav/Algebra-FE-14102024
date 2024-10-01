import { ApolloClient, ApolloProvider, gql, useQuery, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function ExchangeRates() {

  const GET_RATES = gql`
    {
      rates(currency: "USD"){
        currency
        rate
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RATES);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error!</p>;

  return data.rates.map(({currency, rate}) => <p key={currency}>{currency} : {rate}</p>);   
    

}


function App() {
  return (
    <ApolloProvider client={client}>
      <h1>GraphQL</h1>
      <h3>Upit serveru:</h3>
      <h3>https://api.coinbase.com/v2/exchange-rates?currency=USD</h3>
      <ExchangeRates />
    </ApolloProvider>
  );
}

export default App;
