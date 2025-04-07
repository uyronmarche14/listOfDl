import React from "react";
import CS from "@/app/pages/deansLister";
import datacs from "@/data/csdata.json";

export default function CSDepartment() {
  return <CS data={datacs} />;
}
