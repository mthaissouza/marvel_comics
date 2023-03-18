import Alert from "@mui/material/Alert";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import ComicThumbnail from "../ComicsThumbnail";
import { Container, BoxComics } from "./styles";

interface IComics {
  id: number;
  title: string;
  description: string;
  dates: {
    type: string;
    date: Date;
  };
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Comics = () => {
  const [comicsData, setComicsData] = useState<IComics[]>([]);

  useEffect(() => {
    api
      .get("/comics")
      .then((res) => {
        setComicsData(res.data.data.results);
      })
      .catch((err) => {
        return (
          <Alert variant="filled" severity="error">
            Erro {err}
          </Alert>
        );
      });
  }, []);

  return (
    <div>
      <BoxComics>
        {comicsData.map((item, index) => (
          <Container key={index}>
            <ComicThumbnail
              id={item.id}
              description={item.description}
              dates={item.dates.date}
              title={item.title}
              price={item.prices[0].price}
              thumbnail={item.thumbnail.path + "." + item.thumbnail.extension}
            ></ComicThumbnail>
          </Container>
        ))}
      </BoxComics>
    </div>
  );
};

export default Comics;
