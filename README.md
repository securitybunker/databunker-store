# databunker-store
Databunker storage class for nodejs


Prerequisites
-------------
You need to have **databunker** service up and running.

You can use the following command to start Databunker in development mode:

```docker run -p 3000:3000 -d --rm --name dbunker securitybunker/databunker demo```

For production use, follow the Databunker installation guide: https://databunker.org/doc/install/


Installation
------------

```npm install --save @databunker/store```


# Examples

## Init access

```
const DatabunkerStore = require('@databunker/store');
const databunker = new DatabunkerStore({
  url: process.env.DATABUNKER_URL,
  token: process.env.DATABUNKER_TOKEN
});
```

## Create user record

```
const newUser = {
  issuer: user.issuer,
  email: userMetadata.email,
  lastLoginAt: user.claim.iat
};
const result = await databunker.users.create(newUser);
```

## Get user record

```
const user = await databunker.users.get("email", "user@gmail.com");
const user2 = await databunker.users.get("token", "a3542566-4491-11eb-8269-2e04ce962524");
```

## Update user record
```
cont change = { lastLoginAt: user.claim.iat };
await databunker.users.set("token", "a3542566-4491-11eb-8269-2e04ce962524", change);
```

## Extract all agreements to displayed on the signup page
```
async function loadSignupAgreements() {
  const allAgreements = await databunker.agreements.rawlist();
  let agreements = [];
  if (allAgreements.status == "ok") {
    for (const idx in allAgreements.rows) {
      const r = allAgreements.rows[idx];
      if (r.module == 'signup-page' && r.basistype == "consent") {
        agreements.push(r);
      }
    }
  }
  return agreements;
}
```

## Save data in user app collection
```
const appData = {country: "EU"}
await databunker.collection("data").set("token", "a3542566-4491-11eb-8269-2e04ce962524", data);
```

## Read user data from app collection
```
const data = await databunker.collection("data").get("token", req.user.token);
```

## Accept an agreement
```
await databunker.agreements.accept("email", req.body.email, "privacy-accept", {});
```

## Withdraw an agreement
```
await databunker.agreements.withdraw("email", req.body.email, "privacy-accept");
```

