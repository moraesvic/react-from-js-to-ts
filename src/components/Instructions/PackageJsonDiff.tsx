import styles from "./PackageJsonDiff.module.css";

/*
 * The return value of the following function was obtained by feeding
 * the output of "package_json_diff.txt" to the Perl script "format_diff.pl",
 * both available at the root of the project.
 */
export const PackageJsonDiff = () => (
  <pre className={styles.diff}>
    <p className={styles.header}>
      $ git diff package.json ../ejected_package.json
    </p>
    <p className={styles.header}>
      diff --git a/package.json b/../ejected_package.json
    </p>
    <p className={styles.header}>index 0a3e6fb..9a928b1 100644</p>
    <p className={styles.header}>--- a/package.json</p>
    <p className={styles.header}>+++ b/../ejected_package.json</p>
    <p className={styles.lineMarkup}>@@ -3,19 +3,64 @@</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; "version": "0.1.0",</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; "private": true,</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; "dependencies": &#123;</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"@babel/core": "^7.16.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"@pmmmwh/react-refresh-webpack-plugin": "^0.5.3",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"@svgr/webpack": "^5.5.0",
    </p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp; "@testing-library/jest-dom": "^5.16.4",
    </p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp; "@testing-library/react": "^13.3.0",
    </p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp; "@testing-library/user-event": "^13.5.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"babel-jest": "^27.4.2",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"babel-loader": "^8.2.3",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"babel-plugin-named-asset-import": "^0.3.8",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"babel-preset-react-app": "^10.0.1",
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"bfj": "^7.0.2",</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"browserslist": "^4.18.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"camelcase": "^6.2.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"case-sensitive-paths-webpack-plugin": "^2.4.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"css-loader": "^6.5.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"css-minimizer-webpack-plugin": "^3.2.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"dotenv": "^10.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"dotenv-expand": "^5.1.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"eslint": "^8.3.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"eslint-config-react-app": "^7.0.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"eslint-webpack-plugin": "^3.1.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"file-loader": "^6.2.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"fs-extra": "^10.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"html-webpack-plugin": "^5.5.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"identity-obj-proxy": "^3.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"jest": "^27.4.3",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"jest-resolve": "^27.4.2",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"jest-watch-typeahead": "^1.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"mini-css-extract-plugin": "^2.4.5",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"postcss": "^8.4.4",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"postcss-flexbugs-fixes": "^5.0.2",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"postcss-loader": "^6.2.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"postcss-normalize": "^10.0.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"postcss-preset-env": "^7.0.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"prompts": "^2.4.2",
    </p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp; "react": "^18.2.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"react-app-polyfill": "^3.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"react-dev-utils": "^12.0.1",
    </p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp; "react-dom": "^18.2.0",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"react-scripts": "5.0.1",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"web-vitals": "^2.1.4"
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"react-refresh": "^0.11.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"resolve": "^1.20.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"resolve-url-loader": "^4.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"sass-loader": "^12.3.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"semver": "^7.3.5",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"source-map-loader": "^3.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"style-loader": "^3.3.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"tailwindcss": "^3.0.2",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"terser-webpack-plugin": "^5.2.5",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"web-vitals": "^2.1.4",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"webpack": "^5.64.4",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"webpack-dev-server": "^4.6.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"webpack-manifest-plugin": "^4.0.2",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"workbox-webpack-plugin": "^6.4.1"
    </p>
    <p className={styles.keepLine}>&nbsp;&nbsp; &#125;,</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; "scripts": &#123;</p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"start": "react-scripts start",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"build": "react-scripts build",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"test": "react-scripts test",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"eject": "react-scripts eject"
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"start": "node scripts/start.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"build": "node scripts/build.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"test": "node scripts/test.js"
    </p>
    <p className={styles.keepLine}>&nbsp;&nbsp; &#125;,</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; "eslintConfig": &#123;</p>
    <p className={styles.keepLine}>&nbsp;&nbsp;&nbsp;&nbsp; "extends": [</p>
    <p className={styles.lineMarkup}>@@ -34,5 +79,61 @@</p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "last 1 firefox version",
    </p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "last 1 safari version"
    </p>
    <p className={styles.keepLine}>&nbsp;&nbsp;&nbsp;&nbsp; ]</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&#125;,</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;"jest": &#123;</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"roots": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"collectCoverageFrom": [
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"src/**/*.&#123;js,jsx,ts,tsx&#125;",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"!src/**/*.d.ts"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"setupFiles": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"react-app-polyfill/jsdom"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"setupFilesAfterEnv": [
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src/setupTests.js"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"testMatch": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src/**/__tests__/**/*.&#123;js,jsx,ts,tsx&#125;",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src/**/*.&#123;spec,test&#125;.&#123;js,jsx,ts,tsx&#125;"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"testEnvironment": "jsdom",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"transform": &#123;
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.(js|jsx|mjs|cjs|ts|tsx)$":
      "&lt;rootDir&gt;/config/jest/babelTransform.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.css$":
      "&lt;rootDir&gt;/config/jest/cssTransform.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "&lt;rootDir&gt;/config/jest/fileTransform.js"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"transformIgnorePatterns": [
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.module\\.(css|sass|scss)$"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"modulePaths": [],
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"moduleNameMapper": &#123;
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^react-native$": "react-native-web",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.module\\.(css|sass|scss)$":
      "identity-obj-proxy"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp; "react-dom": "^18.2.0",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"react-scripts": "5.0.1",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"web-vitals": "^2.1.4"
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"react-refresh": "^0.11.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"resolve": "^1.20.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"resolve-url-loader": "^4.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"sass-loader": "^12.3.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"semver": "^7.3.5",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"source-map-loader": "^3.0.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"style-loader": "^3.3.1",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"tailwindcss": "^3.0.2",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"terser-webpack-plugin": "^5.2.5",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"web-vitals": "^2.1.4",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"webpack": "^5.64.4",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"webpack-dev-server": "^4.6.0",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"webpack-manifest-plugin": "^4.0.2",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"workbox-webpack-plugin": "^6.4.1"
    </p>
    <p className={styles.keepLine}>&nbsp;&nbsp; &#125;,</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; "scripts": &#123;</p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"start": "react-scripts start",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"build": "react-scripts build",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"test": "react-scripts test",
    </p>
    <p className={styles.removeLine}>
      -&nbsp;&nbsp;&nbsp;&nbsp;"eject": "react-scripts eject"
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"start": "node scripts/start.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"build": "node scripts/build.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"test": "node scripts/test.js"
    </p>
    <p className={styles.keepLine}>&nbsp;&nbsp; &#125;,</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; "eslintConfig": &#123;</p>
    <p className={styles.keepLine}>&nbsp;&nbsp;&nbsp;&nbsp; "extends": [</p>
    <p className={styles.lineMarkup}>@@ -34,5 +79,61 @@</p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "last 1 firefox version",
    </p>
    <p className={styles.keepLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "last 1 safari version"
    </p>
    <p className={styles.keepLine}>&nbsp;&nbsp;&nbsp;&nbsp; ]</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&#125;,</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;"jest": &#123;</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"roots": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"collectCoverageFrom": [
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"src/**/*.&#123;js,jsx,ts,tsx&#125;",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"!src/**/*.d.ts"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"setupFiles": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"react-app-polyfill/jsdom"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"setupFilesAfterEnv": [
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src/setupTests.js"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"testMatch": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src/**/__tests__/**/*.&#123;js,jsx,ts,tsx&#125;",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&lt;rootDir&gt;/src/**/*.&#123;spec,test&#125;.&#123;js,jsx,ts,tsx&#125;"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"testEnvironment": "jsdom",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"transform": &#123;
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.(js|jsx|mjs|cjs|ts|tsx)$":
      "&lt;rootDir&gt;/config/jest/babelTransform.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.css$":
      "&lt;rootDir&gt;/config/jest/cssTransform.js",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "&lt;rootDir&gt;/config/jest/fileTransform.js"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"transformIgnorePatterns": [
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.module\\.(css|sass|scss)$"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"modulePaths": [],
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"moduleNameMapper": &#123;
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^react-native$": "react-native-web",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"^.+\\.module\\.(css|sass|scss)$":
      "identity-obj-proxy"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"moduleFileExtensions": [
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"web.js",
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"js",</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"web.ts",
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ts",</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"web.tsx",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tsx",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"json",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"web.jsx",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"jsx",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"node"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"watchPlugins": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"jest-watch-typeahead/filename",
    </p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"jest-watch-typeahead/testname"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;],</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;"resetMocks": true
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&#125;,</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;"babel": &#123;</p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;"presets": [</p>
    <p className={styles.addLine}>
      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"react-app"
    </p>
    <p className={styles.addLine}>+&nbsp;&nbsp;&nbsp;&nbsp;]</p>
    <p className={styles.keepLine}>&nbsp;&nbsp; &#125;</p>
    <p className={styles.keepLine}> &#125;</p>
  </pre>
);
