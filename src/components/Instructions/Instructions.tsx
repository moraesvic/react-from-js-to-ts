interface WhyProps {
  link: string;
}

const Why = (props: WhyProps) => (
  <sup>
    &nbsp;<a href={props.link}>why?</a>
  </sup>
);

export const Instructions = () => {
  const stringRaw = String.raw`
npx create-react-app from-js-to-ts
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npx tsc --init
  `;
  const tsConfig = String.raw`
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
  `;
  const typings = String.raw`
declare module "*.module.css";
  `;
  return (
    <div>
      <p>
        Starting with an existing project created by{" "}
        <a href="https://create-react-app.dev/">CRA</a>, add the following
        modules and init <code>tsconfig.json</code> file
        <Why link="https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided" />
      </p>
      {/* prettier-ignore */}
      <pre>
		{stringRaw}
	  </pre>
      <p>
        You might need to append the following lines to your{" "}
        <code>tsconfig.json</code> file:
      </p>
      {/* prettier-ignore */}
      <pre>
		{tsConfig}
	  </pre>
      <p>
        Now add the file <code>typings.d.ts</code> to your <code>./src</code>{" "}
        directory
        <Why link="https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module" />
      </p>
      {/* prettier-ignore */}
      <pre>
		{typings}
	  </pre>
      <p>
        Now you should be good to go! You can create your TS and TSX files
        alongside your JS and JSX files.
      </p>
      <p>
        Later, you might want to migrate your code to Typescript, and to
        increase the strictness of <code>tsconfig.json</code>, adding rules such
        as:
        <ul>
          <li>
            <code>"noImplicitAny": true</code>
          </li>
          <li>
            <code>"strictNullChecks": true</code>
          </li>
          <li>
            <code>"noImplicitThis": true</code>
          </li>
          <li>
            <code>"alwaysStrict": true</code>
          </li>
        </ul>
      </p>
      <strong>Source: </strong>
      <a href="https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/">
        How to migrate a React app to Typescript?
      </a>
    </div>
  );
};
