
import { useReducer, useState } from "react";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { initialState, orderReducer } from "../reducers/orderReducer";
import StepOne from "../components/orderSteps/StepOne.jsx";

export default function OrderForm() {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <StepOne state={state} dispatch={dispatch} key={0} />,
    // Qui aggiungeremo gli altri step in seguito
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="relative min-h-screen bg-primary-500 flex flex-col items-center">
      <Sidebar />
      <header className="text-center py-12 w-full px-20 bg-secondary-500 mb-5">
        <h1 className="text-4xl font-bold text-black">Ordina la tua creazione personalizzata</h1>
        <p className="text-lg text-black mt-2">Segui i passaggi per completare il tuo ordine</p>
      </header>

      <div className="w-full px-8">
        {steps[currentStep]}
      </div>

      <div className="flex justify-between items-center w-full max-w-6xl px-6 mt-10 mb-16">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded-md ${
            currentStep === 0
              ? "bg-gray-300"
              : "bg-secondary-500 text-white hover:bg-text-500"
          } transition`}
        >
          <FaCaretLeft />
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-text-500 transition"
        >
          <FaCaretRight />
        </button>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
