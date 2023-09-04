import {useNavigate} from 'react-router-dom'

const NFT = ({name, id, imgUrl, data }) => {
  const navigate = useNavigate();

  return (
    <div className='nft' onClick={handleClick} >
      <img loading='lazy' src={imgUrl}/>
      <p>{name}#{id}</p>
    </div>
  )

  function handleClick() {
      navigate('/details', {
        state: {
          data
        }
      })
  }
}


export default NFT