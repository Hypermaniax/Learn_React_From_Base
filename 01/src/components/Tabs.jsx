export default function Tabs({ button, children ,ButtonContainer}) {
    // so we can use the tabs with another content if we want the tab
    // like if we want to use in another page or anything
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
