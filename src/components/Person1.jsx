import HOC from "./HOC";

const Person1 = ({money, handleIncrease}) => {
    return (
        <div>
            <h4>Omar money: ${ money }</h4>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default HOC(Person1);