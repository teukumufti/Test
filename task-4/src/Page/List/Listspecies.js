import React, { useState } from "react";
import { ListGroup, Container, Spinner, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function Species() {
  const title = "List Films";
  document.title = "StarWars | " + title;

  const navigate = useNavigate();
  const [pagination, setPagination] = useState(1);

  let { data: speciesList = [], isLoading } = useQuery(
    ["speciesCache", pagination],
    async () => {
      const response = await axios.get(
        `https://swapi.dev/api/species?page=${pagination}`
      );
      console.log(response.data.results);
      return response.data.results;
    }
  );

  const onChangePagination = (number) => {
    setPagination(number);
  };

  const PaginationItem = () => {
    let active = pagination;
    let items = [];
    for (let number = 1; number <= 4; number++) {
      items.push(
        <Pagination.Item
          onClick={() => onChangePagination(number)}
          key={number}
          active={number === active}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div>
      {isLoading ? (
        <div className="App">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="text-light">
          <Container className="mt-4">
            <h2 className="text-light mb-4">List Species</h2>
            <ListGroup>
              {speciesList.map((item, index) => (
                <ListGroup.Item
                  variant="dark"
                  key={index}
                  action
                  onClick={() => navigate("/detail-species?id=" + item.url)}
                >
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Pagination className="justify-content-end mt-2">
              <PaginationItem />
            </Pagination>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Species;
