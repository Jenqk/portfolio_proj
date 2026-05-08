import type { ToastMessage } from '../App';

type Props = {
  toasts: ToastMessage[];
  removeToast: (id: number) => void;
};

export default function Toast({ toasts, removeToast }: Props) {
  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="toast flex items-center gap-3 px-4 py-3 rounded shadow-lg max-w-sm"
          style={{
            background: toast.type === 'success' ? '#C9A96E' : '#DC3545',
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
          }}
        >
          <span className="flex-1">{toast.text}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="opacity-70 hover:opacity-100 transition-opacity text-lg leading-none"
          >
          </button>
        </div>
      ))}
    </div>
  );
}
