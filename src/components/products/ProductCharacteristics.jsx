import {
  AudioWaveform,
  Recycle,
  Printer,
  Pin,
  Sun,
  Wind,
  Feather,
  Sparkles,
  Flame,
  ShieldCheck,
  Zap,
  Ban,
} from "lucide-react";

const characteristics = [
  { label: "Acoustic", icon: AudioWaveform },
  { label: "Recycle", icon: Recycle },
  { label: "Printable", icon: Printer },
  { label: "Tackable", icon: Pin },
  { label: "Thermal Insulation", icon: Sun },
  { label: "Ventilate", icon: Wind },
  { label: "Light Weight", icon: Feather },
  { label: "Decorative", icon: Sparkles },
  { label: "Fire-Rated", icon: Flame },
  { label: "Impact Resistance", icon: ShieldCheck },
  { label: "Easy Installation", icon: Zap },
  { label: "Non Toxin", icon: Ban },
];

function ProductCharacteristics() {
  return (
    <div className="mb-16 lg:mb-24">
      <h3 className="font-lead text-lg sm:text-xl uppercase tracking-wide mb-8">
        Product Characteristics
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
        {characteristics.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 bg-slate-100 flex items-center justify-center text-primary">
              <Icon size={22} />
            </div>
            <p className="text-xs uppercase tracking-wide text-slate-600">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCharacteristics;
