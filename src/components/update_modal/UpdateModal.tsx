import React, { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import { FiX } from "react-icons/fi";
import style from "./modal.module.sass";

interface InputProps {
  label: string;
  value: string | number;
  updateValue: (value: any) => void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </>
  );
};

function UpdateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { mutate, isSuccess, isLoading } = useFoodDataMutate();

  const submit = (e: any) => {
    e.preventDefault();
    if (!title || !price || !description || !image)
      return alert("Preencha todos os campos");
    const foodData: FoodData = {
      title,
      price,
      description,
      image,
    };

    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className={style.modalOverlay}>
      <div className={style.modalBody}>
        <div className={style.modalTop}>
          <h2>Cadastre um novo item no cardápio</h2>
          <FiX
            className={style.closeIcon}
            size={20}
            onClick={() => closeModal()}
          />
        </div>
        <form className={style.inputContainer}>
          <Input label="Título" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input
            label="Descrição"
            value={description}
            updateValue={setDescription}
          />
          <Input label="Imagem" value={image} updateValue={setImage} />
        </form>
        <button onClick={(e) => submit(e)} className={style.btnSecondary}>
          {isLoading ? "Atualizando..." : "Atualizar"}
        </button>
      </div>
    </div>
  );
}

export default UpdateModal;
