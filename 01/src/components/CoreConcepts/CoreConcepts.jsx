import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcepts";

export default function CoreConsepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
