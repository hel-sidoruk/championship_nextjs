const Burger = ({ active, openMenu }: { active: boolean; openMenu: () => void }) => {
  return (
    <div className="burger" onClick={openMenu}>
      <span className={`burger__line ${active ? 'burger__lineActive' : ''}`}></span>
      <span className={`burger__line ${active ? 'burger__lineActive' : ''}`}></span>
      <span className={`burger__line ${active ? 'burger__lineActive' : ''}`}></span>
    </div>
  );
};

export default Burger;
