# databunker-store
Databunker storage class for nodejs

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


