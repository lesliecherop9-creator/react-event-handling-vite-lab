function SubmitButton() {
  const mouseEntered = () => {
    console.log("Mouse is over the submit button");
  };

  const mouseLeft = () => {
    console.log("Mouse left the submit button");
  };

  return (
    <button
      onMouseEnter={mouseEntered}
      onMouseLeave={mouseLeft}
    >
      Submit
    </button>
  );
}

export default SubmitButton;