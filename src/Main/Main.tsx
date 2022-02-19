import React, { useState } from "react";

const Main = () => {
    const [a, setA] = useState<number>(0);

    return (
        <div>
            {a}
            <button onClick={() => {
                setA(a + 1)
            }}>
                테스트 버튼
            </button>
        </div>
    )
}

export default Main;