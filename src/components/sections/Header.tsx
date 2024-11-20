import { ArrowRight } from "lucide-react";
export const Header = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
      <div className="inline-flex gap-1 items-center">
        <p>Get Started for free</p>
        <ArrowRight className="h-4 inline-flex justify-center items-center" />
      </div>
    </div>
  );
};
