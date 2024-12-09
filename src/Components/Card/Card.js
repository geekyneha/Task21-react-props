import React from 'react'
import style from './card.module.css'

const Card = () => {
    const cardDetails = [
        {
          id: 1,
          img: 'https://th.bing.com/th/id/OIG2._JJ7jEND0UMuzHjwBeTh',
          name: 'Card 1',
          description: 'This is the description for Card 1'
        },
        {
          id: 2,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqu9zNtT4C4YkOUuEJLvbVo6A8xx4stKJDqL6rkUECrnunqA4O93fiPszv9xYatpHqJSw&usqp=CAU',
          name: 'Card 2',
          description: 'This is the description for Card 2'
        },
        {
          id: 3,
          img: 'https://static.vecteezy.com/system/resources/thumbnails/028/626/672/small_2x/hd-image-ai-generative-free-photo.jpeg',
          name: 'Card 3',
          description: 'This is the description for Card 3'
        },
        {
          id: 4,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zw4kLdZC5hSt2rPZ94kVVq7OKbmv1qxX4VUegTw4mXWcIIAg4SiiBI_p8jQ9q5Kx05w&usqp=CAU',
          name: 'Card 4',
          description: 'This is the description for Card 4'
        },
        {
          id: 5,
          img: 'https://static.vecteezy.com/system/resources/thumbnails/039/210/128/small_2x/ai-generated-beautiful-nature-mountain-scenery-professionalgraphy-photo.jpg',
          name: 'Card 5',
          description: 'This is the description for Card 5'
        },
        {
          id: 6,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHVdoIaiqxPWSgYtOg8xGeZTbYmYbC-kVsg&s',
          name: 'Card 6',
          description: 'This is the description for Card 6'
        },
        {
          id: 7,
          img: 'https://qph.cf2.quoracdn.net/main-qimg-6d033ab08c0ebcf13a60c42e6506da13-pjlq',
          name: 'Card 7',
          description: 'This is the description for Card 7'
        },
        {
          id: 8,
          img: 'https://static.vecteezy.com/system/resources/thumbnails/031/583/113/small_2x/vibrant-sunset-over-tranquil-countryside-generative-ai-photo.jpeg',
          name: 'Card 8',
          description: 'This is the description for Card 8'
        },
        {
          id: 9,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKGNC0bdMAQXyxoJ9y4pd2OLPt_YdAMGiLg&s',
          name: 'Card 9',
          description: 'This is the description for Card 9'
        },
        {
          id: 10,
          img: 'https://wallpapers.com/images/hd/natural-beauty-pictures-mbtr8beealka829b.jpg',
          name: 'Card 10',
          description: 'This is the description for Card 10'
        }
      ];
  return (
    <>
    {cardDetails.map((card,index)=>(
        <div className={style.card} key={index} >
        <div className={style.cardContainer}>
            <div className={style.image}>
                <img src={card.img} alt={card.name} width={150} height={150} />

            </div>
              <div className={style.name}>
                <p>{card.name}</p>

              </div>
              <div className={style.about}>
                <p>{card.description}</p>

              </div>


        </div>

    </div>
    ))}
    </>
  )
}

export default Card