import { Service } from "@/types/service";

export default function ServiceCard({ title, description }: Service) {
  return (
    <div className="border p-6 rounded-lg">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
