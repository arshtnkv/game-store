import './style.sass'

export default function Gallery({images=[]}) {
  let gallery = images.map((image, index) => <img src={image} alt="preview" key={index}/>)
  return (
    <div className="gallery">{gallery}</div>
  )
}
