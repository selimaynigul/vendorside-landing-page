import TendersPageContainer from "../../containers/tenders";

export default async function Tenders() {
  const data = await getData();
  return <TendersPageContainer data={data.result} />;
}

const getData = async () => {
  const res = await fetch(
    "http://vendorside-api.medyasoft-innolab.com/api/employmentApply/list-employmentApply/publishOnPortal"
  );
  return await res.json();
};
