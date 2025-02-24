import Tutorial from "./Tutorial";
import Test from "./Test"; // ✅ Importamos el test final

const Ejercicio5 = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">
                Ejercicio 5: Tutorial Interactivo
            </h1>
            <p className="mb-4">
                En este tutorial puedes documentar y presentar todos los
                ejercicios realizados. También puedes añadir notas personales y
                exportarlas a PDF.
            </p>

            {/* Renderizamos el Tutorial */}
            <Tutorial />

            {/* Sección del Test Final */}
            <h2 className="text-2xl font-bold mt-8">📌 Test Final</h2>
            <p className="mb-4">Ponte a prueba con este test de evaluación general.</p>
            <Test />
        </div>
    );
};

export default Ejercicio5;
