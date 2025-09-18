const MenuItem = ({ id, label, onClick }) => (
    <div className="cat">
        <p onClick={() => onClick(id)}>{label}</p>
    </div>
);

export default MenuItem;