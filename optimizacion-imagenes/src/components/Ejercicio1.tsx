import ImageOptimizer from "./ImageOptimizer";
import TestEjercicio1 from "./TestEjercicio1"; // ✅ Importamos el test

const Ejercicio1 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Ejercicio 1: Optimización de Imágenes</h1>
      <p className="mb-4">Sube una imagen y conviértela a diferentes formatos.</p>
      <ImageOptimizer />
      <TestEjercicio1 /> {/* ✅ Sección del test */}
    </div>
  );
};

export default Ejercicio1;
