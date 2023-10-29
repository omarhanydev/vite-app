import HOC from "./HOC";

const Person2 = ({money, handleIncrease}) => {
    return (
        <div>
            <h4>Jimmy money: ${ money }</h4>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default HOC(Person2);