import React from 'react'

import { useMyHook } from 'use-observable'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
