export default function Alert({type}){
    return(
        <div className={type==="success"}>
            {type==="success"?"Success!!!":"Error!!!"}
        </div>
    );
}