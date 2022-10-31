import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <Job
        title={"Full Time Sales Associate - Sydney Boutique"}
        contractType={"CDI"}
        country={"Australia"}
        city={"Sydney"}
        className={"job-red"}
      />
      <Job
        title={"Agent de Sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-green"}
      />
      <Job
        title={"Responsable d'Atelier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-yellow"}
      />
      <Job
        title={"Chef de Projets"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-blue"}
      />
      <Job
        title={"Développeur React.js"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-salmon"}
      />
      <Job
        title={"Sales Associate Stockholm"}
        contractType={"CDI"}
        country={"Suède"}
        city={"Stockholm"}
        className={"job-red"}
      />
      <Job
        title={"Vendeur/se - Crans Montana"}
        contractType={"CDI"}
        country={"Suisse"}
        city={"Crans-Montana"}
        className={"job-green"}
      />
      <Job
        title={"CRM & Data Quality Analyst"}
        contractType={"CDI"}
        country={"USA"}
        city={"New-York"}
        className={"job-yellow"}
      />
      <Job
        title={"Infirmier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
        className={"job-blue"}
      />
    </div>
  );
};

export default Jobs;
