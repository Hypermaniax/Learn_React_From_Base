export default function Section ({title,children,...props}){
    // this <section {...props}> for forward the properties like id and class 
    return <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
}