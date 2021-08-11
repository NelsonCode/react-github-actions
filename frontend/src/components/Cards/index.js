import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getGamesAll } from "../../services";
import Spinner from "../Spinner";

function Cards() {
  const [Loader, setLoader] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setLoader(true);
      const { error, response } = await getGamesAll();
      if (response !== null) {
        if (response.data.length === 0) {
          setLoader(false);
        }
        if (response.data !== null && response.data.length > 0) {
          setData(response.data);
          setLoader(false);
        } else {
          setLoader(false);
          console.log(error);
        }
      }
    }
    fetchData();
  }, []);

  if (Loader) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>Nuevo</h1>
      <StyleCards>
        <div className="container-cards">
          <div className="grid-cards">
            {Data.map((game) => {
              return (
                <div className="card-youtube">
                  <div>
                    <img className="img-card" src={game.urlImagen} alt="" />
                  </div>
                  <div className="padding-card">
                    <p className="title-card">{game.descripcion}</p>
                    <br />
                    <p className="author-card">
                      <strong>{game.nombre}</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </StyleCards>
    </div>
  );
}

export default Cards;

const StyleCards = styled.div`
  /*CARDS*/
  .padding-card {
    padding: 10px;
    text-align: center;
  }
  .title-card {
    font-size: 15px;
  }
  .author-card {
    margin-top: 5px;
    color: white;
  }
  .img-avatar-card {
    height: 36px;
    width: 36px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 10px;
  }

  /* MOBILE */
  @media (max-width: 1025px) {
    .container-cards {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 100%;
    }
    .card-youtube {
      width: 100%;
      height: 200px;
      background: #1a1d51;
      margin-bottom: 50px;
    }
    .img-card {
      height: 170px;
      width: 100%;
    }
  }

  /* DESKTOP */
  @media (min-width: 720px) {
    .container-cards {
      margin-left: 5%;
      margin-top: 50px;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 33.33% 33.33% 33.33%;
    }
    .card-youtube {
      width: 280px;
      height: auto;
      background: #1a1d51;
      padding-bottom: 4px;
    }
    .img-card {
      height: 140px;
      width: 280px;
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .container-cards {
      margin-left: 5%;
      margin-top: 10px;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
    .card-youtube {
      width: 280px;
      height: auto;
      background: #1a1d51;
    }
    .img-card {
      height: 150px;
      width: 280px;
    }
  }
`;
