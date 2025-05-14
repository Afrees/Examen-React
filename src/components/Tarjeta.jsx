function Tarjeta({ nombre, profesion, imagen }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden p-4 hover:scale-105 transition duration-300 mx-auto">
      <img 
        src={imagen} 
        alt={`Foto de ${nombre}`} 
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">{nombre}</h2>
        <p className="text-gray-600">{profesion}</p>
      </div>
    </div>
  );
}
export default Tarjeta;
