import Gallery from "../Gallery/Gallery";
import './style.sass'

export default function GameRow({game = {}}) {
  return (
    <li className="game-row">
      <span className="game-name">{game.name}</span>
      {game.inDesired && <span className="game-desired">{game.name}</span>}
      <Gallery images={game.images}/>
      <span className="game-price">{game.price}</span>
    </li>
  )
}
