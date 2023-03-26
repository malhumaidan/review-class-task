import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Pet({ pet }) {
  const queryClient = useQueryClient();
  const adopt = useMutation(
    () =>
      axios.put(`https://react-pets-backend.herokuapp.com/pets/${pet.id}`, {
        adopted: 1,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["pets"]),
    }
  );
  const deletePet = useMutation(
    () =>
      axios.delete(`https://react-pets-backend.herokuapp.com/pets/${pet.id}`),
    {
      onSuccess: () => queryClient.invalidateQueries(["pets"]),
    }
  );

  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal1"
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img
          className="img-fluid"
          src={pet.image}
          alt="..."
          style={{ border: pet.adopted && " 5px solid #FF0000" }}
        />
      </div>
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        {pet.name}
        <button
          className="btn btn-primary"
          type="button"
          onClick={adopt.mutate}
        >
          Adopt
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={deletePet.mutate}
        >
          Delete
        </button>
      </h2>
    </div>
  );
}

export default Pet;
