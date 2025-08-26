export function RestrictedArea({ allowed, children }) {

  return (
    <>
      {allowed ? children : (
        <p>Доступ к разделу закрыт</p>
      )}
    </>
  )
}