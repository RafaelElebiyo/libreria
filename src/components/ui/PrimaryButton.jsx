export function PrimaryButton({ children, type = 'button' }) {
  return (
    <button className="primary-btn" type={type}>
      {children}
    </button>
  );
}
