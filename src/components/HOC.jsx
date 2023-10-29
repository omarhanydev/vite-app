import { useState } from "react";

// Regular function

// function HOC (OriginalComponent) {
//     function NewComponent() {
//         const [money, setMoney] = useState(10);
//         const handleIncrease = () => {
//             setMoney(money * 2);
//         };
//         return <OriginalComponent money={money} handleIncrease={handleIncrease} />
//     }
//     return NewComponent;
// }

// Arrow function

const HOC = (OriginalComponent) => {
    return (props) => {
        const [money, setMoney] = useState(10);
        const handleIncrease = () => {
            setMoney(money * 2);
        };
        return <OriginalComponent money={money} handleIncrease={handleIncrease} />
    }
}

export default HOC;