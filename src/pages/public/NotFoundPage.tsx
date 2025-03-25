import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="bg-blue-50 text-gray-800 font-sans m-0 p-0 text-center">
      <header className="bg-[#004b60] text-white p-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Pescadería Mar y Sabor</h1>
      </header>

      <div className="container p-12 sm:p-8">
        <img
          src="./image/404.png"
          alt="Pescado en la red"
          className="w-48 mx-auto mb-6"
        />
        <h2 className="text-3xl sm:text-4xl mb-4">¡Vaya! Página no encontrada</h2>
        <p className="text-lg sm:text-xl mb-6">
          La página que buscas no está disponible. Tal vez se haya escapado como un pez.
        </p>
        <a
          href="/"
          className="bg-[#004b60] text-white py-2 px-6 text-xl rounded-md hover:bg-[#002e3e] transition-colors"
        >
          Volver al inicio
        </a>
      </div>

      <footer className="bg-[#004b60] text-white p-3 fixed w-full bottom-0">
        <p>&copy; 2025 Pescadería Mar y Sabor | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
