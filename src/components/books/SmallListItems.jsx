const SmallListBookItems = ({book}) => {
  const {name,price} = book
  return (
    <>
      <p>Name:{name} / {price} 💶</p>
    </>
  )
}
export default SmallListBookItems