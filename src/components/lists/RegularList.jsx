const RegularList = ({items, sourceName, ItemComponent}) => {
  return (
    //hier möchhte ich Große oder kleine listItems anzeigen
    //deshalb ich habe ItemComponent als props übergeben
    //und ich habe ItemComponent in der map Methode verwendet
    //deshalb ich kann hier entscheiden ob ich kleine oder große listItems von
    //authors oder books anzeigen möchte
    //author oder book befinden sich in sourceName props
    //pour cela on utilisera un spread operator avec pour valeur item {...{[sourceName]: item}}

    <>
     {items.map((item,i) => ( 
        <ItemComponent key={i} {...{[sourceName]:item}} />
        
     ))}
    </>
  )
}
export default RegularList
