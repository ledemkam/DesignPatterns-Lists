// für ein Projekt ,wenn ich wenige listItems habe 
 const SmallAuthorListItem = ({ author }) => {
  const { name, age } = author
 return(
  <p>Name: {name}, Age:{age}</p>
 )
}
export default SmallAuthorListItem