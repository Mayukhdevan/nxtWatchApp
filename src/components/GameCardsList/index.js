import {GameList} from './styledComponents'
import GameCardItem from '../GameCardItem'

export default function GameCardsList({gameList}) {
  return (
    <GameList>
      {gameList.map(eachCard => (
        <GameCardItem key={eachCard.id} gameCardItem={eachCard} />
      ))}
    </GameList>
  )
}
