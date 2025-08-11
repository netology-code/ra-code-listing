export function LikeButton() {
  const handleClick = (evt) => {
    console.log("LikeButton: клик", evt);
    // здесь можно использовать evt.target, evt.currentTarget и т.д.
  };

  return (
    <button type="button" onClick={handleClick}>
      Like
    </button>
  );
}
