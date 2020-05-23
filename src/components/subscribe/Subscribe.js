import React, { Fragment, useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = (e) => {
      e.preventDefault();
      console.log('email to subscribe', email);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="yourname@email.com"
          value={email}
          onChange={onChange}
        />
        <button>Subscribe</button>
      </form>
    </Fragment>
  );
};

export default Subscribe;
