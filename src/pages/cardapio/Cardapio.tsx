import { useState } from "react";
import style from "./cardapio.module.sass";
import { useFoodData } from "../../hooks/useFoodData";
import Card from "../../components/card/Card";
import CreateModal from "../../components/create_modal/CreateModal";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import { FiSearch, FiPlusSquare } from "react-icons/fi";
import UpdateModal from "../../components/update_modal/UpdateModal";

function Cardapio() {
  const { isLoading, data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleUpdateModal = () => {
    setIsUpdateModalOpen((prev) => !prev);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Header />
      <div className={style.cardapio}>
        <div className={style.cardapioContent}>
          <h1 className={style.title}>Cardápio</h1>
          <div className={style.top}>
            <Search placeholder="Pesquisar" icon={FiSearch} />
            <button
              className={style.btn}
              type="button"
              onClick={handleOpenModal}
            >
              Novo prato
              <div className={style.iconContent}>
                <FiPlusSquare size={18} className={style.plusIcon} />
              </div>
            </button>
          </div>
          <div className={style.cardGrid}>
            {data &&
              data.length > 0 &&
              data.map(({ id, price, title, description, image }) => (
                <Card
                  key={id}
                  id={id}
                  price={price}
                  title={title}
                  description={description}
                  image={image}
                  handleUpdateModal={handleUpdateModal}
                />
              ))}
          </div>
          {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
          {isUpdateModalOpen && <UpdateModal closeModal={handleUpdateModal} />}
        </div>
      </div>
    </>
  );
}

export default Cardapio;
