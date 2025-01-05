import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();
  const lose = remainingTime <= 0;
  const time = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {lose ? <h2>You lose</h2> : <h2>Your Score {score}</h2>}
      <p>
        The Target Time Was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped The Timer With <strong>{time} Seconds Left.</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
