import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Quote = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      companyName: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      email: '',
      phone: '',
      comments: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      companyName: Yup.string().required('Company Name is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      postalCode: Yup.string().required('Postal Code is required'),
      country: Yup.string().required('Country is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      comments: Yup.string(),
    }),
    onSubmit: (values) => {
      // Perform form submission or other actions here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className={formik.errors.fullName ? 'form-control is-invalid' : 'form-control'}
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        {formik.errors.fullName && <div className="invalid-feedback">{formik.errors.fullName}</div>}
      </div>

      {/* Other form fields with similar structure */}

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Quote;