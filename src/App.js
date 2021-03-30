import React, { useState, useEffect, useRef } from 'react'
import { forceSimulation, select } from 'd3'

const App = () => {
  const ref = useRef()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/2/albums/`)
      .then((res) => res.json())
      .then((json) => setData(json))
    main()
  }, [])

  const main = () => {
    console.log(data)

    const nodes = [{ id: 'Alice' }, { id: 'Bob' }, { id: 'Carol' }]

    var links = [
      { source: 'Alice', target: 'Bob' },
      { source: 'Bob', target: 'Carol' },
    ]

    const svg = select(ref.current)
    const width = +svg._groups[0][0].clientWidth
    const height = +svg._groups[0][0].clientHeight
    const centerX = width / 2
    const centerY = height / 2

    const simulation = forceSimulation()
  }

  return (
    <div>
      <svg ref={ref} id='container' width='500' height='500'></svg>
    </div>
  )
}

export default App
