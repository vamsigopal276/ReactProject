function Greet(props)
{
    return(
        <>
        <h1>Hello {props.name} welcome to class</h1>
        <h1>Hello{props.name} bye....</h1>
        </>
    );
}
Greet.defaultProps={name:'guest'};
export default Greet;