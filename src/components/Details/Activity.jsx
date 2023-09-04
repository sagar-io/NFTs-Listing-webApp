import tagImg from '../../assets/tag.svg'

const Activity = ({price, buyer, seller, time}) => {
  return (
            <tr>
                <td className='listing'>
                    <img src={tagImg}/>
                    Listing
                </td>
                <td>{price}</td>
                <td><abbr title={seller}>{seller.substring(0, 4)}...</abbr></td>
                <td><abbr title={buyer}>{buyer.substring(0, 4)}...</abbr></td>
                <td>{time}</td>
            </tr>
  )
}

export default Activity