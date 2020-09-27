import Layout, { siteTitle } from '../components/layout';
import RegisterForm from "../components/register-form";

const wait = (time = 0) => new Promise((resolve) => setTimeout(resolve, time));

export default function RegisterPage() {
  return (
    <Layout>
      <article>
      <h1>Sign Up</h1>
      <RegisterForm
        onSubmit={async (formData) => {
          await wait(4000);
          console.log(formData);
        }}
      />
      </article>
    </Layout>
  );
}
