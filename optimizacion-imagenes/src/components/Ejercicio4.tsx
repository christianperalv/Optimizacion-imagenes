import FigmaComponent from "./FigmaComponent";
import TestEjercicio4 from "./TestEjercicio4"; // ✅ Importamos el test

const Ejercicio4 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Ejercicio 4: Integración de Figma en React</h1>
      <p className="mb-4">El siguiente diseño ha sido exportado desde Figma y convertido en un componente React.</p>
      <FigmaComponent />
      <TestEjercicio4 /> {/* ✅ Sección del test */}
    </div>
  );
};

export default Ejercicio4;
