import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CreatePet = () => {
  const initialValues = {
    name: "",
    img: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // Handle submit logic here, such as sending the form data to an API
    console.log(values);
    resetForm(initialValues);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Pet Name:
            </h2>
            <Field type="text" name="name" className="form-control" />
          </div>

          <div>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Image URL:
            </h2>
            <Field type="text" name="imageUrl" className="form-control" />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Add Pet
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePet;
