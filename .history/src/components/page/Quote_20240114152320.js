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
      comments: Yup.string().required("Comments is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container'>
    <div className='row product'>
    <form onSubmit={formik.handleSubmit} className='col-12'>
      <h1 className=' text-center mb-5'> Quote</h1>
      <div className='row'> 
  <div className="form-group col-4">
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

  <div className="form-group col-4">
    <label htmlFor="companyName">Company Name:</label>
    <input
      type="text"
      id="companyName"
      name="companyName"
      className={formik.errors.companyName ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.companyName}
      onChange={formik.handleChange}
    />
    {formik.errors.companyName && <div className="invalid-feedback">{formik.errors.companyName}</div>}
  </div>

  <div className="form-group col-4">
    <label htmlFor="address">Address:</label>
    <input
      type="text"
      id="address"
      name="address"
      className={formik.errors.address ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.address}
      onChange={formik.handleChange}
    />
    {formik.errors.address && <div className="invalid-feedback">{formik.errors.address}</div>}
  </div>

  <div className="form-group col-4">
    <label htmlFor="city">City:</label>
    <input
      type="text"
      id="city"
      name="city"
      className={formik.errors.city ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.city}
      onChange={formik.handleChange}
    />
    {formik.errors.city && <div className="invalid-feedback">{formik.errors.city}</div>}
  </div>

  <div className="form-group col-4">
    <label htmlFor="state">State:</label>
    <input
      type="text"
      id="state"
      name="state"
      className={formik.errors.state ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.state}
      onChange={formik.handleChange}
    />
    {formik.errors.state && <div className="invalid-feedback">{formik.errors.state}</div>}
  </div>

  <div className="form-group col-4">
    <label htmlFor="postalCode">Postal Code:</label>
    <input
      type="text"
      id="postalCode"
      name="postalCode"
      className={formik.errors.postalCode ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.postalCode}
      onChange={formik.handleChange}
    />
    {formik.errors.postalCode && <div className="invalid-feedback">{formik.errors.postalCode}</div>}
  </div>

  <div className="form-group col-4">
    <label htmlFor="country">Country:</label>
    <input
      type="text"
      id="country"
      name="country"
      className={formik.errors.country ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.country}
      onChange={formik.handleChange}
    />
    {formik.errors.country && <div className="invalid-feedback">{formik.errors.country}</div>}
  </div>

  <div className="form-group col-4">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      className={formik.errors.email ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.email}
      onChange={formik.handleChange}
    />
    {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
  </div>

  <div className="form-group col-4">
    <label htmlFor="phone">Phone:</label>
    <input
      type="text"
      id="phone"
      name="phone"
      className={formik.errors.phone ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.phone}
      onChange={formik.handleChange}
    />
    {formik.errors.phone && <div className="invalid-feedback">{formik.errors.phone}</div>}
  </div>

  <div className="form-group col-12">
    <label htmlFor="comments">Comments:</label>
    <textarea
      id="comments"
      name="comments"
      rows={12}
      className={formik.errors.comments ? 'form-control is-invalid' : 'form-control'}
      value={formik.values.comments}
      onChange={formik.handleChange}
    />
    {formik.errors.comments && <div className="invalid-feedback">{formik.errors.comments}</div>}
  </div>
 <div className="col-12">
                    <input type="submit" name="" value="Send Message" className="button gradient-bg"/>
                </div>
  </div>

  
</form>

    </div>
    </div>
  );
};

export default Quote;