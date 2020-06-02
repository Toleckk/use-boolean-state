# use-boolean-state

> React hook providing functions for boolean state management

[![NPM](https://img.shields.io/npm/v/use-boolean-state.svg)](https://www.npmjs.com/package/use-boolean-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add use-boolean-state
```

or if you use npm

```bash
npm install --save use-boolean-state
```

## Usage

```jsx
import React from 'react'
import useBooleanState from 'use-boolean-state'

const Example = () => {
  const [showing, show, close, toggle] = useBooleanState(false)

  return (
    <div>
      <button onClick={show}>Show</button>
      <button onClick={close}>Close</button>
      <button onClick={toggle}>Toggle</button>
      {showing && <div>Meow</div>}
    </div>
  )
}
```

## License

MIT © [Toleckk](https://github.com/Toleckk)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
