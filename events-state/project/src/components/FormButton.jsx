export function FormButton() {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("FormButton: отправка (preventDefault + stopPropagation)");
  };

  return (
    <button type="button" onClick={handleClick}>
      Отправить
    </button>
  );
}
