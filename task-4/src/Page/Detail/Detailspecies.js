import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Detailspecies() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  console.log(id);

  let { data: detailSpecies = [], isLoading } = useQuery(
    ["speciesDetailCache"],
    async () => {
      const response = await axios.get(id);
      console.log(response.data);
      return response.data;
    }
  );
  return (
    <div>
      {isLoading ? (
        <div className="App">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container className="text-light">
          <h3 className="textBrand mt-4">Detail Species :</h3>
          <div>
            <h4 className="mt-4">{`Name : ${detailSpecies.name} `}</h4>
            <h4 className="mt-4">{`Classification : ${detailSpecies.classification}`}</h4>
            <h4 className="mt-4">{`Designation : ${detailSpecies.designation}`}</h4>
            <h4 className="mt-4">{`Average Height : ${detailSpecies.average_height} Cm`}</h4>
            <h4 className="mt-4">{`Skin Colors : ${detailSpecies.skin_colors} `}</h4>
            <h4 className="mt-4">{`Hair Colors : ${detailSpecies.hair_colors}`}</h4>
            <h4 className="mt-4">{`Eye Colors : ${detailSpecies.eye_colors}`}</h4>
            <h4 className="mt-4">{`Average Lifespan : ${detailSpecies.average_lifespan}`}</h4>
            <h4 className="mt-4">{`Language : ${detailSpecies.language}`}</h4>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Detailspecies;
