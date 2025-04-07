import React from "react";
import CS from "@/app/pages/deansLister";
import datais from "@/data/isdata.json";

export default function ISDepartment() {
  return <CS data={datais} />;
}
