import { useState } from "react";

const questions = [
    {
        question: "¿Qué hace Lazy Loading?",
        options: [
            "Carga todas las imágenes al cargar la página",
            "Carga imágenes solo cuando son visibles",
            "Reduce la calidad de las imágenes",
        ],
        answer: "Carga imágenes solo cuando son visibles",
    },
    {
        question: "¿Qué API de JavaScript se usa para Lazy Loading?",
        options: ["Fetch API", "Intersection Observer", "Canvas API"],
        answer: "Intersection Observer",
    },
    {
        question: "¿Cuál es una ventaja de usar Lazy Loading?",
        options: [
            "Mejora la velocidad de carga inicial",
            "Aumenta el tamaño del archivo",
            "Hace la página más lenta",
        ],
        answer: "Mejora la velocidad de carga inicial",
    },
    {
        question: "¿Cuál es el atributo HTML nativo para Lazy Loading?",
        options: ["data-lazy", "loading", "src-lazy"],
        answer: "loading",
    },
    {
        question:
            "¿Qué valor debes usar en el atributo 'loading' para Lazy Loading?",
        options: ["lazy", "eager", "delayed"],
        answer: "lazy",
    },
];

const TestEjercicio2 = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
        Array(questions.length).fill("")
    );
    const [score, setScore] = useState<number | null>(null);

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter(
            (ans, i) => ans === questions[i].answer
        ).length;
        setScore(correct);
        alert(
            `✅ Has respondido correctamente ${correct} de ${questions.length}`
        );
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Test sobre Lazy Loading</h2>

            {questions.map((q, i) => (
                <div key={i} className="mb-6">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`mr-2 px-4 py-2 mt-2 rounded ${
                                selectedAnswers[i] === opt
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300"
                            }`}
                            onClick={() => handleSelect(i, opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ))}

            <button
                onClick={checkAnswers}
                className="bg-green-500 text-white px-6 py-2 mt-4 rounded"
            >
                Verificar respuestas
            </button>

            {score !== null && (
                <p className="mt-4 text-xl font-bold">
                    🎉 Respuestas correctas: {score} de {questions.length}
                </p>
            )}
        </div>
    );
};

export default TestEjercicio2;
