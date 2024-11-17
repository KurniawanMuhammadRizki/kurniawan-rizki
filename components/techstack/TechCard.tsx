interface TechCardProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
}
const TechCard: React.FC<TechCardProps> = ({ name, icon, color }) => {
  return (
    <div
      className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow
               border border-gray-100 flex flex-col items-center justify-center gap-2">
      <div className="" style={{ color: color }}>
        {icon}
      </div>
      <span className="text-sm text-center font-medium">{name}</span>
    </div>
  );
};
export default TechCard;
