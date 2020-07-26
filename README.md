# use-observable
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

>

[![NPM](https://img.shields.io/npm/v/use-observable.svg)](https://www.npmjs.com/package/use-observable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> "Plug and play" for Observables in React Apps!

Ever had an Observable holding data that you need to maintain in the state of your React App? This method bridges that gap.

It receives an Observable, subscribes to it, and stores the current version in a react state, ensuring that it persists between re-renders. 

Note that you can use it multiple times, with various Observables.


## Install

```bash
npm install --save use-observable
```

## Usage

```tsx
import { useObservable } from '@libreact/use-observable';
import { interval } from 'rxjs';

function App() {
  const source = interval(1000);
  const [currentCount] = useObservable(source);
  return (
   <div>
    {currentCount}
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
