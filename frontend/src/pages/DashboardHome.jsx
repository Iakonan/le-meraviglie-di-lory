import DashboardLayout from "../components/DashboardLayout";

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-primary-500 mb-6">📊 Riepilogo Ordini</h1>
      
      {/* Sezione statistiche rapide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">📦 Ordini Totali</h3>
          <p className="text-3xl font-bold text-primary-500">35</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">✅ Ordini Completati</h3>
          <p className="text-3xl font-bold text-green-500">28</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">⏳ In Attesa</h3>
          <p className="text-3xl font-bold text-yellow-500">7</p>
        </div>
      </div>

      {/* Area per future funzionalità */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">📢 Prossimamente</h3>
        <p className="text-gray-600">Aggiungeremo nuove statistiche e funzionalità avanzate!</p>
      </div>
    </DashboardLayout>
  );
}
