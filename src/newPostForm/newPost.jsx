import React from "react";
import Button from '../buttons'
import { useHistory } from "react-router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {fetchAddPost} from '../redux/actions/addPost'
import styles from "./form.module.scss";
import { ReactComponent as Arrow } from "../assets/img/arrow.svg";

const NewPost = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const message = useSelector((state) => state.addPost.message)

  const onHomeRedirect = () => {
    history.push("/");
  };
    const formik = useFormik({
      initialValues: {
        title: "",
        text: "",
        
      },
      validate: (values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        } 
        if (!values.text) {
          errors.text = "Required";
        } 
        return errors;
      },

      onSubmit: (values) => {
        dispatch(fetchAddPost(values));
        formik.resetForm();
      },
    });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.formHeader}>
        <Arrow className={styles.arrow} onClick={onHomeRedirect}/>
        new post
      </h2>
      {message && <div style={{ marginBottom: '20px' }}>{`Your post: "${message}" added`}</div>}
      
      {formik.errors.title && formik.touched.title ? (
        <div style={{ color: "red" }}>{formik.errors.title}</div>
      ) : null}
      <input
        type="text"
        placeholder="title"
        className={styles.title}
        {...formik.getFieldProps("title")}
      />
      {formik.errors.text && formik.touched.text ? (
        <div style={{ color: "red" }}>{formik.errors.text}</div>
      ) : null}
      <textarea
        placeholder="text"
        className={styles.textarea}
        {...formik.getFieldProps("text")}
      />

      <div className={styles.formBtns}>
        <Button name={"add a post"} type={"submit"} />
        <Button
          name={"cancel"}
          type={"cancel"}
          onClick={() => formik.resetForm()}
        />
      </div>
    </form>
  );
};
export default NewPost;
