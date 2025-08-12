"use client"

import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Survey() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${API_URL}/survey`);
        if (!res.ok) throw new Error('Survey List not found');
        const surveyList = await res.json();
        setData(surveyList);
        return surveyList;
      } catch (error) {
        console.error(error);
        alert('There is no survey.');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {!data ? <Loading /> : (
        data.map(survey =>
          <div key={survey.id}>
            <h1>{survey.title}</h1>
            <p>{survey.createdAt}</p>
            <p>{survey.age}</p>
            <p>{survey.id}</p>
            <p>{survey.order}</p>
          </div>
        )
      )}
    </div>
  );
}