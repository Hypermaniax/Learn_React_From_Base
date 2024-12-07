import { forwardRef } from "react";


const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result}</h2>
      <p>
        the target was <strong>{targetTime} second.</strong>
      </p>
      <p>
        you stopped the time with <strong>X seconds left</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal
