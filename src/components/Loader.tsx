const NAME = "Daniel Biampika";

export function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-wrapper">
        <div className="loader" />
        {NAME.split('').map((char, index) => (
          <span
            key={index}
            className={`loader-letter ${char === ' ' ? 'space' : ''}`}
            style={{ animationDelay: `${0.1 + index * 0.11}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}
