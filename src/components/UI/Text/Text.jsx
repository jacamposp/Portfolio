export default function Text({ Tag, className, children }) {
  return (
    <>
      <Tag className={className}>{children}</Tag>
    </>
  );
}
