import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <title>hola</title>
        <meta name="description" content="Fiapp es la mejor app para tiendas de barrio. Optimiza tu inventario, controla tus ventas y gestiona clientes desde un solo lugar. Fácil de usar, eficiente y confiable. ¡Empieza gratis hoy!"/>
        <meta property="og:title" content="Fiapp - Solución Integral para Tu Tienda"/>
        <meta property="og:description" content="Gestiona tu inventario, controla tus ventas, administra tus clientes y optimiza tu tienda. ¡Descúbrelo ahora!"/>
        <meta property="og:image" content="https://fiapp.com.co/IconFiapp.png"/>
        <meta property="og:url" content="https://fiapp.com.co"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="es_CO"/>
        <meta property="og:site_name" content="Fiapp"/>
        <meta property="og:author" content="Fiapp Team"/>
        <meta property="og:email" content="esteban@fiapp.com.co"/>
        <meta property="og:country-name" content="Colombia"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Fiapp - Solución Integral para Tiendas"/>
        <meta name="twitter:description" content="Gestiona tu inventario, controla ventas y mejora la productividad de tu tienda con Fiapp. ¡Empieza gratis!"/>
        <meta name="twitter:image" content="https://fiapp.com.co/IconFiapp.png"/>
        <meta name="twitter:site" content="@FiappApp"/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
