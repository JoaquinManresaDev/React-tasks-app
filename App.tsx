import React, { Fragment, useState } from 'react'

function App(): JSX.Element {

  const [newTask, setnewTask] = useState('');

  return (
    <Fragment>
      <form>
        <input type="text" />
      </form>
    </Fragment>
  )
}

export default App
