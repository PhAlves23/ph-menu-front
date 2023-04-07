import { FiEdit, FiTrash } from "react-icons/fi";
import style from "./card.module.sass";
import { useFoodDataDelete } from "../../hooks/useFoodDataDelete";
import { useFoodDataUpdate } from "../../hooks/useFoodDataUpdate";

interface Props {
  id: number;
  price: number;
  title: string;
  description: string;
  image: string;
  handleUpdateModal: (data: Props) => void;
}

function handleImageError(e: any) {
  e.target.src = "./sem_imagem.png";
}

function Card({
  id,
  price,
  title,
  description,
  image,
  handleUpdateModal,
}: Props) {
  const foodDataDelete = useFoodDataDelete();
  const foodDataUpdate = useFoodDataUpdate();

  function handleDeleteClick(id: number) {
    foodDataDelete.mutate(id);
  }

  function handleUpdateClick(data: Props) {
    const updatedData = { ...data };
    foodDataUpdate.mutate(updatedData);
  }
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img
          src={image}
          onError={(e) => handleImageError(e)}
          alt="Food Image"
        />
      </div>
      <div className={style.cardBody}>
        <h2 className={title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <p className={style.price}>
          R$
          <b>{price}</b>
        </p>
      </div>
      <div className={style.cardEdit}>
        <FiEdit
          className={style.icon}
          onClick={handleUpdateModal}
          // onClick={() =>
          //   handleUpdateClick({ id, price, title, description, image })
          // }
        />
        <FiTrash className={style.icon} onClick={() => handleDeleteClick(id)} />
      </div>
    </div>
  );
}

export default Card;
