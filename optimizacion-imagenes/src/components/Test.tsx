import { useState } from "react";

const questions = [
    {
        question: "¿Cuál es el formato más eficiente para imágenes en la web?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Qué herramienta permite diseñar interfaces web?",
        options: ["Photoshop", "Figma", "GIMP"],
        answer: "Figma",
    },
    {
        question: "¿Cuál es la API de JavaScript utilizada para Lazy Loading?",
        options: ["Fetch API", "Intersection Observer", "Canvas API"],
        answer: "Intersection Observer",
    },
    {
        question: "¿Qué método se usa en la API Canvas para obtener datos de imagen?",
        options: ["getImageData()", "setTimeout()", "fetch()"],
        answer: "getImageData()",
    },
];

const Test = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));
    const [score, setScore] = useState<number | null>(null);

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
        setScore(correct);
        alert(`✅ Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Test Final</h2>

            {questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`mr-2 px-4 py-2 mt-2 rounded ${
                                selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-300"
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

export default Test;
