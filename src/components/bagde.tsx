const Badge = ({ text, className }: { text: string, className?:string }) => {
  return (
    <span className={` flex items-center justify-center ${className}`}>
      {text}
    </span>
  );
};

export default Badge;
