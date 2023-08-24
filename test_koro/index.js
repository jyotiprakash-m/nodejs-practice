const endpoint =
  "https://hasura-6164.settlemint.com/bpaas-19faDE45dFE2ea995cCa257c764c669C580b2980/v1/graphql";

const query = `
  query {
    assets(order_by: { assetName: asc }) {
        assetName
        assetValue
        assetType
        availableSupply
        tokenized
        couponRate
        maturity
        currency
        assetId
        sellprice
        buyPrice
        created_at
        document_cid
        burned
      }
  }
`;

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": "e1e8a46b35d03d5a5b88",
  },
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((data) => {
    // Access the returned data

    console.log(data.data.assets);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
