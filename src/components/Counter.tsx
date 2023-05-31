import {useState} from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className={s.button}>
            <p>{count}</p>
            <button onClick={handleClick}>click</button>
        </div>
    );
};

