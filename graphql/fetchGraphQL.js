export async function fetchGraphQL({ query, variables, preview }) {
  const response = await fetch(
    process.env.GRAPHQL_API_URL + (preview ? "/preview" : ""),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch GraphQL API");
  }

  return json.data;
}
