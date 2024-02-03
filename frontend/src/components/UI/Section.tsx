interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <section className="section-offset">
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
