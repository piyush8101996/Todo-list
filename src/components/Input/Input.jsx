import style from '../Input/Input.module.css'
const Input=(props)=>{
    return(
        <div >
        <input className={style.input} type="text" placeholder='Enter the task' value={props.value}
        onChange={props.onChangeHandler} 
        onKeyUp={props.onKeyHandler}/>
        </div>
    );
};
export default Input;