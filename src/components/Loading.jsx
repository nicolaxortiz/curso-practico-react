import React from "react";
import '../styles/Loading.css'

function Loading() {
  return (
    <div className="loading-page">
        <h1 className="loading-title">Estamos cargando la pagina</h1>
        <h4 className="loading-p">Ten paciencia...</h4>
        <h4 className="loading-smile">:)</h4>
    </div>
  )
}

export {Loading}