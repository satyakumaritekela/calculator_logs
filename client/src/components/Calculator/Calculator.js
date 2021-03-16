import React, { useEffect, useState } from 'react';
import "./Calculator.css";
import { socket } from "../../socket";

const numbers = [{
    number: 7,
    id: "seven"
}, {
    number: 8,
    id: "eight"
}, {
    number: 9,
    id: "nine"
}, {
    number: 4,
    id: "four"
}, {
    number: 5,
    id: "five"
}, {
    number: 6,
    id: "six"
}, {
    number: 1,
    id: "one"
}, {
    number: 2,
    id: "two"
}, {
    number: 3,
    id: "three"
}, {
    number: 0,
    id: "zero"
},];

const operations = [{
    symbol: "/",
    id: "divide"
}, {
    symbol: "*",
    id: "multiply"
}, {
    symbol: "-",
    id: "subtract"
}, {
    symbol: "+",
    id: "add"
}, {
    symbol: "=",
    id: "equals"
},];

const Calculator = ({logs, setLogs}) => {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [operatorFlag, setOperatorFlag] = useState(false);
    const [decimalFlag, setDecimalFlag] = useState(false);
    const [isCalculated, setIsCalculated] = useState(false);
    const [userId, setUserId] = useState("");
 
    useEffect(() => {
        socket.on("connect", () => {
            setUserId(socket.id);
        })
    }, []);

    useEffect(() => {
        socket.on("emitted-equals", (log) => {
            const newLogs = [...logs];
            newLogs.unshift(log);
            setLogs(newLogs);
        })
    }, [logs]);

    const onClickHandler = (e) => {
        const value = e.target.textContent;
        switch (true) {
            case value === "0" ||
                value === "1" ||
                value === "2" ||
                value === "3" ||
                value === "4" ||
                value === "5" ||
                value === "6" ||
                value === "7" ||
                value === "8" ||
                value === "9":
                if (!isCalculated) {
                    if (currentNumber !== "0") {
                        setCurrentNumber(currentNumber + value);
                        setOperatorFlag(false);
                    } else {
                        setCurrentNumber(value);
                    }
                } else {
                    setIsCalculated(false);
                    setCurrentNumber(value);
                }
                break;

            case value === "+" ||
                value === "-" ||
                value === "*" ||
                value === "/":
                if (!operatorFlag) {
                    setCurrentNumber(currentNumber + value);
                    setOperatorFlag(true);
                    setDecimalFlag(false);
                } else {
                    const newNumber = currentNumber.slice(0, currentNumber.length - 1);
                    setCurrentNumber(newNumber + value);
                }
                break;


            case value === "AC":
                setCurrentNumber("0");
                setOperatorFlag(false);
                setDecimalFlag(false);
                break;


            case value === "=":
                if (isCalculated)
                    break;
                try {
                    // eslint-disable-next-line
                    let result = parseFloat(eval(currentNumber));
                    result = (Math.round(result * 100) / 100).toString();
                    const newLog = { "userId": userId, "expression": currentNumber + " = " + result };
                    setCurrentNumber(result);
                    setOperatorFlag(false);
                    setDecimalFlag(true);
                    setIsCalculated(true);
                    socket.emit("equals", newLog);
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        break;
                    }
                }
                break;

            case value === ".":
                if (isCalculated)
                    break;
                if (!decimalFlag) {
                    setCurrentNumber(currentNumber + ".");
                    setDecimalFlag(true);
                }
                break;

            default:
                break;
        }
    }


    return (
        <>
            <div>
                <h3>UserId: { userId }</h3>
            </div>
            <div className="calculator" id="calcGrid">
                <div className="display" id="display">
                    {currentNumber}
                </div>
                <div className="numbers-container">
                    <button className="grey bigW ac" id="clear" onClick={onClickHandler}>AC</button>
                    {numbers.map((number, index) => (
                        <button key={index} id={number.id} className={`dark-grey ${number.number === 0 && 'bigW'}`} onClick={onClickHandler}>{number.number}</button>
                    ))}
                    <button className="grey" id="decimal" onClick={onClickHandler}>.</button>
                </div>
                <div className="operations-container">
                    {operations.map((operation, index) => (
                        <button key={index} className="orange" id={operation.id} onClick={onClickHandler}>{operation.symbol}</button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Calculator;