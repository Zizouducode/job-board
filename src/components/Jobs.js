import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <Job
        title={"Full Time Sales Associate - Sydney Boutique"}
        contractType={"CDI"}
        country={"Australia"}
        city={"Sydney"}
        className={"job-border-red job"}
      />
      <Job
        title={"Agent de Sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-border-green job"}
      />
      <Job
        title={"Responsable d'Atelier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-border-yellow job"}
      />
      <Job
        title={"Chef de Projets"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-border-blue job"}
      />
      <Job
        title={"Développeur React.js"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"job-border-salmon job"}
      />
      <Job
        title={"Sales Associate Stockholm"}
        contractType={"CDI"}
        country={"Suède"}
        city={"Stockholm"}
        className={"job-border-red job"}
      />
      <Job
        title={"Vendeur/se - Crans Montana"}
        contractType={"CDI"}
        country={"Suisse"}
        city={"Crans-Montana"}
        className={"job-border-green job"}
      />
      <Job
        title={"CRM & Data Quality Analyst"}
        contractType={"CDI"}
        country={"USA"}
        city={"New-York"}
        className={"job-border-yellow job"}
      />
      <Job
        title={"Infirmier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
        className={"job-border-blue job"}
      />
    </div>
  );
};

export default Jobs;
