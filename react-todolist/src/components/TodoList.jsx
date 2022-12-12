import * as S from "./styles";
import { useState } from "react";
import plus from "../img/plus.svg";
import complete from "../img/check.svg";
import deletebtn from "../img/delete.svg";

function TodoList(){
    const [ph, setPh] = useState("할 일을 입력!!");
    const [ipvalue, setIpvalue] = useState("");
    const [todo, setTodo] = useState([]);
    const [cnt, setCnt] = useState(1);
    const changePh  = () =>{
        setPh("");
    }

    const rechangePh = () => {
        setPh("할 일을 입력!!");
    }

    const AddTodo = () => {
        setTodo([...todo,
            { id : cnt,
              value : ipvalue,
              done : true
            }]);
        setCnt(cnt + 1);
        setIpvalue('');
        rechangePh();
    }

    const onkeydown = (e) => {
        if(e.key === 'Enter'){
            AddTodo();
        }
    }

    const onchange = e => {
        setIpvalue(e.target.value);
    }

    const TodoDelete = data => {
        setTodo(todo.filter(todo => data !== todo.id));
    }

    const TodoComplete = () => {

    }

    return (
            <S.background>
                <S.TodoContainer>
                    <S.Title>TODOLIST!!!</S.Title>
                    <S.Input 
                        value={ipvalue}
                        placeholder={ph}
                        onFocus={changePh} 
                        onBlur={rechangePh} 
                        onKeyDown={onkeydown}
                        onChange={onchange}
                    />
                    <S.PlusBtn onClick={AddTodo}>
                        <S.Plus src={plus}/>
                        <S.PlusBar/>
                    </S.PlusBtn>
                    <S.Line/>
                    <S.TodoList>
                        {todo.map((data) => (
                            <S.Todo id = {data.id}>
                                <S.Content>
                                    {data.value}
                                </S.Content>
                                <S.BtnWarpper>
                                    <S.Complete src={complete} onClick={TodoComplete}/>
                                    <S.Delete src={deletebtn} onClick={ () => {TodoDelete(data.id);}}/>
                                </S.BtnWarpper>
                            </S.Todo>
                        ))}
                    </S.TodoList>
                </S.TodoContainer>
            </S.background>  
    );
}

export default TodoList;