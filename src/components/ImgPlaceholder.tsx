type Props = {
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
};

export default function ImgPlaceholder({ className = '', style = {}, aspectRatio}: Props) {
  return (
    <div
      className={`img-placeholder ${className}`}
      style={{ aspectRatio, ...style }}
    />
  );
}
