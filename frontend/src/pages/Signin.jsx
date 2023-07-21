import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import CurrentUserContext from "../contexts/CurrentsUsers";

import signinimage from "../assets/image/Signin.jpg";

export default function Login() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidFields, setInvalidFields] = useState([]);
  const [invalidLogin, setInvalidLogin] = useState("");
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const validationFilters = {
      email: /^[-_.a-z0-9]+@[-_a-z0-9]+(\.[a-z]{2,4})?\.[a-z]{2,6}$/i,
      password: /^\S+$/i,
    };
    const fields = {
      email,
      password,
    };
    const errors = new Set();

    for (const field in fields) {
      if (!fields[field].match(validationFilters[field])) {
        errors.add(field);
      } else {
        errors.delete(field);
      }
    }
    setInvalidFields([...errors]);

    if (errors.size === 0) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/login`, fields)
        .then((response) => {
          const {
            data: { user },
          } = response;
          let username = null;
          if (user.firstname) {
            if (user.lastname) username = `${user.firstname} ${user.lastname}`;
            else username = user.firstname;
          } else if (user.lastname) username = user.lastname;
          setCurrentUser({
            id: user.id,
            username,
            isAdmin: user.role === 1,
            isUser: user.role === 0,
          });
        })
        .catch((err) => {
          setInvalidLogin(err.response.data.error);
        });
    }
  };

  return (
    <>
      {Object.keys(currentUser).length && <Navigate to="/" />}
      <div className="signin">
        <form className="signinbox" onSubmit={handleLogin} noValidate>
          <h2>
            {invalidLogin && <span className="error">{invalidLogin}</span>}
          </h2>
          <div>
            <label htmlFor="signin-mail">
              {invalidFields.includes("email") && (
                <span className="error">Veuillez saisir une adresse mail</span>
              )}
            </label>
            <input
              id="signin-mail"
              name="email"
              type="email"
              value={email}
              placeholder="Adresse Mail"
              required
              onChange={handleMail}
              className="signinfield"
            />
          </div>
          <div>
            <label htmlFor="signin-password">
              {invalidFields.includes("password") && (
                <span className="error">Veuillez saisir un mot de passe</span>
              )}
            </label>
            <input
              id="signin-password"
              name="password"
              type="password"
              value={password}
              placeholder="Mot De Passe"
              required
              onChange={handlePassword}
              className="passwordfield"
            />
          </div>
          <button type="submit" className="signin-button">
            Connexion
          </button>
        </form>
        <div className="signin-image">
          <img src={signinimage} alt="Connexion" className="signin-image" />
        </div>
      </div>
    </>
  );
}
