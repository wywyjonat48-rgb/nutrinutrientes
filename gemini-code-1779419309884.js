import React, { useState } from 'react';

const NutriNutrientePro = () => {
  const [inputs, setInputs] = useState({ genero: 'hombre', edad: 48, peso: 84, altura: 166, dias: 4 });
  const [result, setResult] = useState(null);

  const calculate = () => {
    // Cálculo TMB Harris-Benedict
    let tmb = (10 * inputs.peso) + (6.25 * inputs.altura) - (5 * inputs.edad) + (inputs.genero === 'hombre' ? 5 : -161);
    // Ajuste por factor de actividad
    let factor = 1.2 + (inputs.dias * 0.1); 
    let calorias = Math.round(tmb * factor);
    
    setResult({
      calorias,
      proteina: Math.round(inputs.peso * 2.2),
      micronutrientes: inputs.genero === 'hombre' ? "Magnesio, Zinc y Vitamina D" : "Calcio, Hierro y Magnesio",
      prevencion: inputs.dias > 4 ? "Enfoque en descarga articular" : "Enfoque en movilidad dinámica"
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white p-6 font-sans">
      <h1 className="text-3xl font-bold text-[#39ff14] mb-2">NutriNutriente Pro</h1>
      <p className="text-gray-400 mb-6">Calculadora técnica de rendimiento</p>
      
      <div className="space-y-4 bg-[#151c2f] p-6 rounded-xl border border-[#39ff14]/20">
        <select className="w-full p-3 bg-black rounded border border-gray-700" onChange={(e) => setInputs({...inputs, genero: e.target.value})}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <input type="number" placeholder="Peso (kg)" className="w-full p-3 bg-black rounded" onChange={(e) => setInputs({...inputs, peso: e.target.value})} />
        <input type="number" placeholder="Estatura (cm)" className="w-full p-3 bg-black rounded" onChange={(e) => setInputs({...inputs, altura: e.target.value})} />
        <input type="number" placeholder="Días de gimnasio" className="w-full p-3 bg-black rounded" onChange={(e) => setInputs({...inputs, dias: e.target.value})} />
        
        <button onClick={calculate} className="w-full bg-[#39ff14] text-black font-bold py-4 rounded-lg mt-2 uppercase tracking-wider">Calcular Plan</button>
      </div>

      {result && (
        <div className="mt-8 p-6 bg-[#39ff14]/5 border border-[#39ff14]/30 rounded-xl space-y-3">
          <h3 className="text-[#39ff14] font-bold border-b border-[#39ff14]/20 pb-2">Resultados Obtenidos</h3>
          <p>Calorías diarias: <span className="font-bold text-[#39ff14]">{result.calorias} kcal</span></p>
          <p>Proteína recomendada: <span className="font-bold text-[#39ff14]">{result.proteina}g</span></p>
          <p className="text-sm">Micronutrientes clave: {result.micronutrientes}</p>
          <p className="text-sm text-gray-400 italic">Prevención: {result.prevencion}</p>
        </div>
      )}
    </div>
  );
};

export default NutriNutrientePro;