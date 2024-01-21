import { useState } from "react";
import { useContext } from "react";
import RegisterContext, {
  RegisterProvider,
} from "../../contexts/register-context";
import StepOne from "./steps/step-one";
import StepTwo from "./steps/step-two";
import StepThree from "./steps/step-three";
import StepFour from "./steps/step-four";

export default function RegisterPage() {
    return (
      <RegisterProvider>
        <RegisterView />
      </RegisterProvider>
    );
    }
  
  function RegisterView() {
    const { data, step, setStep } = useContext(RegisterContext);
  
    const renderStep = () => {
      switch (step) {
        case 1:
          return <StepOne />;
        case 2:
          return <StepTwo />;
        case 3:
          return <StepThree />;
        case 4:
          return <StepFour />;
        default:
          return <StepOne />;
      }
    };
    console.log(step);
  
    return (
      <div>
        {renderStep()}


        {/* {step < 4 && <button onClick={() => setStep(step + 1)}>Next</button>} */}
      </div>
    );
   }
  