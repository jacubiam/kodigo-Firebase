import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase";

const ProductPage = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const authen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`Logged`);
      } else {
        navigate('/login');
        console.log(`Signed out`);
      }
      setLoading(false);
    });

    return () => {
      authen();
    };

  }, [auth, navigate]);

  const logOut = async () => {
    await signOut(auth);
    navigate('/login');
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>ProductPage (Protected)</h1>
      <button type="button" onClick={logOut}>Signed out</button>
    </>
  );
};

export default ProductPage;