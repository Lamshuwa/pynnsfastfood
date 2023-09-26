import React from 'react'

export default function Counter() {
    const [counter, setCounter] = React.useState(0)
    return (
        <div>
            <h4>Quantity in half</h4>
            <br />
            <button disabled={counter === 0 && true} value={counter} onClick={() => setCounter(counter - 1)}>-</button>
            {counter}
            <button value={counter} onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}
