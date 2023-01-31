import { React, useEffect, useState } from 'react';
import apiClient from '../../../services/api.service';

export default function CardTest() {
  const [test, setTest] = useState(null);
  const getAllTest = async () => {
    setTest(await apiClient('/tests'));
  };
  useEffect(() => {
    getAllTest();
  }, []);
  return (
    <>
      {test !== null
        ? test.data.map((e) => (
            <div
              key={e.id}
              className="w-full rounded-lg shadow-md hover:shadow-xl  p-4 content-center "
            >
              <div className="flex justify-center">
                <img
                  src={process.env.REACT_APP_API_URL + '/test/' + e.image}
                  className="mb-2"
                  alt="..."
                ></img>
              </div>
              <div>
                <h4 className="text-md font-semibold text-slate-800 text-center">
                  {e.tag}
                </h4>

                <h4 className="text-sm py-2 text-center">
                  {e.duration + ' min'}
                </h4>
                <p className="text-xs text-center">{e.description}</p>
                {e.status === 'active' && (
                  <a href={e.link} className="flex justify-center">
                    <button className="px-4 py-2 text-sm text-blue-500 rounded">
                      Empezar Test
                    </button>
                  </a>
                )}
                {e.status === 'done' && (
                  <p className="flex justify-center items-center px-4 py-2 text-sm text-red-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                    No pasó
                  </p>
                )}
                {e.status === 'fail' && (
                  <p className="flex justify-center items-center px-4 py-2 text-sm text-emerald-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Aprobado
                  </p>
                )}
              </div>
            </div>
          ))
        : false}
    </>
  );
}
