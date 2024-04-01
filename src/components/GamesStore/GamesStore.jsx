import { useState } from "react";
import GameList from "../GameList/GameList";
import SearchBar from "../SearchBar/SearchBar";
import './style.sass'

export default function GamesStore({ games = [] }) {
  const [filterText, setFilterText] = useState('')
  const [inDesired, setInDesired] = useState(false)

  return (
    <div className="games-store">
      <SearchBar
        filterText={ filterText }
        inDesired={ inDesired }
        setFilterText={ setFilterText }
        setInDesired={ setInDesired }
      />
      <GameList
        games={games}
        filterText={filterText}
        inDesired={inDesired}
      />
    </div>
  )
}
