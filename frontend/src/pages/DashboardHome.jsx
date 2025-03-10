import DashboardLayout from "../components/DashboardLayout";

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl md:text-5xl font-bold mb-6">📊 Riepilogo Ordini</h1>
      
      {/* Sezione statistiche rapide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2-xl font-bold text-black">📦 Ordini Totali</h3>
          <p className="text-4xl font-bold text-black">35</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2-xl font-bold text-black">✅ Ordini Completati</h3>
          <p className="text-4xl font-bold text-black">28</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2-xl font-bold text-black">⏳ In Attesa</h3>
          <p className="text-4xl font-bold text-black">7</p>
        </div>
      </div>

      {/* Area per future funzionalità */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2-xl font-semibold text-black">📢 Prossimamente</h3>
        <p className="text-black">Aggiungeremo nuove statistiche e funzionalità avanzate!</p>
      </div>
      
    </DashboardLayout>
  );
}
