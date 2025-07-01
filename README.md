# Type issue with https.Agent

Since `@types/node` v22.15.34 we get the following error when trying to compile our library:

```bash
redacted/path/file.js(L,C): error TS2339: Property 'session' does not exist on type 'NetConnectOpts'.
  Property 'session' does not exist on type 'TcpNetConnectOpts'.
redacted/path/file.js(L,C): error TS2339: Property 'servername' does not exist on type 'NetConnectOpts'.
  Property 'servername' does not exist on type 'TcpNetConnectOpts'.
```

This issue can be reproduced using this repo as follows:

1. Install dependencies

```bash
npm i
```

2. Compile

```bash
$ npx tsc index.ts

index.ts:9:13 - error TS2339: Property 'servername' does not exist on type 'NetConnectOpts'.
  Property 'servername' does not exist on type 'TcpNetConnectOpts'.

9     options.servername = 'hello';
              ~~~~~~~~~~

index.ts:10:13 - error TS2339: Property 'session' does not exist on type 'NetConnectOpts'.
  Property 'session' does not exist on type 'TcpNetConnectOpts'.

10     options.session = Buffer.from('hello');
               ~~~~~~~


Found 2 errors in the same file, starting at: index.ts:9
```