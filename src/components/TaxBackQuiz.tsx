import { useState } from "react";

const questions = [
    "האם עבדת בין השנים 2018 ל־2024?",
    "האם החלפת מקום עבודה בשנים האחרונות?",
    "האם קיבלת דמי אבטלה באחת השנים?",
    "האם למדת תואר או קורס מקצועי?",
    "האם שילמת לקופת גמל או ביטוח פרטי?",
    "האם היית עצמאי באחת השנים?",
];

export default function TaxBackQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [completed, setCompleted] = useState(false);

    const handleAnswer = (answer: boolean) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);
        if (step + 1 < questions.length) {
            setStep(step + 1);
        } else {
            setCompleted(true);
        }
    };

    const yesCount = answers.filter(Boolean).length;

    return (
        <div className="text-center max-w-xl p-6 bg-white/10 rounded-xl shadow-xl">
            <p className="mb-6 text-lg text-gray-700">
                בדוק עכשיו תוך 10 שניות אם גם לך מגיע החזר מס
            </p>

            {!completed && (
                <div>
                    <p className="mb-4 text-xl">{questions[step]}</p>
                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white"
                            onClick={() => handleAnswer(true)}
                        >
                            כן
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white"
                            onClick={() => handleAnswer(false)}
                        >
                            לא
                        </button>
                    </div>
                </div>
            )}

            {completed && (
                <div className="mt-6">
                    <p className="text-xl mb-2 text-green-400">🎉 יש סיכוי שמגיע לך החזר מס!</p>
                    <p className="text-md mb-4">ענית בחיוב על {yesCount} מתוך {questions.length} שאלות.</p>
                    <p className="text-md mb-4">בוא נדבר ונסביר איך מתחילים בתהליך פשוט ומהיר.</p>
                    <a
                        href="https://wa.me/972501234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white"
                    >
                        דברו איתנו ב־WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}
