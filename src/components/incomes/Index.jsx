import React, { useEffect, useState } from "react";
import { Data } from "../../context/data-context";
import axios from "axios";

function Index() {
  const [showCreateModal, setCreateModal] = useState(false);
  const [showEditModal, setEditModal] = useState(false);
  const [showEditId, setEditId] = useState("");
  const [info, setInfo] = useState([]);
  const id = localStorage.getItem("ID");
  const data = Data();
  const model = {
    id: "",
    name: "",
    monto: "",
    idUser: localStorage.getItem("ID"),
    type: "income",
  };

  useEffect(() => {
    getCategory();
  }, [data]);

  const getCategory = () => {
    axios
      .get(process.env.REACT_APP_MONGO + "/categorias-gastos")
      .then((info) => {
        if (info.data) {
          for (let i = 0; i < info.data.length; i++) {
            if (info.data[i].userId === id) {
              for (
                let f = 0;
                f < info.data[i].categorias_por_usuario.length;
                f++
              ) {
                if (info.data[i].categorias_por_usuario[f].idUser === id) {
                  setInfo(info.data[i].categorias_por_usuario);
                }
              }
            }
          }
        }
      });
  };

  const postCategory = () => {
    axios
      .post(process.env.REACT_APP_MONGO + "/post-category", model)
      .then((result) => {
        getCategory();
      });
    setCreateModal(false);
  };

  const putCategory = () => {
    axios
      .put(process.env.REACT_APP_MONGO + "/put-category", model)
      .then((result) => {
        getCategory();
      });
    setEditModal(false);
  };

  const deleteCategory = (id) => {
    axios
      .delete(process.env.REACT_APP_MONGO + `/delete-category/${id}`)
      .then((result) => {
        getCategory();
        console.log(result);
      });
  };

  return (
    <>
      <div className="p-5 md:p-10">
        <div className="flex flex-row justify-center">
          <div className="w-full md:w-1/2 flex flex-row flex-wrap items-center">
            <p className="w-full md:w-1/2 text-center text-4xl md:mb-0 mb-5">
              Mis ingresos
            </p>
            <button
              className="w-full md:w-1/2 flex justify-center bg-[#DCDAE4] hover:bg-[#5C509B] hover:text-white rounded"
              onClick={() => setCreateModal(true)}
            >
              Nuevo ingreso
            </button>
          </div>
        </div>
      </div>

      {showCreateModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-6 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl md:text-3xl">Agregar nuevo ingreso</h3>
                </div>
                {/*body*/}
                <div className="p-5">
                  <div className="flex flex-col mb-5">
                    <label className="mb-3 font-semibold">Descripción:</label>
                    <input
                      onChange={(e) => {
                        model.name = e.target.value;
                      }}
                      className="form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border-2 border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-[#5C509B] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-3 font-semibold">Monto:</label>
                    <input
                      onChange={(e) => {
                        model.monto = e.target.value;
                      }}
                      className="form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border-2 border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-[#5C509B] focus:outline-none"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 bg-transparent uppercase px-6 py-3 text-sm outline-none rounded hover:bg-red-500 hover:text-white m-1"
                    type="button"
                    onClick={() => setCreateModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-emerald-500 bg-transparent uppercase px-6 py-3 text-sm outline-none rounded hover:bg-emerald-500 hover:text-white m-1"
                    type="button"
                    onClick={() => postCategory()}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showEditModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-6 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl md:text-3xl">Editar ingreso</h3>
                </div>
                {/*body*/}
                <div className="p-5">
                  <div className="flex flex-col mb-5">
                    <label className="mb-3 font-semibold">Descripción:</label>
                    <input
                      onChange={(e) => {
                        model.name = e.target.value;
                      }}
                      className="form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border-2 border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-[#5C509B] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-3 font-semibold">Monto:</label>
                    <input
                      onChange={(e) => {
                        model.monto = e.target.value;
                      }}
                      className="form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border-2 border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-[#5C509B] focus:outline-none"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 bg-transparent uppercase px-6 py-3 text-sm outline-none rounded hover:bg-red-500 hover:text-white m-1"
                    type="button"
                    onClick={() => setEditModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-emerald-500 bg-transparent uppercase px-6 py-3 text-sm outline-none rounded hover:bg-emerald-500 hover:text-white m-1"
                    type="button"
                    onClick={() => {
                      model.id = showEditId;
                      putCategory();
                    }}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="inline-flex flex-wrap p-5 md:p-10 justify-center">
        {info.length > 0 &&
          info.map((result, index) =>
            result && result.type === "income" ? (
              <div
                key={index}
                className="bg-white shadow-lg w-full md:w-1/5 rounded-lg p-5 mb-5 md:m-5"
              >
                <div className="bg-white rounded mb-5">
                  <p className="text-2xl font-semi-bold">{result.name}</p>
                  <p className="font-light"><span>$</span>{result.monto}</p>
                </div>
                <div className="flex flex-row flex-wrap justify-end">
                  <button
                    className="text-red-500 bg-transparent uppercase px-6 py-3 text-sm outline-none rounded hover:bg-red-500 hover:text-white m-1"
                    onClick={() => {
                      deleteCategory(result._id);
                    }}
                  >
                    Eliminar
                  </button>
                  <button
                    className="text-[#5C509B] bg-transparent uppercase px-6 py-3 text-sm outline-none rounded hover:bg-[#5C509B] hover:text-white m-1"
                    type="button"
                    onClick={() => {
                      setEditModal(true);
                      setEditId(result._id);
                    }}
                  >
                    Editar
                  </button>
                </div>
              </div>
            ) : null
          )}
      </div>
    </>
  );
}

export default Index;
