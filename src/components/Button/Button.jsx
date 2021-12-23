import style from '../Button/Button.module.css'
const Button=(props)=>{
    return(
        <div >
        <button className={style.btn}
        onClick={props.onClickHandler}
        >Add Task
        </button>
        </div>
    );
};
export default Button;
