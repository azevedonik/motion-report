# Type Repo

## Description

This repository is responsible for storing and defining common object values and types.

Sometimes we want to have a User object with different properties in client and server but they will always have common properties.

Example: 

User.ts (Common)

```typescript
export interface User {
    id: string;
    name: string;
    email: string;
}
```

When we store a user in DB, the user object might have a password object which is only usefull for server side application. This way, we should extend the User interface outside the Types project since we are not using this interface anywhere else.

```typescript 
import { User } from '@nla-tech/motion-report.types';

export interface DbUser extends User {
    password?: string;
}
```


Sometimes in client we want to have a JWT stored in the user object, so we would create a ClientUser which will extend the Default user object and will be used only on the client side.

```typescript
import { User } from '@nla-tech/motion-report.types';

export interface ClientUser extends User {
    jwt?: string;
    function getToken: string;
    function setToken(jwt: string): void;
    // ... Etc
}
````

## Using the Type package

For using a private package, we should add the package to the dependencies of package.json
You should add to dependencies inside the package which will consume it:

```json
  "dependencies": {
    "@nla-tech/motion-report.types": "^1.0.0",
    // ... Other dependencies
  },
```


## Adding a new Type

In order to add a new type, we should create the type with only the properties which will be shared across all the systems which will use it.

After adding it, we should rebuild the package

```shell
yarn build
```