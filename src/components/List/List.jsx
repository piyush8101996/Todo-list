import styles from './List.module.css';

const List = (props) => {
    console.log('List Component =======>>');
    /*
    ['a','b','c'] ==> [<li>a</li>, <li>b</li>, <li>c</li>];
    1. Below function is used to convert array of string to array of jsx to show all 
    unorder list items.
    2. Need to pass unique key props in array of jsx 
    */
    const list = props.value.map((itemObj, index)=>{
        return (
            <li key={index} className={itemObj.isDone ? `${styles.doneItem}` : styles.list}>
            
                {!itemObj.isEditing && (
                    <>
                        <div >
                            <b className={styles.listitem}>{itemObj.itemName}</b>
                        </div>

                        <button className={styles.btn} onClick={()=>{props.onEditClickHandler(index)}}> Edit </button>
                        
                        {/* Conditional rendering logic */}
                        {itemObj.isDone && (
                            <button className={styles.btn} onClick={ ()=>{props.onDeleteClickHandler(index)} }>
                                Delete
                            </button>
                        )}

                        {!itemObj.isDone && (
                            <button className={styles.btn} onClick={ ()=>{props.onDoneClickHandler(index)} }>
                                Done
                            </button>
                        )}

                        {index !== 0 && (
                            <button className={styles.btn} onClick={ ()=>{props.swapListItemHandler(index, index-1)}}>
                            UP
                            </button>
                        )}
                        
                        {index !== (props.value.length-1) && (
                            <button className={styles.btn} onClick={ ()=>{props.swapListItemHandler(index, index+1)}}>
                                DOWN
                            </button>
                        )}
                        
                    </>
                )}

                {itemObj.isEditing && (
                    <>
                    <div>
                        <input className={styles.edit}
                            type="text" 
                            value={itemObj.editItemName} 
                            onChange={(event)=>{
                                props.onEditInputChangeHandler(index, event);
                            }}/>
                        <button className={styles.btn}
                            onClick={()=>{props.onEditSaveHandler(index)}}>
                            Save
                        </button>
                        <button className={styles.btn}
                            onClick={()=>{props.onEditCancelHandler(index)}}>
                            Cancel
                        </button>
                    </div>
                    </>
                )}
            </li>
        );
    });


    return(
        <ul>{list}</ul>
    );
};

export default List;