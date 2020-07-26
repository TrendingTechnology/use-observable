# use-observable

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
import * as React from 'react'

import { useMyHook } from 'use-observable'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [NetanelBasal](https://github.com/NetanelBasal)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
