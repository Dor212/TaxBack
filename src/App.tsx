import TaxBackQuiz from "./components/TaxBackQuiz";

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 text-gray-800 px-4 py-10" style={{ backgroundImage: 'url("/backgrounds/tax-bg.png")', backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="bg-white/90 rounded-2xl shadow-xl max-w-4xl mx-auto text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-yellow-300">
          TaxBack – בדיקת זכאות להחזר מס
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-sans">
          אל תפספס את מה שמגיע לך.<br />
          בדוק תוך דקה אם אתה זכאי להחזר מס מהמדינה.<br />
          זה מהיר, חינמי וללא התחייבות.
        </p>
        <div className="flex justify-center">
          <TaxBackQuiz />
        </div>
      </div>
    </div>
  );
}
