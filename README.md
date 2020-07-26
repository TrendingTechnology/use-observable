# use-observable

> "Plug and play" for Observables in React Apps!

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![coc-badge](https://img.shields.io/badge/codeof-conduct-ff69b4.svg?style=flat-square)]()
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e5079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![NPM](https://img.shields.io/npm/v/use-observable.svg)](https://www.npmjs.com/package/use-observable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Ever had an Observable holding data that you need to maintain in the state of your React App? This method bridges that gap.

It receives an Observable, subscribes to it, and stores the current version in a react state, ensuring that it persists between re-renders. 

Note that you can use it multiple times, with various Observables.

## Install

```bash
npm install --save use-observable
```

## Usage

```tsx
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { useObservable } from "@libreact/use-observable";

const click$:Subject<any> = new Subject();
const source = interval(1000).pipe(takeUntil(click$));

function App() {
  const [currentCount] = useObservable(source);
  const stopCount = ()=>{
    click$.next(true);
  }

  return (
    <div>
      <div>{currentCount}</div>
      <button onClick={stopCount} id="stop">stop!</button>
    </div>
  );
}
```
## Core Team

<table>
  <tr>
    <td align="center"><a href="https://www.netbasal.com"><img src="https://avatars1.githubusercontent.com/u/6745730?v=4" width="100px;" alt="Netanel Basal"/><br /><sub><b>Netanel Basal</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/theblushingcrow"><img src="https://avatars3.githubusercontent.com/u/638818?v=4" width="100px;" alt=""/><br /><sub><b>Inbal Sinai</b></sub></a><br /></td>
</tr>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [NetanelBasal](https://github.com/NetanelBasal)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
