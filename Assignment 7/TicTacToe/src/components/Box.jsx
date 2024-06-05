import React, { useState } from "react";
import ResetButton from "./ResetButton";

const Box = () => {
    const [count, setCount]= useState(1);
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [turnValue, setTurnValue] = useState("X");
    const [winner, setWinner] = useState("");

    const findWinner = () => {
        //check row winner
        if (
            board[0][0] &&
            board[0][0] === board[0][1] &&
            board[0][1] === board[0][2]
        ) {
            setWinner(board[0][0] + "is the winner");
        }
        if (
            board[1][0] &&
            board[1][0] === board[1][1] &&
            board[1][1] === board[1][2]
        ) {
            setWinner(board[1][0] + "is the winner");
        }
        if (
            board[2][0] &&
            board[2][0] === board[2][1] &&
            board[2][1] === board[2][2]
        ) {
            setWinner(board[2][0] + "is the winner");
        }

        // check column winner
        if (
            board[0][0] &&
            board[0][0] === board[1][0] &&
            board[1][0] === board[2][0]
        ) {
            setWinner(board[2][0] + "is the winner");
        }
        if (
            board[0][1] &&
            board[0][1] === board[1][1] &&
            board[1][1] === board[2][1]
        ) {
            setWinner(board[2][0] + "is the winner");
        }
        if (
            board[0][2] &&
            board[0][2] === board[1][2] &&
            board[1][2] === board[2][2]
        ) {
            setWinner(board[0][0] + "is the winner");
        }
        // check diagonal

        if (
            board[0][0] &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            setWinner(board[2][2] + "is the winner");
        }
        if (
            board[0][2] &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
            setWinner(board[2][0] + "is the winner");
        }
        if (count === 9) {
            setWinner("The match has drawn");
        }
    };

    const handleClick = (r, c) => {
        if (board[r][c]) return;
        const copyBoard = [...board];
        copyBoard[r][c] = turnValue;
        setBoard(copyBoard);
        setTurnValue(turnValue === "X" ? "O" : "X");
        setCount(count + 1);
        findWinner();
    };
    return (
        <div>
            <h3 className="text-primary">Tic Tac Toe</h3>
            {!winner && <p className="p-1">{turnValue} : Current Player</p>}

            <div>
            {winner ||
                board.map((row, rIndex) => (
                    <div className="row">
                        {row.map((cell, cIndex) => (
                            <div
                                onClick={() => handleClick(rIndex, cIndex)}
                                className="d-flex justify-content-center align-items-center border border-3 bg-primary text-white cell"
                            >
                                {board[rIndex][cIndex]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <ResetButton
                onPress={() => {
                    setWinner("");
                    setBoard([
                        ["", "", ""],
                        ["", "", ""],
                        ["", "", ""],
                    ]);
                }}
            />
        </div>
    );
};

export default Box;
