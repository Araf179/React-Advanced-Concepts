import { useState } from "react";
import { ControlledForm } from "./components/controlled-form";
import { ControlledModal } from "./components/controlled-modal";
import { UncontrolledForm } from "./components/uncontrolled-form";
import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-flow";

const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: "TestName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 30 })}>Next</button>
    </>
  );
};
const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: You qualify for the gift!</h1>
      <button onClick={() => next({})}>Next</button>
    </>
  );
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <>
        <button onClick={() => setShowModal(!showModal)}>
          {" "}
          {showModal ? "Hide Modal" : "Show Modal"}{" "}
        </button>
        <ControlledModal
          shouldShow={showModal}
          close={() => setShowModal(false)}
        >
          <h1>I am the body of the modal!</h1>
        </ControlledModal>
      </>
      <br />
      <>
        <UncontrolledFlow
          onDone={(data) => {
            console.log(data);
            alert("Onboarding Flow Done!");
          }}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledFlow>
      </>
      <br />
      <>
        <ControlledFlow currentStepIndex={currentStepIndex} onNext={next}>
          <StepOne />
          <StepTwo />
          {data.age > 25 && <StepThree />}
        </ControlledFlow>
      </>
    </>
  );
}

export default App;
