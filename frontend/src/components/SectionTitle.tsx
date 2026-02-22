interface SectionTitleProps{
  children: React.ReactNode;
  subtitle?: string;
}


export const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => (
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-purple-400 mb-4">
          {children}
        </h2>
        {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    );