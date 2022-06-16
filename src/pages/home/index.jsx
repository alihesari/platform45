import "./style.scss";
import Layout from "../../layout/page";
import { useState } from "react";
import Panel from "./components/panel";
import Form from "./components/form";

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggleShowPanel = () => {
    return new Promise((resolve, reject) => {
      const status = !open;
      setOpen(status);
      resolve(status);
    });
  };

  return (
    <Layout>
      <div className="page-container">
        <Panel open={open} toggleShowPanel={toggleShowPanel} />
        <Form open={open} />
      </div>
    </Layout>
  );
}
