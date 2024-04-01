import './style.sass'
import CategoryRow from '../CategoryRow/CategoryRow'
import GameRow from '../GameRow/GameRow'

export default function GameList({
  games =[],
  filterText ='',
  inDesired = false
}) {
  const rows = []
  let lastCategory = ''

  games.forEach((game) => {
    if(game.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }

    if(inDesired && !game.inDesired) {
      return
    }

    if(game.category !== lastCategory) {
      rows.push(<CategoryRow category={game.category} key={game.category}/>)
    }
    rows.push(<GameRow game={game} key={game.name}/>)
    lastCategory = game.category
  })

  return (
    <ul className="game-list">
      {rows}
    </ul>
  )
}
