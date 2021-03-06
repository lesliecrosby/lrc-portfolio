import React, { Component } from "react"
import styled from "styled-components"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

import {
  colors
} from "../components/global-styles"

const FormWrap = styled.div`
  background: ${colors.white};
  border-top: 5px solid ${colors.coral};
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${colors.gray500};

  label {
    display: block;
    margin-top: 1rem;
  }

  .error {
    color: ${colors.coral};
    font-size: 0.7rem;
    margin-top: 2px;
    font-style: italic;
  }

  /* TODO: change to classes */
  #author, #comment, #email, #url {
    border: none;
    background: ${colors.gray200};
    margin: 0.5rem 0 0;
    padding: 0.5rem;
    border-bottom: 3px solid ${colors.gray200};
    &:focus {
      outline: none;
      border-bottom: 3px solid ${colors.sage};
    }
  }

  #comment {
    width: 100%;
  }

  input[type="submit"] {
    margin-top: 2rem;
  }
`

const FormHeading = styled.div`
  font-weight: bold;
  color: ${colors.coral};
  margin-bottom: 1.5rem;
`

const Message = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  font-style: italic;
`

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmitting: false,
      formSubmitted: false,
    }
  }
  render() {
    const CommentSchema = Yup.object().shape({
      author_name: Yup.string()
        .min(2, "Please provide a valid name")
        .max(245, "The name is too long")
        .required("This field is required"),
      author_url: Yup.string().url(),
      content: Yup.string()
        .min(2, "Please include a comment")
        .max(65525, "Your comment exceeds the maximum length")
        .required("This field is required"),
      author_email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
    })
    const postId = this.props.postId
    return (
      <FormWrap id="respond">
        <FormHeading>
          Leave a Reply
        </FormHeading>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <Formik
          initialValues={{
            post: postId,
            parent: 0,
            author_name: "",
            author_url: "",
            author_email: "",
            content: "",
          }}
          validationSchema={CommentSchema}
          onSubmit={values => {
            this.setState({ isSubmitting: true })
            // same shape as initial values
            let target = `http://lesliercrosby.local/wp-json/wp/v2/comments`
            fetch(target, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then(response => response.json())
              .then(data => {
                console.log(JSON.stringify(data))
                this.setState({
                  isSubmitting: false,
                  formSubmitted: true,
                })
              })
              .catch(error => {
                console.error(error)
                this.setState({ isSubmitting: false })
              })
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="comment">Comment*</label>
                <Field
                  name="content"
                  id="comment"
                  component="textarea"
                  rows="8"
                />
                {errors.content && touched.content ? (
                  <div className="error">{errors.content}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="author">Name*</label>
                <Field
                  name="author_name"
                  id="author"
                  size="30"
                />
                {errors.author_name && touched.author_name ? (
                  <div className="error">{errors.author_name}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <Field
                  name="author_email"
                  id="email"
                  type="email"
                  size="30"
                />
                {errors.author_email && touched.author_email ? (
                  <div className="error">{errors.author_email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="url">Website</label>
                <Field
                  name="author_url"
                  id="url"
                  type="url"
                  size="30"
                />
                {errors.author_url && touched.author_url ? (
                  <div className="error">{errors.author_url}</div>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={
                  this.state.isSubmitting || this.state.formSubmitted
                    ? true
                    : false
                }
              >
                Post Comment
              </button>
              {this.state.formSubmitted ? (
                <Message>
                  Thanks! Your comment is awaiting moderation.
                </Message>
              ) : (
                ""
              )}
            </Form>
          )}
        </Formik>
      </FormWrap>
    )
  }
}

export default CommentForm