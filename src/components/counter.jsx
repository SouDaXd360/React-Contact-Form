import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    };

    return(
        <div>
            <h2>Counter</h2>
            <p>The current Count is:- {count}</p>
            <button onClick={handleIncrement}>Click me to add 1</button>

        </div>
    );
}

export default Counter;