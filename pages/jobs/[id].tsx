import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";

import Layout from "../../components/layout";

import utilStyles from "../../styles/utils.module.css";

type JobData = { id: number; title: string; description: string; }

export const getServerSideProps: GetServerSideProps<{job: JobData}> = async ({ params: { id } }) => {
  const res = await axios.get<JobData>(`https://my-json-server.typicode.com/johanquiroga/mock-db/jobs/${id}`);
  const jobData = res.data;
  return {
    props: {
      job: jobData,
    }
  }
}

function Job({ job }: { job: JobData }) {
  return (
    <Layout>
      <Head>
        <title>{job.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{job.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </article>
    </Layout>
  )
}

export default Job