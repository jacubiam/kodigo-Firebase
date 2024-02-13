import SigninForm from "../components/SigninForm";

const HomePage = () => {

  return (
    <>
      <h1 className="text-center">Welcome, Are you ready to Sign in?!</h1>
      <section className="container d-flex justify-content-center">
        <SigninForm/>
      </section>
    </>
  );
};

export default HomePage;