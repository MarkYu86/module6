function Greeting({name,children}){
   const greetingMsg = name ? `Hello  ${name}`:"Hello World";
   return(
    <div><h1>{greetingMsg}</h1>
    {children && <p>{children}</p>}
    </div>
   )
}
export default Greeting;