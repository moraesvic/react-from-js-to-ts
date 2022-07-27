# React: from JS to Typescript

Starting with an existing project created by CRA, add the following modules and init `tsconfig.json` file:

```
npx create-react-app from-js-to-ts
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npx tsc --init
```

Please note that your `package.json` file will still have a lot of dependencies that were included by the ejection, as well as Jest and Babel settings. You can see a full `diff` of a fresh CRA install and an ejected CRA install in `package_json_diff.txt`, at the root of the project.

You might need to append the following lines to your tsconfig.json file:

```
{
  "compilerOptions": {
	(...)
	"jsx": "react-jsx"
},
  "include": [
	"./src/**/*.tsx",
	"./src/**/*.ts",
  ]
}
```

Now add the file `typings.d.ts` to your `./src` directory:

```
declare module "*.module.css";
```

Now you should be good to go! You can create your TS and TSX files alongside your JS and JSX files.

Later, you might want to migrate your code to Typescript, and to increase the strictness of tsconfig.json, adding rules such as:
- `"noImplicitAny": true`
- `"strictNullChecks": true`
- `"noImplicitThis": true`
- `"alwaysStrict": true`

**Source:** [How to migrate a React app to Typescript?](https://archive.is/qIAdo)
