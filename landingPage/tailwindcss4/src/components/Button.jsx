// src/components/ui/button.jsx
export function Button({ children, ...props }) {
    return (
      <button
        className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
        {...props}
      >
        {children}
      </button>
    );
  }