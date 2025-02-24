import { useState } from "react";

const questions = [
    {
        question: "¿Cuál de estos formatos soporta transparencia?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "PNG",
    },
    {
        question: "¿Qué formato es más eficiente en la web?",
        options: ["PNG", "JPEG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Qué formato es ideal para gráficos vectoriales?",
        options: ["JPEG", "SVG", "PNG", "WebP"],
        answer: "SVG",
    },
    {
        question: "¿Cuál de estos formatos usa compresión con pérdida?",
        options: ["JPEG", "PNG", "SVG", "TIFF"],
        answer: "JPEG",
    },
    {
        question: "¿Cuál ofrece mejor compresión manteniendo buena calidad?",
        options: ["JPEG", "WebP", "PNG", "BMP"],
        answer: "WebP",
    },
];

const TestEjercicio1 = () => {
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
        alert(`Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                Test sobre Formatos de Imagen
            </h2>

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
                    ✅ Respuestas correctas: {score} de {questions.length}
                </p>
            )}
        </div>
    );
};

export default TestEjercicio1;
