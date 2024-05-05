const NumberedList = ({items, sourceName, ItemComponent}) => {
  return (

    <>
     {items.map((item,i) => ( 
       <>
         {/* hier möchte ich die Nummer von jedem item anzeigen,
           comme nus avons l index qui commence a zero, disons i + 1*/}
        <h3>{i+1}</h3>
         <ItemComponent key={i} {...{[sourceName]:item}} />
       </>
        
     ))}
    </>
  )
}
export default NumberedList