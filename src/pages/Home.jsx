import TodoList from '../components/Todolist/Todolist.jsx';
import style from "../pages/Home.module.css"

const Home = () => {
    console.log('Home Component =======>>');
    return (
    <>
        <h3 className={style.home}>My To-Do-List</h3>
        <TodoList />
    </>
)};

export default Home;