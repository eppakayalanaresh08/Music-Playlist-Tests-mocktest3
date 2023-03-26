import {RiDeleteBin7Line} from 'react-icons/ri'

import './index.css'

const EachItemPlayList = props => {
  const {EachObjectList, onEachDelete} = props
  const {imageUrl, name, genre, duration, id} = EachObjectList
  const onClickDeleteButton = () => {
    onEachDelete(id)
  }
  return (
    <li className="list-each-container">
      <div className="image-songs-container">
        <img src={imageUrl} alt="track" className="image-song" />
        <div className="container-names">
          <p className="name-Element">{name}</p>
          <p className="genre-Element">{genre}</p>
        </div>
      </div>
      <div className="button-container">
        <p className="duration-Element">{duration}</p>
        <button
          type="button"
          className="delete-Button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <RiDeleteBin7Line className="Delete-Element" />
        </button>
      </div>
    </li>
  )
}

export default EachItemPlayList
