"use client"

import { useEffect, useState } from "react";
import Loading from "./loading";

interface ISurvey {
  id: number;
  createdAt: string;
  updatedAt: string
  title: string;
  description?: string;
  age: number;
  term: number;
  isActive: boolean;
  invalidAt?: string;
  order: number;
  isMain: boolean;
  isBasic: boolean;
  startSending: boolean;
}

export default function Survey() {
  const [data, setData] = useState<ISurvey[] | undefined>();
  async function fetchData(): Promise<ISurvey[] | undefined> {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${url}/survey`);
    if (!res.ok) throw new Error("error");
    const result = await res.json();
    return result;
  }
  useEffect(() => {
    fetchData().then(result => {
      setData(result);
    });
  }, []);
  // const data = [
  //   {
  //     "id": 1,
  //     "createdAt": "2025-08-12T00:27:46.814Z",
  //     "updatedAt": "2025-08-12T00:27:46.814Z",
  //     "title": "test",
  //     "description": null,
  //     "age": 2,
  //     "term": 1,
  //     "isActive": true,
  //     "invalidAt": null,
  //     "order": 1,
  //     "IsMain": false,
  //     "IsBasic": false,
  //     "startSending": false
  //   },
  //   {
  //     "id": 2,
  //     "createdAt": "2025-08-12T00:27:46.814Z",
  //     "updatedAt": "2025-08-12T00:27:46.814Z",
  //     "title": "test2",
  //     "description": null,
  //     "age": 3,
  //     "term": 2,
  //     "isActive": true,
  //     "invalidAt": null,
  //     "order": 2,
  //     "IsMain": false,
  //     "IsBasic": false,
  //     "startSending": false
  //   },
  //   {
  //     "id": 3,
  //     "createdAt": "2025-08-12T00:27:46.814Z",
  //     "updatedAt": "2025-08-12T00:27:46.814Z",
  //     "title": "test3",
  //     "description": null,
  //     "age": 4,
  //     "term": 3,
  //     "isActive": true,
  //     "invalidAt": null,
  //     "order": 3,
  //     "IsMain": false,
  //     "IsBasic": false,
  //     "startSending": false
  //   }
  // ];

  return (
    <>
      {data ? (
        <div>
          <table style={{width: '50%'}}>
            <thead>
              <tr>
                <th>
                  Title
                </th>
                <th>
                  CreatedAt
                </th>
                <th>
                  Age
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((survey) => {
                return (
                  <tr key={survey.id}>
                    <th>{survey.title}</th>
                    <th>{survey.createdAt}</th>
                    <th>{survey.age}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}