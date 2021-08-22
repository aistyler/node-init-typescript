/* eslint-disable no-console */

const axios = require("axios").default;
const fs = require("fs");
const path = require("path");

const _fetch = async ({ url, method, data, outputPath }) => {
  console.log(">>> Trying to fetch graphql schema to", url);

  const res = await axios({
    url,
    method,
    data,
  });

  const { data: schemaData } = res.data;

  console.log(">>> Writing data to: ", outputPath);
  fs.writeFileSync(outputPath, JSON.stringify(schemaData, null, 2));
  console.log("DONE.");
};

const target = process.argv[2] || "all"; // gatsby | strapi
const method = "post";
const data = {
  query: `
    query IntrospectionQuery {
      __schema {
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          description
          locations
          args {
            ...InputValue
          }
        }
      }
    }
    
    fragment FullType on __Type {
      kind
      name
      description
      fields(includeDeprecated: true) {
        name
        description
        args {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      description
      type { ...TypeRef }
      defaultValue
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
};

(async () => {
  // gatsby
  let outputPath = path.join(__dirname, "..", "..", "src", "__generated__", "gatsby-schema.json");
  let url = "http://localhost:8000/___graphql";

  if (target === "all" || target === "gatsby") {
    try {
      await _fetch({ url, method, data, outputPath });
    } catch (e) {
      console.error("!!!", e.message);
      process.exit(1);
    }
  }

  // strapi
  outputPath = path.join(__dirname, "..", "..", "src", "__generated__", "strapi-schema.json");
  url = "http://localhost:1337/ccms/___gql";

  if (target === "all" || target === "strapi") {
    try {
      await _fetch({ url, method, data, outputPath });
    } catch (e) {
      console.error("!!!", e.message);
      process.exit(1);
    }
  }
})();
