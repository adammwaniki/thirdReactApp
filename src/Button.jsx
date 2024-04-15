//how to style react components with css
//method 1. External stylesheets
// one of the main disadvantages of this method is that we can end up creating naming conflicts especially with large apps
/*
function Button(){
    return(
        <button className="button">
            Click Me
        </button>
    );
}
export default Button
*/


//method 2. Modules
//this method requires us to create a dedicated stylesheet for each component e.g.
//this method is fairly common for personal or small projects where you can create a dedicated stylesheet for each component
//this method avoids naming conflicts because it allows for generation of unique names by using a hash
//disadvantages include the requirement to create new directories where you will import your styling from which can waste time
//e.g. in this case we made a new directory called Button, and in that directory we created a stylesheet called Button.module.css and we also moved the Buttton.jsx file into that directory
/*
import styles from './Button.module.css';


function Button(){
    return(
        <button className={styles.button}>
            Click Me
        </button>
    );
}
export default Button
*/

//method 3. Inline styling
//this is the most recommended method
//this method is easy to understand because the styling is reight next to the component
//this method also eliminates the possibility of global naming conflicts because we're no longer working with classnames
//its also important to note that inline styling is not recommended for large projects because it can become difficult to maintain
//it is also preferred for use where the styling is not too complex


function Button(){

    const styles = {
        backgroundColor: "hsl(45, 29%, 45%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <button style={styles}>
            Click Me
        </button>
    );
}
export default Button


