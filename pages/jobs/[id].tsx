import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';

import Layout from "../../components/layout";

import utilStyles from "../../styles/utils.module.css";

type JobData = { id: number; title: string; description: string; }

export const getStaticPaths: GetStaticPaths = async () => {
  // We could fetch current job posts and pass in those ids as paths so they get pre-generated in build time
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps<{job: JobData}> = async ({ params: { id } }) => {
  const res = await axios.get<JobData>(`https://my-json-server.typicode.com/johanquiroga/mock-db/jobs/${id}`);
  const jobData = res.data;
  return {
    props: {
      job: jobData,
    },
    revalidate: 1
  }
}

function Job({ job }: { job: JobData }) {
  const { isFallback } = useRouter();

  return (
    <Layout>
      <Head>
        <title>{isFallback ? 'Loading...' : job.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{!isFallback ? job.title : <Skeleton />}</h1>
        <div>{!isFallback ? job.description : <Skeleton count={5} />}</div>
      </article>
    </Layout>
  )
}

export default Job