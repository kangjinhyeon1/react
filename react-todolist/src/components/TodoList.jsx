import * as S from "./styles";
import { useState } from "react";
import plus from "../img/plus.svg";
import complete from "../img/check.svg";
import deletebtn from "../img/delete.svg";

function TodoList(){
    const [ph, setPh] = useState("할 일을 입력!!");
    const changePh  = () =>{
        setPh("");
    }
    const rechangePh = () => {
        setPh("할 일을 입력");
    }
    return (
            <S.background>
                <S.TodoContainer>
                    <S.Title>TODOLIST!!</S.Title>
                    <S.Input placeholder={ph} onFocus={changePh} onBlur={rechangePh}/>
                    <S.PlusBtn>
                        <S.Plus src={plus}/>
                        <S.PlusBar/>
                    </S.PlusBtn>
                    <S.Line/>
                    <S.TodoList>
                        <S.Todo>
                            <S.Content>
                                과학수행준비하기
                            </S.Content>
                            <S.Complete src={complete}/>
                            <S.Delete src={deletebtn}/>
                        </S.Todo>
                    </S.TodoList>
                </S.TodoContainer>
            </S.background>  
    );
}

export default TodoList;