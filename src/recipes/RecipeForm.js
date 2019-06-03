import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

export function RecipeForm({ initialValues }) {
    const recipeInitialValues = Object.assign({ steps: [{ name: '', sequence: 1 }] }, initialValues);

    function validateRequired(value) {
        if (!value) return 'This field is required';

        return null;
    }

    function handleSubmit() {

    }

    return (
        <div>
            <Formik
                initialValues={recipeInitialValues}
                onSubmit={handleSubmit}
                render={
                    ({ values, touched, errors, isSubmitting }) => (
                        <Form>
                            <div>
                                <label>Name: </label>
                                <Field type="text" name="name" validate={validateRequired} />
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div>
                                <label>Description: </label>
                                <Field type="text" name="description" validate={validateRequired} />
                                <ErrorMessage name="description" component="div" />
                            </div>
                            <div>
                                Steps:
                            </div>
                            <FieldArray name="steps"
                                render={
                                    arrayHelpers => (
                                        <div>
                                            {
                                                values.steps && values.steps.length > 0
                                                    ? (
                                                        values.steps.map((step, index) =>
                                                            <div key={step.sequence}>
                                                                <Field name={`friends[${index}].name`} validate={validateRequired} />
                                                                <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                                    -
                                                                </button>
                                                            </div>
                                                        )

                                                    )
                                                    : (<></>)

                                            }
                                            <button type="button"
                                                onClick={() => arrayHelpers.push({ name: '', sequence: values.steps.length })}>
                                                +
                                        </button>
                                        </div>
                                    )
                                } />
                            <button disabled={Object.keys(touched).length === 0
                                || Object.keys(errors).length > 0 || isSubmitting}>
                                Submit
                        </button>
                        </Form>
                    )
                } />
        </div>
    );
}