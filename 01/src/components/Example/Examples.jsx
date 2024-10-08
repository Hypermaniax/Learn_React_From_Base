import TabButton from "../TabButton";
import { EXAMPLES } from "../../data";
import React from 'react'
import Section from '../Section'
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = React.useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic ? <p>Please Selecet The Topic</p> : null}
      {selectedTopic ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ) : null}
      {/* BISA JUGA MENGUNAKAN &&
    {!selectedTopic && <p>Please Selecet The Topic</p}
    {selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ) }
      */}
    </Section>
  );
}
